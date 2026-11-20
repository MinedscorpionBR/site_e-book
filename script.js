// Vídeos e referências reunidos por fase do desenvolvimento.
// As duas URLs iniciais do short kKustnN942c apontam para o mesmo vídeo.
const etapas = [
  {
    id: "gestantes",
    nome: "Gestantes",
    idade: "Período gestacional",
    videos: [
      ["Atividade 1 - Mobilidade lombopélvica com bola suíça", "sGq9cHl9VRs", "short"],
      ["Atividade 2 - Fortalecimento do assoalho pélvico", "blMTrg4Hkho", "short"],
      ["Atividade 3 - Agachamento com apoio de bola", "OB4eNEZQpMY", "short"],
      ["Atividade 4 - Alongamento torácico na cadeira", "e7ARg3rEu0M", "short"],
      ["Atividade 5 - Exercícios para retorno venoso", "8U0016EklIo", "short"],
      ["Atividade 6 - Caminhada, equilíbrio e relaxamento", "kKustnN942c", "short"]
    ],
    referencias: [
      ["Fundação Vale e UNESCO - Fisiologia do exercício", "https://fiqueativo.com.br/wp-content/uploads/2021/04/Livro-Fisiologia-do-Exercicio.pdf"],
      ["Mottola et al. - Diretriz de atividade física na gestação", "https://pubmed.ncbi.nlm.nih.gov/30337460/"],
      ["Bookey - Cinesiologia do aparelho musculoesquelético", "https://cdn.bookey.app/files/pdf/book/pt/cinesiologia-do-aparelho-musculoesquel%C3%A9tico.pdf"]
    ]
  },
  {
    id: "primeira",
    nome: "Primeira infância",
    idade: "0 a 3 anos",
    videos: [
      ["Atividade 1 - Amarelinha", "IFiMXmc-NZw", "short"],
      ["Atividade 2 - Arremesso", "OkvxIridnSA", "short"],
      ["Atividade 3 - Acerte o cesto", "NllGvQCLfu4", "short"],
      ["Atividade 4 - Passa a bola", "2VYCJOWgrN4", "normal"],
      ["Atividade 5 - Circuito motor", "AtVEvwOExQo", "short"]
    ],
    referencias: [
      ["Ministério da Saúde - Primeira infância", "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/saude-da-crianca/primeira-infancia"],
      ["Ministério da Saúde - Guia de intervenção precoce de 0 a 3 anos", "https://bvsms.saude.gov.br/bvs/publicacoes/guia_intervencao_precoce_0_3_anos.pdf"],
      ["Organização Mundial da Saúde - Atividade física, comportamento sedentário e sono para crianças menores de 5 anos", "https://www.who.int/publications/i/item/9789241550536"],
      ["OMS, UNICEF e Banco Mundial - Cuidados para o desenvolvimento na primeira infância", "https://www.who.int/publications/i/item/9789241514064"]
    ]
  },
  {
    id: "segunda",
    nome: "Segunda infância",
    idade: "3 a 6 anos",
    videos: [
      ["Atividade 1 - Bola ao alvo", "9paN-UyJ3vY", "short"],
      ["Atividade 2 - Desafio das cores", "VuSbh9RZ9y0", "short"],
      ["Atividade 3 - Dança das estátuas", "w7HLMWlrsx8", "short"],
      ["Atividade 4 - Boliche divertido", "TACqvdTXakk", "short"],
      ["Atividade 5 - Caminho do equilíbrio", "FjYwQeS3oIY", "short"]
    ],
    referencias: [
      ["Ministério da Educação - Base Nacional Comum Curricular", "https://basenacionalcomum.mec.gov.br/images/BNCC_EI_EF_110518_versaofinal_site.pdf"],
      ["Lana et al. - Jogos, brincadeiras e psicomotricidade", "https://www.nucleodoconhecimento.com.br/educacao/educacao-fisica-infantil"],
      ["Pansera, Paula e Valentini - Habilidades motoras fundamentais", "https://seer.unisc.br/index.php/cinergis/article/view/696"],
      ["Rocha, Almeida e Moreno - O brincar e o se-movimentar", "https://www.scielo.br/j/pp/a/PLSPZxNytNQvQkZsL3Dywmx/"]
    ]
  },
  {
    id: "terceira",
    nome: "Terceira infância",
    idade: "6 a 11 anos",
    videos: [],
    referencias: [
      ["Brêtas et al. - Avaliação de funções psicomotoras de crianças", "https://www.scielo.br/j/ape/a/ztPFd6VhyrXQ7MxPKF3ywJy/?lang=pt"],
      ["Medina, Hass e Valentini - Desenvolvimento integral na infância", "https://revistaft.com.br/desenvolvimento-integral-na-infancia-conexoes-entre-desempenho-motor-cognicao-autopercepcao-e-contexto-ambiental-e-escolar/"],
      ["Oliveira - Crescimento e desenvolvimento humano: aprendizagem motora", "https://pt.scribd.com/document/651575135/Crescimento-e-Desenvolvimento-Humano-Aprendizagem-Motora-2"],
      ["Costa Seabra - Jean Piaget: teorias e desenvolvimento", "https://artmed.com.br/artigos/jean-piaget-quem-foi-teorias-e-a-psicologia-do-desenvolvimento/"]
    ]
  },
  {
    id: "adolescencia",
    nome: "Adolescência",
    idade: "12 a 18 anos",
    videos: [
      ["Vídeo de atividades - Adolescência", "dfbADqqfptI", "normal"]
    ],
    referencias: [
      ["SENNA, Sylvia Regina Carmo Magalhães; DESSEN, Maria Auxiliadora. Contribuições das teorias do desenvolvimento humano para a concepção contemporânea da adolescência. Psicologia: Teoria e Pesquisa, v. 28, n. 1, p. 101-108, 2012."],
      ["RÉ, A. H. N. Crescimento, maturação e desenvolvimento na infância e adolescência: implicações para o esporte. Motricidade, v. 7, n. 3, p. 55-67, 2011."]
    ]
  },
  {
    id: "adultos",
    nome: "Adultos",
    idade: "18 a 65 anos",
    videos: [
      ["Caminhada", "O-EAHyeOjE8", "short"],
      ["Agachamento e marcha", null, "grupo", [
        ["Prática", "xUGEFiOQUlM", "short"],
        ["Explicação", "eTc7J5SsZUQ", "short"]
      ]],
      ["Prancha", "5_vBMs4sgIY", "short"],
      ["Equilíbrio com um pé", "cs5Pns-m8DQ", "short"]
    ],
    referencias: [
      ["BRASIL. Ministério da Saúde. Guia de atividade física para a população brasileira. Brasília: Ministério da Saúde, 2021."],
      ["BULL, F. C. et al. World Health Organization 2020 guidelines on physical activity and sedentary behaviour. British Journal of Sports Medicine, v. 54, n. 24, p. 1451-1462, 2020."],
      ["COMPARATIVE effectiveness of different dual task mode interventions on cognitive function in older adults with mild cognitive impairment or dementia: a systematic review and network meta-analysis. Aging Clinical and Experimental Research, v. 37, n. 1, art. 139, 2025. DOI: 10.1007/s40520-025-03016-5.", "https://doi.org/10.1007/s40520-025-03016-5"],
      ["EFFECT of dual-task training on balance in older adults: a systematic review and meta-analysis. Archives of Gerontology and Geriatrics, v. 121, art. 105368, 2024."],
      ["GARBER, C. E. et al. Quantity and quality of exercise for developing and maintaining cardiorespiratory, musculoskeletal, and neuromotor fitness in apparently healthy adults: guidance for prescribing exercise. Medicine & Science in Sports & Exercise, v. 43, n. 7, p. 1334-1359, 2011. DOI: 10.1249/MSS.0b013e318213fefb.", "https://doi.org/10.1249/MSS.0b013e318213fefb"],
      ["IMPACT of motor-cognitive interventions on selected gait and balance outcomes in older adults: a systematic review and meta-analysis of randomized controlled trials. Frontiers in Psychology, v. 13, art. 837710, 2022. DOI: 10.3389/fpsyg.2022.837710.", "https://doi.org/10.3389/fpsyg.2022.837710"],
      ["ORGANIZAÇÃO MUNDIAL DA SAÚDE. Diretrizes da OMS para atividade física e comportamento sedentário: num piscar de olhos. Tradução de Edina Maria de Camargo e Ciro Romelio Rodriguez Añez. Genebra: OMS, 2020."],
      ["THE EFFECT of dual-task training on cognition of people with different clinical conditions: an overview of systematic reviews. IBRO Reports, v. 9, p. 24-31, 2020. DOI: 10.1016/j.ibror.2020.06.005.", "https://doi.org/10.1016/j.ibror.2020.06.005"]
    ]
  },
  {
    id: "idosos",
    nome: "Idosos",
    idade: "65 anos ou mais",
    videos: [
      ["Atividade 1 - Circuito das cores e direções", "R6QoXDvZFWk", "normal"],
      ["Atividade 2 - Circuito de agachamento e passe na escada", "e7z6ftp3cBU", "normal"],
      ["Atividade 3 - Circuito de passes com bola", "Jb1pKDWQq0A", "normal"],
      ["Atividade 4 - Jogo da velha", "B3sVkeNDue8", "normal"],
      ["Atividade 5 - Circuito de memorização e reprodução de cores", "QSkmZFrDmcE", "normal"]
    ],
    referencias: [
      ["Ministério da Saúde - Guia de atividade física", "https://bvsms.saude.gov.br/bvs/publicacoes/guia_atividade_fisica_populacao_brasileira.pdf"],
      ["Organização Mundial da Saúde - Diretrizes sobre atividade física", "https://www.who.int/publications/i/item/9789240015128"],
      ["National Institute on Aging - Saúde cognitiva", "https://www.nia.nih.gov/health/cognitive-health-and-older-adults"],
      ["National Institute on Aging - Memória e envelhecimento", "https://www.nia.nih.gov/health/memory-loss-and-forgetfulness/memory-forgetfulness-and-aging-whats-normal-and-whats-not"]
    ]
  }
];

