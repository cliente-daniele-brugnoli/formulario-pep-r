const BEH_AREAS = ['R','M','S','L'];
const DEV_AREAS = ['I','P','MF','MA','OM','DC','CV'];
const ITEMS = [

  // ── R1 ──────────────────────────────────
  [1,'Desenrosca a tampa do frasco de bolhas','Bolhas','MF',1],
  [2,'Faz bolinhas de sabão','Bolhas','MF',1],
  [3,'Acompanha visualmente o movimento','Bolhas','P',1],
  [4,'Busca visualmente ao longo da linha média','Bolhas','P',1],
  [5,'Examina os blocos de forma adequada','Blocos Táteis','S',1],
  [6,'Manipula o Caleidoscópio','Caleidoscópio','I',1],
  [7,'Apresenta Dominância Ocular','Caleidoscópio','P',1],
  [8,'Toca duas vezes a campainha','Campainha','I',1],
  [9,'Pressiona com os dedos (pontue P se 12 = P)','Massa de Modelar','MF',1],
  [10,'Segura um palito','Massa de Modelar','MF',1],
  [11,'Enrola argila','Massa de Modelar','I',1],
  [12,'Modela uma "tigela" de argila','Massa de Modelar','MF',1],
  [13,'Manipula o fantoche','Fantoches e Objetos','I',1],
  [14,'Imita sons dos animais','Fantoches e Objetos','I',1],
  [15,'Imita ações com o boneco (3)','Fantoches e Objetos','I',1],
  [16,'Aponta três partes do corpo do boneco (3)','Fantoches e Objetos','DC',1],
  [17,'Aponta para as próprias partes do corpo (3)','Fantoches e Objetos','DC',1],
  [18,'Interação complexa brincando (R se 13 = R)','Fantoches e Objetos','DC',1],
  // ── R2 ──────────────────────────────────
  [19,'Indica o posicionamento correto de três formas','Quadros Geométricos','P',2],
  [20,'Ajusta as formas nos locais corretos (3)','Quadros Geométricos','P',2],
  [21,'Identifica as Formas Expressivamente (3)','Quadros Geométricos','CV',2],
  [22,'Identifica as Formas Receptivamente (3)','Quadros Geométricos','DC',2],
  [23,'Completa o Quadro de Formas de Objetos','Quadro de Objetos','OM',2],
  [24,'Cruza a linha média para pegar as peças','Quadro de Objetos','MA',2],
  [25,'Indica os encaixes pelo tamanho','Tabuleiro de 3 Formas','P',2],
  [26,'Encaixa as peças nos locais pelo tamanho','Tabuleiro de 3 Formas','OM',2],
  [27,'Identifica Expressivamente Grande e Pequeno','Tabuleiro de 3 Formas','CV',2],
  [28,'Identifica Receptivamente Grande e Pequeno','Tabuleiro de 3 Formas','DC',2],
  [29,'Indica a posição das peças do QC (R se 23 = R)','Quebra-Cabeça Gato','DC',2],
  [30,'Encaixa as peças do QC (R se 23 = R)','Quebra-Cabeça Gato','OM',2],
  [31,'Completa o Quebra-Cabeça: Vaca (R se 23 = R)','Quebra-Cabeça Vaca','DC',2],
  [32,'Pareia Blocos Coloridos com Discos (5)','Discos e Blocos Coloridos','P',2],
  [33,'Nomeia as Cores Expressivamente (5)','Discos e Blocos Coloridos','CV',2],
  [34,'Nomeia as Cores Receptivamente (5)','Discos e Blocos Coloridos','DC',2],
  [35,'Ouve e se orienta ao Som da Castanhola','Castanhola','P',2],
  [36,'Reage ao som da Castanhola (A/M/G)','Castanhola','S',2],
  // ── R3 ──────────────────────────────────
  [37,'Anda sozinho','Cócegas','MA',3],
  [38,'Bate palmas','Cócegas','MA',3],
  [39,'Selecione 4 objetos ocultos em bolsa pelo tato','Cócegas','MF',3],
  [40,'Examina e manipula os materiais de teste','Cócegas','MA',3],
  [41,'Observa os materiais e o entorno adequadamente','Cócegas','I',3],
  [42,'Bata palmas (imitação)','Cócegas','MA',3],
  [43,'Pega a bola (1 em 3 tentativas)','Bola','MA',3],
  [44,'Joga a bola (1 em 3 tentativas)','Bola','MA',3],
  [45,'Chuta a bola (1 em 3 tentativas)','Bola','MA',3],
  [46,'Apresenta dominância de membros inferiores (pé)','Bola','MA',3],
  [47,'Carrega a bola (4 passos) (R se 37 = R)','Bola','MA',3],
  [48,'Empurra a bola (P se 44 = P)','Bola','MA',3],
  [49,'Sobe escadas com pés alternados (R se 37 = R)','Escadas','MA',3],
  [50,'Sobe na cadeira','Cadeira','MA',3],
  [51,'Empurra-se sobre a plataforma','Plataforma de Rodas','MA',3],
  [52,'Jogo Social de Bebê (P se 18 = P)','Toalha / Objeto Preferido','I',3],
  [53,'Encontrar o Objeto Escondido (P se 108 = P)','Toalha / Objeto Preferido','DC',3],
  [54,'Reage à própria imagem no Espelho (A/M/G)','Espelho','R',3],
  [55,'Reage ao contato físico (A/M/G)','Contato Físico','R',3],
  // ── R4 ──────────────────────────────────
  [56,'Reage a Cócegas (A/M/G)','Cócegas','S',4],
  [57,'Ouve e se orienta ao Som do apito (A/M/G)','Apito','P',4],
  [58,'Reage ao Som do Apito (A/M/G)','Apito','S',4],
  [59,'Reage a gestos','Reage a Gestos','P',4],
  [60,'Toma Suco no Copo','Copo e Suco','MA',4],
  [61,'Gestos pedindo ajuda','Pote e Objeto Preferido','CV',4],
  [62,'Reage ao Barbante (A/M/G)','Contas, Barbante e Eixo','M',4],
  [63,'Enfia as Contas no Barbante','Contas, Barbante e Eixo','MF',4],
  [64,'Balança as Contas no Barbante','Contas, Barbante e Eixo','MA',4],
  [65,'Retira as Contas de um Eixo (6)','Contas, Barbante e Eixo','MF',4],
  [66,'Coloca as Contas em um Eixo (P se 62 = P)','Contas, Barbante e Eixo','MF',4],
  [67,'Usa as mãos cooperativamente','Contas, Barbante e Eixo','MF',4],
  [68,'Transfere objetos de uma mão para outra','Contas, Barbante e Eixo','MA',4],
  [69,'Qual é o seu nome?','Identificação','CV',4],
  [70,'Você é Menino ou Menina?','Identificação','CV',4],
  [71,'Escreve Espontaneamente','Livro de Escrita','OM',4],
  [72,'Apresenta dominância manual: ( )Direita ( )Esquerda','Livro de Escrita','MA',4],
  // ── R5 ──────────────────────────────────
  [73,'Copia a linha vertical (1/3 tent. / R se 71 = R)','Cópias Gráficas','OM',5],
  [74,'Copia o círculo (1/3 tent. / R se 71 = R)','Cópias Gráficas','OM',5],
  [75,'Copia o quadrado (1/3 tent. / R se 71 = R)','Cópias Gráficas','OM',5],
  [76,'Copia o triângulo (1/3 tent. / R se 71 = R)','Cópias Gráficas','OM',5],
  [77,'Copia o diamante (1/3 tent. / R se 71 = R)','Cópias Gráficas','OM',5],
  [78,'Colore sem sair das linhas (R se 71 = R)','Cópias Gráficas','OM',5],
  [79,'Traça Formas (P se 74 = P ou E)','Cópias Gráficas','OM',5],
  [80,'Pareia Letras (9)','Loto Alfabético','MF',5],
  [81,'Identifica Letras Expressivamente (9)','Loto Alfabético','CV',5],
  [82,'Identifica Letras Receptivamente (9)','Loto Alfabético','DC',5],
  [83,'Copia Letras (7) (R se 73 = R)','Loto Alfabético','OM',5],
  [84,'Desenha uma pessoa (R se 73 = R)','Loto Alfabético','MF',5],
  [85,'Escreve o Primeiro Nome (R se 83 = R)','Loto Alfabético','OM',5],
  [86,'Corta papel com tesoura','Papel e Tesoura','MF',5],
  [87,'Identifica e entrega (4) — pode precisar dicas visuais','Saco com 5 Objetos','DC',5],
  [88,'Identifica objetos pelo tato (4) — sem dicas visuais','Saco com 5 Objetos','DC',5],
  [89,'Faz um menino com as peças de feltro','Feltro','DC',5],
  [90,'Brinca Sozinho (A/M/G)','Brincar não Estruturado','R',5],
  [91,'Iniciativa de Interação Social (A/M/G)','Brincar não Estruturado','R',5],
  [92,'Reage a Voz do Avaliador (A/M/G)','Brincar não Estruturado','M',5],
  // ── R6 ──────────────────────────────────
  [93,'Empilha blocos (8)','Pequenos Blocos e Caixa','MF',6],
  [94,'Coloca Blocos na Caixa','Pequenos Blocos e Caixa','OM',6],
  [95,'Conta de 2 a 7 blocos','Pequenos Blocos e Caixa','CV',6],
  [96,'Conta receptivamente 2 e 7 blocos','Pequenos Blocos e Caixa','DC',6],
  [97,'Atende a 2 Instruções Sequenciais','Copos e Blocos','DC',6],
  [98,'Seleção de opções (R se 94 = R)','Blocos, Tabuleiros e Containers','DC',6],
  [99,'Joga na cesta (P se 98 = P ou E)','Blocos, Tabuleiros e Containers','OM',6],
  [100,'Repete 2 e 3 dígitos','Imitação de Dígitos','I',6],
  [101,'Repete 2-3 dígitos (1ª: 7-9; 2-4-1 / 2ª: 5-3; 5-7-9)','Imitação de Dígitos','CV',6],
  [102,'Repete 4 e 5 dígitos (R se 100 = R)','Imitação de Dígitos','I',6],
  [103,'Repete 4-5 dígitos (1ª: 5-8-6-1; 3-2-9-4-8 / 2ª: 7-1-4-2; 7-4-8-3-1)','Imitação de Dígitos','CV',6],
  [104,'Conta em Voz Alta (1 a 10)','Contagem Direta','CV',6],
  [105,'Identifica Números Expressivamente (10)','Cartões Numéricos','CV',6],
  [106,'Resolve Problemas na 2ª pessoa (R se 95 = R)','Adicionar e Subtrair','CV',6],
  [107,'Resolve Problemas na 3ª pessoa (R se 95 = R)','Adicionar e Subtrair','CV',6],
  // ── R7 ──────────────────────────────────
  [108,'Encontra Bola sob a xícara (2) (R se 53 = R ou E)','Xícaras e Bolas','DC',7],
  [109,'Consegue pegar "pinçando"','Xícaras e Bolas','MF',7],
  [110,'Simula o uso de Objetos (sons, gestos) (5)','Cartões Funcionais','DC',7],
  [111,'Ouve e se orienta pelo som do sino','Sino','P',7],
  [112,'Reage ao Som do Sino (A/M/G)','Sino','S',7],
  [113,'Imita com Objetos Sonoros (3)','Sino, Castanhola e Colher','I',7],
  [114,'Seleciona os Cartões por Cor e Forma (12) (R se 32 = R ou E)','Cartões de Classificação','DC',7],
  [115,'Pareia Objetos e Figuras (5)','Pareamento de Cartões','P',7],
  [116,'Nomeia Objetos (5)','Pareamento de Cartões','CV',7],
  [117,'Entrega Objetos sob Pedido (3)','Pareamento de Cartões','DC',7],
  [118,'Demonstra as funções dos Objetos (4)','Pareamento de Cartões','DC',7],
  [119,'Aciona o Interruptor de Luz','Interruptor de Luz','MF',7],
  [120,'Demonstra interesse pelo Livro de Figuras','Livro de Linguagem','I',7],
  [121,'Identifica Figuras Receptivamente','Livro de Linguagem','P',7],
  [122,'Identifica Figuras Expressivamente','Livro de Linguagem','CV',7],
  [123,'Repete Sons (3) — mmm, ba-ba, pa-ta, la-la','Repete Sons e Palavras','I',7],
  [124,'Repete Palavras (2) — dentro, bolacha, bebê','Repete Sons e Palavras','I',7],
  // ── R8 ──────────────────────────────────
  [125,'Repete Frases curtas (2) (R se 124 = R)','Repete Sons, Palavras e Sentenças','CV',8],
  [126,'Repete Sentenças Simples (2) (R se 125 = R/E)','Repete Sons, Palavras e Sentenças','CV',8],
  [127,'Repete Sentenças Complexas (2) (R se 126 = R/E)','Repete Sons, Palavras e Sentenças','CV',8],
  [128,'Responde às instruções verbais (4)','Caixa, Fantoche, Copo, Cadeira, Bola','DC',8],
  [129,'Reage à imitação de suas próprias ações (P se 41 = P)','Imitação','I',8],
  [130,'Reage à imitação de seus próprios sons (P se 124 = P)','Imitação','I',8],
  [131,'Responde a Comandos Simples (3)','Comandos','DC',8],
  [132,'Usa Frases de 2 Palavras (3)','Uso da Linguagem','CV',8],
  [133,'Usa Frases de 4 ou 5 palavras (1)','Uso da Linguagem','CV',8],
  [134,'Usa Plurais (2)','Uso da Linguagem','CV',8],
  [135,'Usa Pronomes (1)','Uso da Linguagem','CV',8],
  [136,'Lê as palavras curtas (3)','Livro de Linguagem','CV',8],
  [137,'Lê sentenças Curtas (1) (R se 136 = R ou E)','Livro de Linguagem','CV',8],
  [138,'Lê com poucos erros (R se 137 = R ou E)','Livro de Linguagem','CV',8],
  [139,'Lê com compreensão (2) (R se 137 = R ou E)','Livro de Linguagem','CV',8],
  [140,'Lê e acompanha Instruções (R se 137 = R ou E)','Livro de Linguagem','DC',8],
  [141,'Antecipa Rotina','Caixa de "Pronto"','DC',8],
  [142,'Faz "Tchau" com a mão (P se 41 = P)','Tchau','I',8],
  [143,'Reação ao Beliscão (A/M/G)','Beliscão','S',8],
  // ── R9 — SOMENTE COMPORTAMENTO ──────────
  [144,'Exploração do ambiente de teste','Observações Comportamentais','M',9],
  [145,'Exploração dos materiais de teste','Observações Comportamentais','M',9],
  [146,'Contato Ocular','Observações Comportamentais','R',9],
  [147,'Sensibilidade Visual','Observações Comportamentais','S',9],
  [148,'Sensibilidade Auditiva','Observações Comportamentais','S',9],
  [149,'Interesse por texturas','Observações Comportamentais','S',9],
  [150,'Interesse por gostos','Observações Comportamentais','S',9],
  [151,'Interesse por cheiros','Observações Comportamentais','S',9],
  [152,'Afeto','Observações Comportamentais','R',9],
  [153,'Comportamento durante as atividades','Observações Comportamentais','R',9],
  [154,'Busca de ajuda do avaliador','Observações Comportamentais','R',9],
  [155,'Reação de Medo','Observações Comportamentais','R',9],
  [156,'Movimentos e Maneirismos','Observações Comportamentais','S',9],
  [157,'Consciência da presença do avaliador','Observações Comportamentais','R',9],
  [158,'Cooperação com o avaliador','Observações Comportamentais','R',9],
  [159,'Amplitude da atenção','Observações Comportamentais','M',9],
  [160,'Tolerância a Interrupções','Observações Comportamentais','M',9],
  [161,'Entonação e Inflexão','Observações Comportamentais','L',9],
  [162,'Balbúcio','Observações Comportamentais','L',9],
  // ── R10 — SOMENTE COMPORTAMENTO ─────────
  [163,'Uso das palavras','Obs. Comportamentais (continuação)','L',10],
  [164,'Uso de jargões e Linguagem Idiossincrática','Obs. Comportamentais (continuação)','L',10],
  [165,'Ecolalia Tardia','Obs. Comportamentais (continuação)','L',10],
  [166,'Ecolalia Imediata','Obs. Comportamentais (continuação)','L',10],
  [167,'Perseverança de Palavras ou Som','Obs. Comportamentais (continuação)','L',10],
  [168,'Uso de Pronomes','Obs. Comportamentais (continuação)','L',10],
  [169,'Inteligibilidade da Fala','Obs. Comportamentais (continuação)','L',10],
  [170,'Habilidade Sintática','Obs. Comportamentais (continuação)','L',10],
  [171,'Comunicação Espontânea','Obs. Comportamentais (continuação)','L',10],
  [172,'Motivação por recompensas tangíveis','Obs. Comportamentais (continuação)','M',10],
  [173,'Motivação por Elogio Social','Obs. Comportamentais (continuação)','R',10],
  [174,'Motivação por Recompensas Intrínsecas','Obs. Comportamentais (continuação)','M',10],
];

