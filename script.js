// Links dos vídeos e das referências enviados para o e-book.
// Para adicionar material de um grupo, basta preencher videos ou referencias abaixo.
const etapas = [
  {
    id: "gestantes",
    nome: "Gestantes",
    idade: "Período gestacional",
    videos: [
      ["Atividade 1 · Mobilidade lombopélvica com bola suíça", "sGq9cHl9VRs", "short"],
      ["Atividade 2 · Fortalecimento do assoalho pélvico", "blMTrg4Hkho", "short"],
      ["Atividade 3 · Agachamento com apoio de bola", "OB4eNEZQpMY", "short"],
      ["Atividade 4 · Alongamento torácico na cadeira", "e7ARg3rEu0M", "short"],
      ["Atividade 5 · Exercícios para retorno venoso", "8U0016EklIo", "short"],
      ["Atividade 6 · Caminhada, equilíbrio e relaxamento", "kKustnN942c", "short"]
    ],
    referencias: [
      ["Fundação Vale e UNESCO · Fisiologia do exercício", "https://fiqueativo.com.br/wp-content/uploads/2021/04/Livro-Fisiologia-do-Exercicio.pdf"],
      ["Mottola et al. · Diretriz canadense de atividade física na gestação", "https://pubmed.ncbi.nlm.nih.gov/30337460/"],
      ["Bookey · Cinesiologia do aparelho musculoesquelético", "https://cdn.bookey.app/files/pdf/book/pt/cinesiologia-do-aparelho-musculoesquel%C3%A9tico.pdf"]
    ]
  },
  {
    id: "primeira",
    nome: "Primeira infância",
    idade: "0 a 3 anos",
    videos: [],
    referencias: []
  },
  {
    id: "segunda",
    nome: "Segunda infância",
    idade: "3 a 6 anos",
    videos: [
      ["Atividade 1 · Bola ao alvo", "9paN-UyJ3vY", "short"],
      ["Atividade 2 · Desafio das cores", "VuSbh9RZ9y0", "short"],
      ["Atividade 3 · Dança das estátuas", "w7HLMWlrsx8", "short"],
      ["Atividade 4 · Boliche divertido", "TACqvdTXakk", "short"],
      ["Atividade 5 · Caminho do equilíbrio", "FjYwQeS3oIY", "short"]
    ],
    referencias: [
      ["Ministério da Educação · Base Nacional Comum Curricular", "https://basenacionalcomum.mec.gov.br/images/BNCC_EI_EF_110518_versaofinal_site.pdf"],
      ["Lana et al. · Jogos, brincadeiras e psicomotricidade", "https://www.nucleodoconhecimento.com.br/educacao/educacao-fisica-infantil"],
      ["Pansera, Paula e Valentini · Educação Física no ensino infantil", "https://seer.unisc.br/index.php/cinergis/article/view/696"],
      ["Rocha, Almeida e Moreno · O brincar e o se-movimentar", "https://www.scielo.br/j/pp/a/PLSPZxNytNQvQkZsL3Dywmx/"]
    ]
  },
  {
    id: "terceira",
    nome: "Terceira infância",
    idade: "6 a 11 anos",
    videos: [],
    referencias: []
  },
  {
    id: "adolescencia",
    nome: "Adolescência",
    idade: "12 a 18 anos",
    videos: [
      ["Atividades para adolescentes", "dfbADqqfptI", "normal"]
    ],
    referencias: []
  },
  {
    id: "adultos",
    nome: "Adultos",
    idade: "18 a 65 anos",
    videos: [],
    referencias: []
  },
  {
    id: "idosos",
    nome: "Idosos",
    idade: "65 anos ou mais",
    videos: [],
    referencias: [
      ["Ministério da Saúde · Guia de atividade física para a população brasileira", "https://bvsms.saude.gov.br/bvs/publicacoes/guia_atividade_fisica_populacao_brasileira.pdf"],
      ["Organização Mundial da Saúde · Diretrizes sobre atividade física", "https://www.who.int/publications/i/item/9789240015128"],
      ["National Institute on Aging · Saúde cognitiva de idosos", "https://www.nia.nih.gov/health/cognitive-health-and-older-adults"],
      ["National Institute on Aging · Memória e envelhecimento", "https://www.nia.nih.gov/health/memory-loss-and-forgetfulness/memory-forgetfulness-and-aging-whats-normal-and-whats-not"]
    ]
  }
];

const app = document.getElementById("app");
let telaAtual = "inicio";
let tipoAtual = null;
let etapaAtual = null;

