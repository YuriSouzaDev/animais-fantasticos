export default function initTabNav() {
  // navegação por tabs em lista de animais
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");
  const activeClass = "ativo";

  function activeTab(index) {
    tabContent.forEach((section) => {
      // faz um loop que remove a classe "ativo" de todos os elementos
      section.classList.remove(activeClass);
    });
    // adiciona a classe "ativo" ao elemento clicado
    const direcao = tabContent[index].dataset.anime;
    tabContent[index].classList.add(activeClass, direcao);
  }

  // verifica se os dois elementos existem
  if (tabMenu.length && tabContent.length) {
    // adiciona a classe "ativo" ao primeiro elemento da navegação por tab
    tabContent[0].classList.add(activeClass);

    // cria entre loop os animais da lista
    tabMenu.forEach((itemMenu, index) => {
      // adiciona um evento para cada animal
      itemMenu.addEventListener("click", () => {
        // chama a função. devido ao index está de fora
        activeTab(index);
      });
    });
  }
}
