
// settings-limpo.js - Versão limpa sem redirecionamentos

document.addEventListener("DOMContentLoaded", function () {
  // Idioma padrão
  const idiomaPadrao = localStorage.getItem("idiomaSelecionado") || "pt-BR";

  // Traduções simples
  const traducoes = {
    "pt-BR": {
      settings: "Configurações",
      language: "Idioma",
      save: "Salvar",
      theme: "Tema",
      "light-mode": "Modo Claro",
    },
    "en-US": {
      settings: "Settings",
      language: "Language",
      save: "Save",
      theme: "Theme",
      "light-mode": "Light Mode",
    },
  };

  // Atualiza o texto das seções com base no idioma
  function aplicarTraducao(idioma) {
    const t = traducoes[idioma] || traducoes["pt-BR"];
    document.querySelector(".settings-title").textContent = t.settings;
    document.querySelector(".language-label").textContent = t.language;
    document.querySelector(".save-button").textContent = t.save;
    document.querySelector(".theme-label").textContent = t.theme;
    document.querySelector(".light-mode-label").textContent = t["light-mode"];
  }

  aplicarTraducao(idiomaPadrao);

  // Botão salvar
  const botaoSalvar = document.querySelector(".save-button");
  if (botaoSalvar) {
    botaoSalvar.addEventListener("click", () => {
      const idiomaSelecionado = document.querySelector("input[name=idioma]:checked")?.value || "pt-BR";
      localStorage.setItem("idiomaSelecionado", idiomaSelecionado);
      aplicarTraducao(idiomaSelecionado);
      alert("Configurações salvas!");
    });
  }
});