const SUMMARY_TOTALS = [
  {code:'I',  name:'Imitação', type:'d', keys:['P','E','R'], pages:[1,0,2,0,0,2,3,3,0,0], total:16},
  {code:'P',  name:'Percepção', type:'d', keys:['P','E','R'], pages:[3,5,0,2,0,0,3,0,0,0], total:13},
  {code:'MF', name:'Motora Fina', type:'d', keys:['P','E','R'], pages:[5,0,1,4,3,1,2,0,0,0], total:16},
  {code:'MA', name:'Motora Grossa', type:'d', keys:['P','E','R'], pages:[0,1,13,4,0,0,0,0,0,0], total:18},
  {code:'OM', name:'Integração Olho-Mão', type:'d', keys:['P','E','R'], pages:[0,3,0,1,9,2,0,0,0,0], total:15},
  {code:'DC', name:'Desempenho Cognitivo', type:'d', keys:['P','E','R'], pages:[3,5,1,0,4,3,6,4,0,0], total:26},
  {code:'CV', name:'Cog. Verbal', type:'d', keys:['P','E','R'], pages:[0,3,0,3,1,7,2,11,0,0], total:27},
  {code:'R',  name:'Relacionamento e Afeto', type:'b', keys:['A','M','G'], pages:[0,0,2,0,2,0,0,0,7,1], total:12},
  {code:'M',  name:'Brincar e Materiais', type:'b', keys:['A','M','G'], pages:[0,0,0,1,1,0,0,0,4,2], total:8},
  {code:'S',  name:'Respostas Sensoriais', type:'b', keys:['A','M','G'], pages:[1,1,0,2,0,0,1,1,6,0], total:12},
  {code:'L',  name:'Linguagem', type:'b', keys:['A','M','G'], pages:[0,0,0,0,0,0,0,0,2,9], total:11},
];