const app = document.getElementById("app");
const inicio = document.getElementById("botao-inicio");
let estado = { tela: "inicio", tipo: null, etapa: null, indice: null };

function escapar(texto) {
  return String(texto).replace(/[&<>"']/g, caractere => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[caractere]));
}

// O iframe precisa ser descarregado para o YouTube parar de tocar.
function pararVideos() {
  document.querySelectorAll("iframe").forEach(iframe => {
    try {
      iframe.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: "pauseVideo", args: [] }),
        "*"
      );
    } catch (_) {
      // A remoção abaixo também encerra o vídeo.
    }
    iframe.src = "about:blank";
    iframe.remove();
  });

  document.querySelectorAll("video").forEach(video => {
    video.pause();
    video.removeAttribute("src");
    video.load();
  });
}

function botaoVoltar() {
  return '<button type="button" class="voltar" data-voltar>← Voltar</button>';
}

function cabecalho(titulo, descricao = "") {
  return `
    <h1>${escapar(titulo)}</h1>
    ${descricao ? `<p class="descricao">${escapar(descricao)}</p>` : ""}
  `;
}

function mostrarInicio() {
  app.innerHTML = `
    <section>
      ${cabecalho("Links do E-book", "Saúde Humana: Crescimento e Desenvolvimento")}
      <div class="opcoes">
        <button type="button" class="opcao" data-tipo="videos">
          Vídeos <span aria-hidden="true">→</span>
        </button>
        <button type="button" class="opcao" data-tipo="textos">
          Textos <span aria-hidden="true">→</span>
        </button>
      </div>
    </section>
  `;
}

