export default class scrolAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);

    // calcula o tamanho da tela para ativar animacao
    this.windowMetade = window.innerHeight * 0.6;
    this.activeClass = "ativo";

    // bind do evento ao callback
    this.animaScroll = this.animaScroll.bind(this);
  }
  // scroll animation

  animaScroll() {
    this.sections.forEach((section) => {
      // retorna o tamanho do elemento
      const sectionTop = section.getBoundingClientRect().top;
      // verifica se a seção está visivel, calculo do tamanho da tela - o tamanho da seção, e se for menor que 0
      const isSectionVisible = sectionTop - this.windowMetade < 0;
      if (isSectionVisible) section.classList.add(this.activeClass);
      // adiciona a classe ativo, caso esteja visivel
      else if (section.classList.contains(this.activeClass))
        section.classList.remove(this.activeClass);
      // remove a classe ativo, caso não esteja visivel
    });
  }

  init() {
    this.animaScroll();
    window.addEventListener("scroll", this.animaScroll);
  }
}