const isBeh = a => BEH_AREAS.includes(a);
const isDev = a => DEV_AREAS.includes(a);

function propagateField(id, fallback='') {
  const v = document.getElementById(id)?.value || fallback;
  document.querySelectorAll('.dyn-' + id).forEach(el => el.textContent = v);
}

function calcIdade() {
  const nasc = document.getElementById('nasc').value;
  const aval = document.getElementById('aval').value;
  const out = document.getElementById('idade');
  if (!nasc || !aval) {
    out.value = '';
    document.querySelectorAll('.dyn-idade').forEach(el => el.textContent = '_______');
    return;
  }
  const d1 = new Date(nasc);
  const d2 = new Date(aval);
  let anos = d2.getFullYear() - d1.getFullYear();
  let meses = d2.getMonth() - d1.getMonth();
  if (meses < 0) { anos--; meses += 12; }
  if (d2.getDate() < d1.getDate()) meses--;
  if (meses < 0) { anos--; meses += 12; }
  out.value = `${anos}a ${meses}m`;
  document.querySelectorAll('.dyn-idade').forEach(el => el.textContent = out.value);
}

function buildHeader(titleRight = '', badgeHtml = '', showBadge = true) {
  return `
    <div class="ph">
      <div class="logo-box logo-box--image">
        <img src="/logo.jpeg" alt="Logo" class="logo-img" onerror="this.parentElement.classList.remove('logo-box--image'); this.remove();">
      </div>
      <div class="ph-center">
        <div class="main">PEP-R</div>
        <div class="sub">Perfil Psicoeducacional Revisado</div>
        <div class="sub2">${titleRight}</div>
      </div>
      ${showBadge ? `<div class="badge">${badgeHtml}</div>` : '<div class="header-spacer"></div>'}
    </div>`;
}

