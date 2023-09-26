export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = "ativo";
  }

  toggleAccordion(item) {
    //se refere ao elemento "dt"
    item.classList.toggle(this.activeClass);
    // se refere ao "dd"
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  // Adiciona os eventos ao accordion
  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      // adiciona evento de click nos "dt"
      item.addEventListener("click", () => this.toggleAccordion(item));
    });
  }
  // Iniciar função
  init() {
    // ativar primeiro item
    if (this.accordionList.length) {
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
  }
}
