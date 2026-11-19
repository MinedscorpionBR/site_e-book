const app = document.querySelector("#app");

const stages = {
  intro: {
    group: "GRUPO 1",
    title: "Introdução e conclusão",
    subtitle: "Parte geral do e-book",
    status: "pending",
    statusText: "Aguardando material",
    description: "O arquivo de orientações informa que este grupo prepara a introdução geral e a conclusão do e-book. Esse conteúdo não apareceu entre os anexos recebidos.",
    videos: [],
    activities: []
  },
  gestantes: {
    group: "GRUPO 2",
    title: "Gestantes",
    subtitle: "Período gestacional",
    status: "ready",
    statusText: "6 vídeos + capítulo",
    description: "Seis atividades práticas aparecem no capítulo enviado, cada uma acompanhada de seu vídeo demonstrativo.",
    videos: [
      { title: "Balanço Pélvico e Soltura Lombar na Bola Suíça", id: "sGq9cHl9VRs", kind: "short", detail: "Atividade 1 · Mobilidade lombopélvica" },
      { title: "Ponte Modificada com Ativação do Assoalho Pélvico e Adutores", id: "blMTrg4Hkho", kind: "short", detail: "Atividade 2 · Assoalho pélvico e cadeia posterior" },
      { title: "Agachamento Guiado com Apoio de Bola na Parede", id: "OB4eNEZQpMY", kind: "short", detail: "Atividade 3 · Membros inferiores e controle postural" },
      { title: "Alongamento Torácico e Descompressão Vertebral na Cadeira", id: "e7ARg3rEu0M", kind: "short", detail: "Atividade 4 · Expansão torácica" },
      { title: "Bombeamento Vascular Muscular (Bomba de Panturrilha)", id: "8U0016EklIo", kind: "short", detail: "Atividade 5 · Retorno venoso de membros inferiores" },
      { title: "Marcha Ritmizada com Dissociação Pélvica e Respiração Guiada", id: "kKustnN942c", kind: "short", detail: "Atividade 6 · Caminhada, equilíbrio e relaxamento" }
    ],
    activities: []
  },
  primeira: {
    group: "GRUPO 3",
    title: "Primeira infância",
    subtitle: "0 a 3 anos",
    status: "pending",
    statusText: "Aguardando material",
    description: "O grupo é responsável pela caracterização da primeira infância e pelas atividades correspondentes. Nenhum capítulo ou vídeo dessa etapa apareceu nos arquivos recebidos.",
    videos: [],
    activities: []
  },
  segunda: {
    group: "GRUPO 4",
    title: "Segunda infância",
    subtitle: "3 a 6 anos",
    status: "partial",
    statusText: "Capítulo recebido",
    description: "O PDF enviado contém a caracterização da fase e uma seção de propostas práticas. Não foram encontrados links de vídeos demonstrativos nesse arquivo.",
    videos: [],
    activities: [
      "Bola ao Alvo",
      "Desafio das Cores · Atenção e Agilidade",
      "Dança das Estátuas",
      "Boliche Divertido",
      "Caminho do Equilíbrio"
    ],
    notice: "A seção prática do PDF enumera essas cinco atividades. Um trecho anterior do mesmo arquivo cita uma lista diferente de propostas; por isso, deixei o capítulo original como referência para conferência."
  },
  terceira: {
    group: "GRUPO 5",
    title: "Terceira infância",
    subtitle: "6 a 11 anos",
    status: "pending",
    statusText: "Aguardando material",
    description: "Nenhum capítulo ou link demonstrativo dessa etapa apareceu nos arquivos recebidos.",
    videos: [],
    activities: []
  },
  adolescencia: {
    group: "GRUPO 6",
    title: "Adolescência",
    subtitle: "12 a 18 anos",
    status: "partial",
    statusText: "1 vídeo recebido",
    description: "Foi recebido um link de vídeo com o título “Algumas atividades para adolescentes”. O capítulo escrito dessa etapa não veio anexado.",
    videos: [
      { title: "Algumas atividades para adolescentes", id: "dfbADqqfptI", kind: "normal", detail: "Vídeo compartilhado · Grupo 6" }
    ],
    activities: []
  },
  adultos: {
    group: "GRUPO 7",
    title: "Adultos",
    subtitle: "18 a 65 anos",
    status: "pending",
    statusText: "Aguardando material",
    description: "Nenhum capítulo ou link demonstrativo dessa etapa apareceu nos arquivos recebidos.",
    videos: [],
    activities: []
  },
  idosos: {
    group: "GRUPO 8",
    title: "Idosos",
    subtitle: "65 anos ou mais",
    status: "partial",
    statusText: "Capítulo recebido",
    description: "O documento enviado contém a caracterização da terceira idade e cinco propostas práticas. Não foram encontrados links de vídeos demonstrativos nesse arquivo.",
    videos: [],
    activities: [
      "Circuito das cores e direções",
      "Circuito de agachamento e passe na escada",
      "Circuito de passes com bola (por cima, por baixo e pelos lados)",
      "Jogo da velha adaptado com cordas e pratinhos",
      "Circuito de memorização e reprodução de cores"
    ]
  },
  edicao: {
    group: "GRUPO 9",
    title: "Edição e formatação",
    subtitle: "Montagem do e-book completo",
    status: "pending",
    statusText: "Aguardando versão final",
    description: "O arquivo de orientações descreve as tarefas de edição, padronização, diagramação e montagem do PDF final. A versão final do e-book não apareceu entre os anexos recebidos.",
    videos: [],
    activities: []
  }
};

