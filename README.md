# PEP-R Secure

Projeto separado em backend + frontend.

## O que tem aqui
- Login com sessão no servidor
- `.env` para usuário, senha e segredo de sessão
- HTML, CSS e JS separados
- Layout A4 mais ajustado para impressão/PDF
- Logo centralizada em todas as páginas (`public/logo.jpeg`)

## Como rodar
```bash
npm install
cp .env.example .env
npm start
```

Abra `http://localhost:3000`

## Importante
- Em aplicação web, **o código do front-end sempre pode ser visto no navegador**.
- **Segredos reais não devem ficar no front-end**. Neste projeto, usuário/senha ficam no servidor via `.env`.
- Para produção, use HTTPS e troque `secure: false` do cookie para `true` atrás de proxy/SSL.
