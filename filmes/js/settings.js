
// scripts.js limpo - controla abas de conteúdo (movies, series, animes)

document.addEventListener("DOMContentLoaded", function () {
  function showTab(tabId) {
    const tabs = document.querySelectorAll(".tab-content");
    tabs.forEach((tab) => (tab.style.display = "none"));

    const activeTab = document.getElementById(tabId);
    if (activeTab) {
      activeTab.style.display = "block";
    }
  }

  // Inicializa com 'movie' visível
  showTab("movie");

  // Liga os botões
  const tabButtons = document.querySelectorAll("[data-tab]");
  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tabId = btn.getAttribute("data-tab");
      showTab(tabId);
    });
  });
});