const stageOrder = ["intro", "gestantes", "primeira", "segunda", "terceira", "adolescencia", "adultos", "idosos", "edicao"];

let currentStageId = null;

function pauseAllPlayers() {
  // Envia o comando de pausa aos players incorporados do YouTube antes de sair da tela.
  document.querySelectorAll(".player-frame iframe").forEach((frame) => {
    try {
      frame.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: "pauseVideo", args: [] }),
        "*"
      );
    } catch (error) {
      // Ao remover o iframe, o navegador também encerra a reprodução incorporada.
    }
  });

  // Mantém a pausa também para eventuais players HTML5 adicionados futuramente.
  document.querySelectorAll("video").forEach((video) => {
    try { video.pause(); } catch (error) {}
  });
}

function statusClass(status) {
  if (status === "ready") return "ready";
  if (status === "partial") return "partial";
  return "pending";
}

function renderHome() {
  pauseAllPlayers();
  currentStageId = null;

  const cards = stageOrder.map((id) => {
    const stage = stages[id];
    const disabled = stage.status === "pending" ? "disabled" : "";
    const hint = stage.status === "pending" ? "Ainda não consta nos anexos" :
      (stage.status === "ready" ? `${stage.videos.length} vídeos demonstrativos` :
      (stage.videos.length ? `${stage.videos.length} vídeo demonstrativo` : "Material escrito recebido"));

    return `
      <button class="stage-card" type="button" data-stage="${id}" ${disabled}>
        <div class="stage-top">
          <span class="group-number">${stage.group}</span>
          <span class="status ${statusClass(stage.status)}">${stage.statusText}</span>
        </div>
        <strong>${stage.title}</strong>
        <small>${stage.subtitle} · ${hint}</small>
      </button>
    `;
  }).join("");

  app.innerHTML = `
    <section class="panel">
      <span class="eyebrow">PORTAL DE VÍDEOS E MATERIAIS</span>
      <h1>Links do <span style="color:var(--purple)">E-book</span></h1>
      <p class="lead">Saúde Humana: Crescimento e Desenvolvimento. Escolha uma etapa do ciclo vital para acessar os vídeos demonstrativos ou conferir os materiais que já foram recebidos.</p>
      <div class="hero-line"></div>

      <div class="stats">
        <div class="stat"><strong>3</strong><span>capítulos escritos recebidos</span></div>
        <div class="stat"><strong>7</strong><span>links de vídeo organizados</span></div>
      </div>

      <div class="section-heading">
        <h2>Materiais por etapa</h2>
        <p>Grupos 1 a 9</p>
      </div>
      <div class="stage-grid">${cards}</div>
      <div class="notice">Os botões desativados indicam apenas que não encontrei material daquela etapa nos arquivos e links enviados nesta conversa. Eles podem ser atualizados quando os grupos encaminharem seus conteúdos.</div>
    </section>
  `;

  app.querySelectorAll("[data-stage]").forEach((button) => {
    button.addEventListener("click", () => renderStage(button.dataset.stage));
  });
}