function buildMiniHeader() {
  return `
    <div class="page-mini-header">
      <span>Paciente: <strong class="dyn-nome">___________________________</strong></span>
      <span>Avaliação: <strong class="dyn-aval">___________</strong></span>
      <span>Idade: <strong class="dyn-idade">_______</strong></span>
    </div>`;
}

function buildPages() {
  const app = document.getElementById('app');
  const pages = {};
  ITEMS.forEach(item => {
    const p = item[4];
    if (!pages[p]) pages[p] = [];
    pages[p].push(item);
  });

  for (let pg = 1; pg <= 10; pg++) {
    const items = pages[pg] || [];
    const behOnly = pg >= 9;
    const div = document.createElement('section');
    div.className = 'page';
    div.id = `pg-r${pg}`;

    div.innerHTML = buildHeader(behOnly ? 'Observações Comportamentais' : '', `R${pg}`) + buildMiniHeader();

    const wrap = document.createElement('div');
    wrap.className = 'ft-wrap';
    const table = document.createElement('table');
    table.className = 'ft';

    const cg = document.createElement('tr');
    cg.innerHTML = '<th class="cg-empty" colspan="2"></th>';
    cg.innerHTML += '<th class="cg-beh" colspan="4">Comportamento — A · M · G</th>';
    if (!behOnly) cg.innerHTML += '<th class="cg-dev" colspan="7">Desenvolvimento — P · E · R</th>';
    table.appendChild(cg);

    const sh = document.createElement('tr');
    sh.innerHTML = '<th class="sh-num">#</th><th class="sh-desc">Item</th>';
    ['R','M','S','L'].forEach(c => sh.innerHTML += `<th class="sh-b">${c}</th>`);
    if (!behOnly) DEV_AREAS.forEach(c => sh.innerHTML += `<th class="sh-d">${c === 'MA' ? 'MG' : c}</th>`);
    table.appendChild(sh);

    let lastGroup = '';
    let rowIdx = 0;
    items.forEach(it => {
      const [id, desc, mat, area] = it;
      const beh = isBeh(area);
      const scale = beh ? 'AMG' : 'PER';

      if (mat !== lastGroup) {
        lastGroup = mat;
        const gr = document.createElement('tr');
        gr.className = 'mg-row';
        gr.innerHTML = `<td colspan="${2 + 4 + (behOnly ? 0 : 7)}">📦 ${mat}</td>`;
        table.appendChild(gr);
      }

      const tr = document.createElement('tr');
      tr.className = 'ir ' + (rowIdx % 2 === 0 ? 'even' : 'odd');
      rowIdx++;

      let html = `<td class="td-n">${id}</td><td class="td-d">${desc}</td>`;
      ['R','M','S','L'].forEach(col => {
        html += area === col
          ? `<td class="td-c td-act-b"><input class="cell-in cell-in-b" maxlength="1" data-item="${id}" data-area="${col}" title="${scale}"></td>`
          : '<td class="td-c td-off"></td>';
      });
      if (!behOnly) {
        DEV_AREAS.forEach(col => {
          html += area === col
            ? `<td class="td-c td-act-d"><input class="cell-in cell-in-d" maxlength="1" data-item="${id}" data-area="${col}" title="${scale}"></td>`
            : '<td class="td-c td-off"></td>';
        });
      }

      tr.innerHTML = html;
      table.appendChild(tr);
    });

    const tot = document.createElement('tr');
    tot.className = 'tot-row';
    tot.innerHTML = '<td class="tot-lbl" colspan="2">Totais desta página →</td>';
    ['R','M','S','L'].forEach(col => {
      const n = items.filter(i => i[3] === col).length;
      tot.innerHTML += `<td class="tot-b">${n || '–'}</td>`;
    });
    if (!behOnly) {
      DEV_AREAS.forEach(col => {
        const n = items.filter(i => i[3] === col).length;
        tot.innerHTML += `<td class="tot-d">${n || '–'}</td>`;
      });
    }
    table.appendChild(tot);

    wrap.appendChild(table);
    div.appendChild(wrap);
    div.appendChild(buildScoreBandElement(behOnly));
    app.appendChild(div);
  }
}

