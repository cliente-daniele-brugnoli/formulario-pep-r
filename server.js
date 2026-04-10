require('dotenv').config();
const path = require('path');
const express = require('express');
const session = require('express-session');
const helmet = require('helmet');
const compression = require('compression');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 3000;

const APP_USER = process.env.APP_USER || 'admin';
const APP_PASS = process.env.APP_PASS || '123456';
const SESSION_SECRET = process.env.SESSION_SECRET || 'troque-esta-chave';

app.disable('x-powered-by');
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false,
}));
app.use(compression());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(session({
  name: 'pep_r.sid',
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false,
    sameSite: 'lax',
    maxAge: 1000 * 60 * 60 * 8,
  },
}));

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { ok: false, message: 'Muitas tentativas. Aguarde alguns minutos.' },
});

function requireAuth(req, res, next) {
  if (req.session?.authenticated) return next();
  return res.redirect('/login');
}

app.use('/assets', express.static(path.join(__dirname, 'public/assets'), {
  maxAge: '1d',
  etag: true,
}));
app.use('/logo.jpeg', express.static(path.join(__dirname, 'public/logo.jpeg'), { maxAge: '1d' }));

app.get('/', (req, res) => {
  if (req.session?.authenticated) return res.redirect('/app');
  return res.redirect('/login');
});

app.get('/login', (req, res) => {
  if (req.session?.authenticated) return res.redirect('/app');
  res.sendFile(path.join(__dirname, 'public/login.html'));
});

app.post('/api/login', loginLimiter, (req, res) => {
  const { username, password } = req.body;
  if (username === APP_USER && password === APP_PASS) {
    req.session.authenticated = true;
    req.session.username = username;
    return res.json({ ok: true, redirect: '/app' });
  }
  return res.status(401).json({ ok: false, message: 'Usuário ou senha inválidos.' });
});

app.post('/api/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('pep_r.sid');
    return res.json({ ok: true, redirect: '/login' });
  });
});

app.get('/api/session', (req, res) => {
  res.json({ ok: true, authenticated: !!req.session?.authenticated, username: req.session?.username || null });
});

app.get('/app', requireAuth, (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, () => {
  console.log(`PEP-R rodando em http://localhost:${PORT}`);
});