function renderStage(stageId) {
  pauseAllPlayers();
  const stage = stages[stageId];
  if (!stage) return;
  currentStageId = stageId;

  let mainContent = "";

  if (stage.videos.length) {
    mainContent += `
      <div class="content-block">
        <div class="section-heading">
          <h2>Vídeos demonstrativos</h2>
          <p>${stage.videos.length} ${stage.videos.length === 1 ? "vídeo" : "vídeos"}</p>
        </div>
        <div class="activity-list">
          ${stage.videos.map((video, index) => `
            <button class="activity-button" type="button" data-video-index="${index}">
              <span class="activity-number">${String(index + 1).padStart(2, "0")}</span>
              <span class="activity-copy">
                <strong>${video.title}</strong>
                <small>${video.detail}</small>
              </span>
              <span class="activity-arrow" aria-hidden="true">↗</span>
            </button>
          `).join("")}
        </div>
      </div>
    `;
  }

  if (stage.activities.length) {
    mainContent += `
      <div class="content-block">
        <div class="section-heading">
          <h2>Atividades encontradas no capítulo</h2>
          <p>${stage.activities.length} propostas</p>
        </div>
        <ol class="readonly-list">
          ${stage.activities.map((activity, index) => `
            <li><span>${String(index + 1).padStart(2, "0")}</span>${activity}</li>
          `).join("")}
        </ol>
      </div>
    `;
  }

  if (!stage.videos.length && !stage.activities.length) {
    mainContent += `
      <div class="empty-state">
        <strong>Material ainda não disponível aqui</strong>
        <p>Esta seção está preparada para receber os links e o conteúdo do grupo quando forem enviados.</p>
      </div>
    `;
  }

  app.innerHTML = `
    <section class="panel">
      <button class="back-button" type="button" data-back>← Voltar às etapas</button>
      <span class="eyebrow">${stage.group} · ${stage.subtitle.toUpperCase()}</span>
      <h1>${stage.title}</h1>
      <p class="stage-summary">${stage.description}</p>
      ${mainContent}
      ${stage.notice ? `<div class="notice">${stage.notice}</div>` : ""}
    </section>
  `;

  app.querySelector("[data-back]").addEventListener("click", renderHome);
  app.querySelectorAll("[data-video-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const selected = stage.videos[Number(button.dataset.videoIndex)];
      renderPlayer(selected, stageId);
    });
  });
}

function renderPlayer(video, stageId) {
  pauseAllPlayers();

  const embedUrl = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(video.id)}?enablejsapi=1&playsinline=1&rel=0`;
  const watchUrl = `https://www.youtube.com/watch?v=${encodeURIComponent(video.id)}`;
  const frameClass = video.kind === "short" ? "player-frame short" : "player-frame";

  app.innerHTML = `
    <section class="panel">
      <button class="back-button" type="button" data-back>← Voltar para ${stages[stageId].title}</button>
      <span class="eyebrow">${stages[stageId].group} · PLAYER DE VÍDEO</span>
      <h2>${video.title}</h2>
      <p class="stage-summary">${video.detail}</p>
      <div class="player-layout">
        <div class="${frameClass}">
          <iframe
            src="${embedUrl}"
            title="${video.title}"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen>
          </iframe>
        </div>
        <aside class="player-aside">
          <h3>Reprodução</h3>
          <p>Use os controles do próprio YouTube para assistir. Ao voltar para a lista, o site envia um comando de pausa ao player antes de trocar de tela.</p>
          <a class="video-link" href="${watchUrl}" target="_blank" rel="noopener noreferrer">Abrir diretamente no YouTube ↗</a>
        </aside>
      </div>
    </section>
  `;

  app.querySelector("[data-back]").addEventListener("click", () => {
    pauseAllPlayers();
    renderStage(stageId);
  });
}

document.querySelectorAll("[data-home]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    renderHome();
  });
});

window.addEventListener("pagehide", pauseAllPlayers);
renderHome();