function buildScoreBandElement(behOnly) {
  const wrapper = document.createElement('div');
  wrapper.className = 'score-band';
  const title = document.createElement('div');
  title.className = 'sb-title';
  title.textContent = 'Contagem desta página (preencha ao final)';
  wrapper.appendChild(title);

  const grid = document.createElement('div');
  grid.className = 'sb-grid';
  grid.appendChild(buildScoreBlock(['R','M','S','L'], 'b'));
  if (!behOnly) grid.appendChild(buildScoreBlock(DEV_AREAS, 'd'));
  wrapper.appendChild(grid);
  return wrapper;
}

function buildScoreBlock(areas, type) {
  const keys = type === 'b' ? ['A','M','G'] : ['P','E','R'];
  const block = document.createElement('div');
  block.className = 'sb-block';
  areas.forEach(area => {
    const row = document.createElement('div');
    row.className = 'score-row';
    row.innerHTML = `<div class="score-key ${type === 'b' ? 'beh' : 'dev'}">${area}</div>`;
    keys.forEach(k => {
      row.innerHTML += `<div class="score-cell"><span>${k}=</span><input maxlength="3"></div>`;
    });
    block.appendChild(row);
  });
  return block;
}

function buildCalcPage() {
  const app = document.getElementById('app');
  const div = document.createElement('section');
  div.className = 'page';
  div.id = 'pg-calc';
  div.innerHTML = `
    ${buildHeader('Ficha para Cálculo dos Resultados', '', false)}
    ${buildMiniHeader()}
    <p class="info-bar" style="margin-bottom:12px">
      <strong>ℹ Cálculo:</strong> Transfira os totais do final de cada página, some por linha e consolide os resultados na ficha sumário.
    </p>
    <div class="calc-grid">${buildCalcGrid()}</div>
  `;
  app.appendChild(div);
}