function mostrarCategorias() {
  const videos = estado.tipo === "videos";
  const titulo = videos ? "Vídeos" : "Textos";

  const lista = etapas.map(etapa => {
    const temMaterial = (videos ? etapa.videos : etapa.referencias).length > 0;

    return `
      <div class="categoria">
        <div>
          <strong>${escapar(etapa.nome)}</strong>
          <small>${escapar(etapa.idade)}</small>
        </div>
        ${temMaterial
          ? `<button type="button" class="acessar" data-etapa="${etapa.id}">Acessar →</button>`
          : `<button type="button" class="acessar" disabled>${videos && etapa.id === "terceira" ? "Sem vídeo" : "Não recebido"}</button>`}
      </div>
    `;
  }).join("");

  app.innerHTML = `
    <section>
      ${botaoVoltar()}
      ${cabecalho(titulo)}
      <div class="lista">${lista}</div>
    </section>
  `;
}

function mostrarEtapa() {
  const etapa = etapas.find(item => item.id === estado.etapa);
  if (!etapa) return mostrarCategorias();

  let conteudo;

  if (estado.tipo === "videos") {
    conteudo = etapa.videos.map(([titulo, , formato], indice) => `
      <button type="button" class="atividade" ${formato === "grupo" ? `data-submenu="${indice}"` : `data-video="${indice}"`}>
        <span>${escapar(titulo)}</span>
        <span class="seta" aria-hidden="true">${formato === "grupo" ? "→" : "▶"}</span>
      </button>
    `).join("");
  } else {
    conteudo = etapa.referencias.map(([titulo, url]) => {
      if (!url) {
        // Referência bibliográfica recebida sem link: mostrar apenas o texto.
        return `<div class="referencia"><span>${escapar(titulo)}</span></div>`;
      }

      const dominio = new URL(url).hostname.replace(/^www\./, "");

      return `
        <a class="referencia" href="${escapar(url)}" target="_blank" rel="noopener noreferrer">
          <span>${escapar(titulo)}
            <small>${escapar(dominio)}</small>
          </span>
          <span class="seta" aria-hidden="true">↗</span>
        </a>
      `;
    }).join("");
  }

  app.innerHTML = `
    <section>
      ${botaoVoltar()}
      ${cabecalho(etapa.nome, etapa.idade)}
      <div class="lista">${conteudo || "<p>Não recebido</p>"}</div>
    </section>
  `;
}

