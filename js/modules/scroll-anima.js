import debounce from "./debounce.js";

export default class scrolAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);

    // calcula o tamanho da tela para ativar animacao
    this.windowMetade = window.innerHeight * 0.6;
    this.activeClass = "ativo";

    // bind do evento ao callback
    this.checkDistance = debounce(this.checkDistance.bind(this), 50);
  }

  // pega a distancia de cada item em relacao ao topo do site
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offSet = section.offsetTop;
      return {
        element: section,
        offSet: Math.floor(offSet - this.windowMetade),
      };
    });
  }

  // Verifica a distancia em cada objeto em relacao ao scroll do site
  checkDistance() {
    console.log("teste");
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offSet) {
        item.element.classList.add(this.activeClass);
      } else if (item.element.classList.contains(this.activeClass)) {
        item.element.classList.remove(this.activeClass);
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener("scroll", this.checkDistance);
    }
    return this;
  }

  // Para remover o event de scroll, caso necessário
  stop() {
    window.removeEventListener, ("scroll", this.checkDistance);
  }
}