function buildCalcGrid() {
  return SUMMARY_TOTALS.map(a => {
    const headColor = a.type === 'd' ? 'var(--teal)' : 'var(--rose)';
    const color = a.type === 'd' ? 'var(--teal-d)' : 'var(--rose-d)';
    let rows = `
      <div class="calc-card-title" style="color:${headColor}">${a.code} — ${a.name}</div>
      <table class="calc-table">
        <tr>
          <td class="left">Pág</td>
          ${Array.from({length:10}, (_,i)=>`<td>${i+1}</td>`).join('')}
          <td style="background:${headColor};color:#fff;font-weight:800">Total</td>
        </tr>
        <tr>
          <td class="left">#</td>
          ${a.pages.map(n => `<td style="color:${n ? color : 'var(--g3)'}">${n || '—'}</td>`).join('')}
          <td style="font-weight:800;color:${color}">${a.total}</td>
        </tr>`;
    a.keys.forEach(k => {
      rows += `<tr><td class="left" style="color:${color}">${k}</td>`;
      a.pages.forEach(n => {
        rows += n > 0 ? '<td><input maxlength="2"></td>' : '<td style="background:#F5F2EF"></td>';
      });
      rows += `<td><input maxlength="3" style="color:${color};font-weight:800"></td></tr>`;
    });
    rows += '</table>';
    return `<div>${rows}</div>`;
  }).join('');
}

function wireEvents() {
  document.getElementById('nome').addEventListener('input', () => propagateField('nome', '___________________________'));
  document.getElementById('aval').addEventListener('input', () => propagateField('aval', '___________'));
  document.getElementById('nasc').addEventListener('input', calcIdade);
  document.getElementById('aval').addEventListener('input', calcIdade);

  document.addEventListener('input', e => {
    const el = e.target;
    if (!el.classList.contains('cell-in')) return;
    const isBehCell = el.classList.contains('cell-in-b');
    const valid = isBehCell ? ['A','M','G'] : ['P','E','R'];
    const v = (el.value || '').toUpperCase();
    el.value = valid.includes(v) ? v : '';
  });

  document.getElementById('printBtn').addEventListener('click', () => window.print());
  document.getElementById('logoutBtn').addEventListener('click', async () => {
    const res = await fetch('/api/logout', { method:'POST' });
    const data = await res.json();
    window.location.href = data.redirect || '/login';
  });
}

buildPages();
buildCalcPage();
wireEvents();