function mostrarSubmenu() {
  const etapa = etapas.find(item => item.id === estado.etapa);
  const grupo = etapa?.videos[estado.indice];
  if (!grupo || grupo[2] !== "grupo") {
    voltar();
    return;
  }

  app.innerHTML = `
    <section>
      ${botaoVoltar()}
      ${cabecalho(grupo[0], etapa.nome)}
      <div class="lista">
        ${grupo[3].map(([nome], indice) => `
          <button type="button" class="atividade" data-subvideo="${indice}">
            <span>${escapar(nome)}</span>
            <span class="seta" aria-hidden="true">▶</span>
          </button>
        `).join("")}
      </div>
    </section>
  `;
}

function mostrarPlayer() {
  const etapa = etapas.find(item => item.id === estado.etapa);
  const item = etapa?.videos[estado.indice];
  const video = item?.[2] === "grupo" ? item[3]?.[estado.subIndice] : item;

  if (!video || video[2] === "grupo") {
    voltar();
    return;
  }

  const [nome, id, formato] = video;
  const titulo = item[2] === "grupo" ? `${item[0]} - ${nome}` : nome;
  const linkOriginal = formato === "short"
    ? `https://www.youtube.com/shorts/${id}`
    : `https://www.youtube.com/watch?v=${id}`;
  const incorporar = `https://www.youtube-nocookie.com/embed/${id}?playsinline=1&rel=0&enablejsapi=1`;

  app.innerHTML = `
    <section>
      ${botaoVoltar()}
      ${cabecalho(titulo, etapa.nome)}
      <div class="player-area">
        <div class="player ${formato === "short" ? "vertical" : ""}">
          <iframe
            src="${incorporar}"
            title="${escapar(titulo)}"
            loading="eager"
            referrerpolicy="origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
          </iframe>
        </div>
      </div>
      <a class="link-youtube" href="${linkOriginal}" target="_blank" rel="noopener noreferrer">
        Abrir vídeo no YouTube ↗
      </a>
      <p class="aviso-video">
        Caso o YouTube não permita reproduzir o vídeo aqui, use o botão acima.
      </p>
    </section>
  `;
}

function renderizar() {
  pararVideos();

  if (estado.tela === "inicio") mostrarInicio();
  if (estado.tela === "categorias") mostrarCategorias();
  if (estado.tela === "etapa") mostrarEtapa();
  if (estado.tela === "submenu") mostrarSubmenu();
  if (estado.tela === "player") mostrarPlayer();

  window.scrollTo(0, 0);
}

function navegar(proximoEstado) {
  estado = { ...proximoEstado };
  if (location.protocol !== "file:") {
    history.pushState(estado, "", "#/" + [
      estado.tela, estado.tipo, estado.etapa, estado.indice, estado.subIndice
    ].filter(valor => valor != null).join("/"));
  }
  renderizar();
}

function voltar() {
  if (estado.tela === "player" && Number.isInteger(estado.subIndice)) {
    navegar({ ...estado, tela: "submenu", subIndice: null });
  } else if (estado.tela === "player" || estado.tela === "submenu") {
    navegar({ ...estado, tela: "etapa", indice: null, subIndice: null });
  } else if (estado.tela === "etapa") {
    navegar({ tela: "categorias", tipo: estado.tipo, etapa: null, indice: null });
  } else {
    navegar({ tela: "inicio", tipo: null, etapa: null, indice: null });
  }
}

app.addEventListener("click", event => {
  const tipo = event.target.closest("[data-tipo]");
  if (tipo) {
    navegar({ tela: "categorias", tipo: tipo.dataset.tipo, etapa: null, indice: null });
    return;
  }

  const etapa = event.target.closest("[data-etapa]");
  if (etapa) {
    navegar({ tela: "etapa", tipo: estado.tipo, etapa: etapa.dataset.etapa, indice: null });
    return;
  }

  const submenu = event.target.closest("[data-submenu]");
  if (submenu) {
    navegar({ ...estado, tela: "submenu", indice: Number(submenu.dataset.submenu), subIndice: null });
    return;
  }

  const subvideo = event.target.closest("[data-subvideo]");
  if (subvideo) {
    navegar({ ...estado, tela: "player", subIndice: Number(subvideo.dataset.subvideo) });
    return;
  }

  const video = event.target.closest("[data-video]");
  if (video) {
    navegar({ ...estado, tela: "player", indice: Number(video.dataset.video), subIndice: null });
    return;
  }

  if (event.target.closest("[data-voltar]")) voltar();
});

inicio.addEventListener("click", () => {
  navegar({ tela: "inicio", tipo: null, etapa: null, indice: null });
});

window.addEventListener("popstate", event => {
  estado = event.state || { tela: "inicio", tipo: null, etapa: null, indice: null };
  renderizar();
});

window.addEventListener("pagehide", pararVideos);

if (location.protocol !== "file:") {
  history.replaceState(estado, "", location.pathname + location.search);
}
renderizar();
