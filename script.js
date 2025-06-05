window.addEventListener('load', () => {
  const splash = document.getElementById('splash-screen');
  const main = document.getElementById('main-content');

  setTimeout(() => {
    splash.style.display = 'none';
    main.style.display = 'block';
  }, 2000); // tempo da splash em milissegundos
});

const data = {
  texto: [
    {name: "ChatGPT (OpenAI)", main: true},
    {name: "GPT-4 (OpenAI)", main: true},
    {name: "Claude (Anthropic)"},
    {name: "Bard (Google)"},
    {name: "Jasper AI"},
    {name: "Writesonic"},
    {name: "Copy.ai"},
    {name: "Sudowrite"},
    {name: "Rytr"},
    {name: "Inferkit"},
    {name: "NovelAI"},
  ],
  imagem: [
    {name: "DALL·E 2/3 (OpenAI)", main: true},
    {name: "Midjourney", main: true},
    {name: "Stable Diffusion", main: true},
    {name: "RunwayML"},
    {name: "Deep Dream Generator"},
    {name: "Artbreeder"},
    {name: "NightCafe"},
    {name: "Dream by WOMBO"},
    {name: "Craiyon (antigo DALL·E mini)"},
  ],
  video: [
    {name: "Synthesia", main: true},
    {name: "Pictory"},
    {name: "Lumen5"},
    {name: "Runway Gen-2"},
    {name: "DeepBrain AI"},
    {name: "Reface AI"},
    {name: "D-ID (animação facial)"},
  ],
  audio: [
    {name: "OpenAI Jukebox", main: true},
    {name: "Descript (edição e geração de áudio)", main: true},
    {name: "AIVA (composição musical)"},
    {name: "Amper Music"},
    {name: "LALAL.AI (separação de faixas)"},
    {name: "Voicemod (modulação de voz)"},
    {name: "Murf AI"},
  ],
  programacao: [
    {name: "GitHub Copilot", main: true},
    {name: "ChatGPT (para programação)", main: true},
    {name: "Tabnine"},
    {name: "Codeium"},
    {name: "Replit Ghostwriter"},
    {name: "Kite (assistente de código)"},
    {name: "Codex (OpenAI)"},
  ],
  marketing: [
    {name: "HubSpot AI", main: true},
    {name: "MarketMuse", main: true},
    {name: "Clearscope"},
    {name: "GrowthBar"},
    {name: "SEMrush AI"},
    {name: "Phrasee"},
    {name: "Acrolinx"},
  ],
  traducao: [
    {name: "DeepL Translator", main: true},
    {name: "Google Translate", main: true},
    {name: "Microsoft Translator"},
    {name: "Amazon Translate"},
    {name: "Reverso"},
  ],
  dados: [
    {name: "DataRobot", main: true},
    {name: "H2O.ai", main: true},
    {name: "RapidMiner"},
    {name: "Tableau AI"},
    {name: "Alteryx"},
    {name: "ThoughtSpot"},
  ],
  educacao: [
    {name: "Khan Academy GPT Tutor", main: true},
    {name: "Squirrel AI"},
    {name: "Quizlet AI"},
    {name: "Duolingo AI"},
    {name: "Socratic by Google"},
  ],
  automacao: [
    {name: "Zapier AI", main: true},
    {name: "Notion AI", main: true},
    {name: "Microsoft Power Automate AI"},
    {name: "IFTTT AI"},
    {name: "Automate.io (parte do Notion)"},
  ],
};

function showCategory(category) {
  const container = document.getElementById('cards-container');
  container.innerHTML = ''; // limpa cards anteriores

  data[category].forEach(item => {
    const card = document.createElement('div');
    card.className = 'card' + (item.main ? ' main' : '');
    card.textContent = item.name;
    container.appendChild(card);
  });
}
