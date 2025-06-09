const data = {
  texto: [
    { name: "ChatGPT (OpenAI)", main: true, url: "https://chat.openai.com" },
    { name: "GPT-4 (OpenAI)", main: true, url: "https://openai.com/gpt-4" },
    { name: "Claude (Anthropic)", url: "https://www.anthropic.com/index/introducing-claude" },
    { name: "Bard (Google)", url: "https://bard.google.com" },
    { name: "Jasper AI", url: "https://www.jasper.ai" },
    { name: "Writesonic", url: "https://writesonic.com" },
    { name: "Copy.ai", url: "https://www.copy.ai" },
    { name: "Sudowrite", url: "https://www.sudowrite.com" },
    { name: "Rytr", url: "https://rytr.me" },
    { name: "Inferkit", url: "https://inferkit.com/demo" },
    { name: "NovelAI", url: "https://novelai.net" },
  ],
  imagem: [
    { name: "DALL·E 2/3 (OpenAI)", main: true, url: "https://openai.com/dall-e" },
    { name: "Midjourney", main: true, url: "https://www.midjourney.com" },
    { name: "Stable Diffusion", main: true, url: "https://stability.ai" },
    { name: "RunwayML", url: "https://runwayml.com" },
    { name: "Deep Dream Generator", url: "https://deepdreamgenerator.com" },
    { name: "Artbreeder", url: "https://www.artbreeder.com" },
    { name: "NightCafe", url: "https://creator.nightcafe.studio" },
    { name: "Dream by WOMBO", url: "https://www.wombo.art" },
    { name: "Craiyon", url: "https://www.craiyon.com" },
  ],
  video: [
    { name: "Synthesia", main: true, url: "https://www.synthesia.io" },
    { name: "Pictory", url: "https://pictory.ai" },
    { name: "Lumen5", url: "https://lumen5.com" },
    { name: "Runway Gen-2", url: "https://research.runwayml.com/gen2" },
    { name: "DeepBrain AI", url: "https://www.deepbrain.io" },
    { name: "Reface AI", url: "https://reface.ai" },
    { name: "D-ID", url: "https://www.d-id.com" },
  ],
  audio: [
    { name: "OpenAI Jukebox", main: true, url: "https://openai.com/research/jukebox" },
    { name: "Descript", main: true, url: "https://www.descript.com" },
    { name: "AIVA", url: "https://www.aiva.ai" },
    { name: "Amper Music", url: "https://www.shutterstock.com/discover/ampermusic" },
    { name: "LALAL.AI", url: "https://www.lalal.ai" },
    { name: "Voicemod", url: "https://www.voicemod.net" },
    { name: "Murf AI", url: "https://murf.ai" },
  ],
  programacao: [
    { name: "GitHub Copilot", main: true, url: "https://github.com/features/copilot" },
    { name: "ChatGPT (para programação)", main: true, url: "https://chat.openai.com" },
    { name: "Tabnine", url: "https://www.tabnine.com" },
    { name: "Codeium", url: "https://codeium.com" },
    { name: "Replit Ghostwriter", url: "https://replit.com/site/ghostwriter" },
    { name: "Kite", url: "https://www.kite.com" },
    { name: "Codex (OpenAI)", url: "https://openai.com/blog/openai-codex" },
  ],
  marketing: [
    { name: "HubSpot AI", main: true, url: "https://www.hubspot.com/products/ai" },
    { name: "MarketMuse", main: true, url: "https://www.marketmuse.com" },
    { name: "Clearscope", url: "https://www.clearscope.io" },
    { name: "GrowthBar", url: "https://www.growthbarseo.com" },
    { name: "SEMrush AI", url: "https://www.semrush.com" },
    { name: "Phrasee", url: "https://phrasee.co" },
    { name: "Acrolinx", url: "https://www.acrolinx.com" },
  ],
  traducao: [
    { name: "DeepL Translator", main: true, url: "https://www.deepl.com/translator" },
    { name: "Google Translate", main: true, url: "https://translate.google.com" },
    { name: "Microsoft Translator", url: "https://translator.microsoft.com" },
    { name: "Amazon Translate", url: "https://aws.amazon.com/translate" },
    { name: "Reverso", url: "https://www.reverso.net" },
  ],
  dados: [
    { name: "DataRobot", main: true, url: "https://www.datarobot.com" },
    { name: "H2O.ai", main: true, url: "https://www.h2o.ai" },
    { name: "RapidMiner", url: "https://rapidminer.com" },
    { name: "Tableau AI", url: "https://www.tableau.com" },
    { name: "Alteryx", url: "https://www.alteryx.com" },
    { name: "ThoughtSpot", url: "https://www.thoughtspot.com" },
  ],
  educacao: [
    { name: "Khan Academy GPT Tutor", main: true, url: "https://www.khanacademy.org" },
    { name: "Squirrel AI", url: "https://squirrelai.com" },
    { name: "Quizlet AI", url: "https://quizlet.com/features/magic-notes" },
    { name: "Duolingo AI", url: "https://www.duolingo.com" },
    { name: "Socratic by Google", url: "https://socratic.org" },
  ],
  automacao: [
    { name: "Zapier AI", main: true, url: "https://zapier.com/blog/ai-tools" },
    { name: "Notion AI", main: true, url: "https://www.notion.so/product/ai" },
    { name: "Microsoft Power Automate AI", url: "https://powerautomate.microsoft.com" },
    { name: "IFTTT AI", url: "https://ifttt.com/discover/ai" },
    { name: "Automate.io", url: "https://automate.io" },
  ],
  todas: [],
};

data.todas = Object.values(data).flat().filter(item => item.name);

function showCategory(category) {
  const buttons = document.querySelectorAll("#buttons-container button");
  buttons.forEach(btn => btn.classList.remove("active"));

  const clicked = Array.from(buttons).find(btn => btn.getAttribute("data-category") === category);
  if (clicked) clicked.classList.add("active");

  const container = document.getElementById("cards-container");
  container.innerHTML = "";

  let items = data[category];
  if (category === "todas") {
    items = [...items].sort((a, b) => (b.main ? 1 : 0) - (a.main ? 1 : 0));
  }

  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "card" + (item.main ? " main" : "");
    const content = item.url
      ? `<a href="${item.url}" target="_blank" rel="noopener noreferrer">${item.name}</a>`
      : item.name;
    card.innerHTML = content;
    container.appendChild(card);
  });
}

window.addEventListener("DOMContentLoaded", () => {
  const splash = document.getElementById("splash-screen");
  const site = document.getElementById("site");
  const main = document.getElementById("main-content");

  setTimeout(() => {
    splash.style.opacity = 0;
    splash.style.display = "none";
    site.style.display = "block";
    main.style.display = "block";
    showCategory("todas");
  }, 500);
});

document.querySelectorAll("#buttons-container button").forEach(button => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-category");
    showCategory(category);
  });
});