function escapar(texto) {
  return String(texto).replace(/[&<>"']/g, caractere => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[caractere]));
}

function pararVideos() {
  // Descarrega o iframe ANTES de trocar de tela. Assim o áudio também para.
  document.querySelectorAll("iframe").forEach(frame => {
    frame.src = "about:blank";
    frame.remove();
  });
  document.querySelectorAll("video").forEach(video => {
    video.pause();
    video.removeAttribute("src");
    video.load();
  });
}

function navegar(tela, tipo = null, etapaId = null, indice = null) {
  pararVideos();
  telaAtual = tela;
  if (tipo) tipoAtual = tipo;
  if (etapaId) etapaAtual = etapaId;

  if (tela === "inicio") {
    tipoAtual = null;
    etapaAtual = null;
    mostrarInicio();
  } else if (tela === "categorias") {
    etapaAtual = null;
    mostrarCategorias();
  } else if (tela === "etapa") {
    mostrarEtapa();
  } else if (tela === "player") {
    mostrarPlayer(indice);
  }
  window.scrollTo(0, 0);
}

function cabecalhoPagina(titulo, subtitulo) {
  return `<h1>${escapar(titulo)}</h1><p class="subtitulo">${escapar(subtitulo)}</p>`;
}

function botaoVoltar(destino) {
  return `<button class="voltar" type="button" data-voltar="${destino}">← Voltar</button>`;
}

function mostrarInicio() {
  app.innerHTML = `
    <section class="pagina entrada">
      <span class="secao-pequena">SAÚDE HUMANA · CRESCIMENTO E DESENVOLVIMENTO</span>
      ${cabecalhoPagina("Links do E-book", "Selecione o material que deseja consultar.")}
      <div class="opcoes-iniciais">
        <button type="button" class="opcao-principal" data-tipo="videos">
          <span class="opcao-icone" aria-hidden="true">▶</span>
          <span>Vídeos</span>
          <span class="seta">→</span>
        </button>
        <button type="button" class="opcao-principal" data-tipo="textos">
          <span class="opcao-icone" aria-hidden="true">≡</span>
          <span>Textos</span>
          <span class="seta">→</span>
        </button>
      </div>
    </section>`;
}

function mostrarCategorias() {
  const titulo = tipoAtual === "videos" ? "Vídeos" : "Textos";
  const descricao = tipoAtual === "videos"
    ? "Escolha a etapa para assistir às atividades demonstrativas."
    : "Escolha a etapa para acessar as referências bibliográficas.";

  const cards = etapas.map(etapa => {
    const quantidade = tipoAtual === "videos" ? etapa.videos.length : etapa.referencias.length;
    const disponivel = quantidade > 0;
    const legenda = disponivel
      ? `${quantidade} ${tipoAtual === "videos" ? (quantidade === 1 ? "vídeo" : "vídeos") : (quantidade === 1 ? "referência" : "referências")}`
      : "Não recebido";

    return `<div class="etapa-item">
      <div class="etapa-nome">
        <strong>${escapar(etapa.nome)}</strong>
        <small>${escapar(etapa.idade)}</small>
      </div>
      ${disponivel
        ? `<button type="button" class="btn" data-etapa="${etapa.id}">Acessar <span>→</span></button>`
        : `<button type="button" class="btn indisponivel" disabled>Não recebido</button>`
      }
      <span class="visualmente-oculto">${escapar(legenda)}</span>
    </div>`;
  }).join("");

  app.innerHTML = `
    <section class="pagina">
      ${botaoVoltar("inicio")}
      ${cabecalhoPagina(titulo, descricao)}
      <div class="lista-etapas">${cards}</div>
    </section>`;
}

function mostrarEtapa() {
  const etapa = etapas.find(item => item.id === etapaAtual);
  if (!etapa) return navegar("categorias");

  let conteudo = "";
  if (tipoAtual === "videos") {
    conteudo = etapa.videos.map(([nome], indice) => `
      <button class="atividade-btn" type="button" data-video="${indice}">
        <span>${escapar(nome)}</span>
        <span aria-hidden="true">▶</span>
      </button>`).join("");
  } else {
    conteudo = etapa.referencias.map(([titulo, url]) => `
      <a class="referencia-link" href="${escapar(url)}" target="_blank" rel="noopener noreferrer">
        <span>${escapar(titulo)}</span>
        <span aria-hidden="true">↗</span>
      </a>`).join("");
  }

  app.innerHTML = `
    <section class="pagina">
      ${botaoVoltar("categorias")}
      ${cabecalhoPagina(etapa.nome, etapa.idade)}
      <h2 class="subtitulo-secao">${tipoAtual === "videos" ? "Vídeos das atividades" : "Referências bibliográficas"}</h2>
      <div class="lista-material">${conteudo || '<p class="ausente">Não recebido</p>'}</div>
    </section>`;
}

function mostrarPlayer(indice) {
  const etapa = etapas.find(item => item.id === etapaAtual);
  const video = etapa?.videos[indice];
  if (!video) return navegar("etapa");

  const [titulo, id, formato] = video;
  const urlYouTube = `https://www.youtube.com/watch?v=${encodeURIComponent(id)}`;
  const urlIncorporada = `https://www.youtube.com/embed/${encodeURIComponent(id)}?playsinline=1&rel=0&enablejsapi=1`;

  app.innerHTML = `
    <section class="pagina">
      ${botaoVoltar("etapa")}
      ${cabecalhoPagina(titulo, etapa.nome)}
      <div class="player-area">
        <div class="player ${formato === "short" ? "vertical" : ""}">
          <iframe
            src="${urlIncorporada}"
            title="${escapar(titulo)}"
            loading="eager"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen></iframe>
        </div>
      </div>
      <a class="link-externo" href="${urlYouTube}" target="_blank" rel="noopener noreferrer">
        Abrir vídeo no YouTube ↗
      </a>
    </section>`;
}

app.addEventListener("click", event => {
  const tipo = event.target.closest("[data-tipo]");
  if (tipo) return navegar("categorias", tipo.dataset.tipo);

  const etapa = event.target.closest("[data-etapa]");
  if (etapa) return navegar("etapa", null, etapa.dataset.etapa);

  const video = event.target.closest("[data-video]");
  if (video) return navegar("player", null, null, Number(video.dataset.video));

  const voltar = event.target.closest("[data-voltar]");
  if (voltar) return navegar(voltar.dataset.voltar);
});

function irInicio(event) {
  event.preventDefault();
  navegar("inicio");
}

document.getElementById("inicio").addEventListener("click", irInicio);
document.getElementById("voltarInicio").addEventListener("click", irInicio);
window.addEventListener("pagehide", pararVideos);

mostrarInicio();
