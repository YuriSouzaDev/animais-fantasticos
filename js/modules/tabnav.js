export default class initTabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = "ativo";
  }

  // ativa a tasb de acordo com o index da mesma
  activeTab(index) {
    this.tabContent.forEach((section) => {
      // faz um loop que remove a classe "ativo" de todos os elementos
      section.classList.remove(this.activeClass);
    });
    // adiciona a classe "ativo" ao elemento clicado
    const direcao = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.activeClass, direcao);
  }

  // Adiciona os eventos nos tabs
  addTabNavEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      // adiciona um evento para cada animal
      itemMenu.addEventListener("click", () => this.activeTab(index));
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      // ativar primeiro item
      this.activeTab(0);
      this.addTabNavEvent();
    }
    return this;
  }
}
