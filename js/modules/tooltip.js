export default class ToolTip {
  constructor(tooltips) {
    this.tooltip = document.querySelectorAll(tooltips);

    // bind do objeto da classes ao call back
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  onMouseOver({ currentTarget }) {
    // Cria a tooltipBox e coloca em uma propriedade
    this.criarToolTipBox(currentTarget);

    currentTarget.addEventListener("mousemove", this.onMouseMove);
    currentTarget.addEventListener("mouseleave", this.onMouseLeave);
  }

  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    currentTarget.removeEventListener("mousemove", this.onMouseMove);
  }

  onMouseMove(event) {
    this.tooltipBox.style.top = event.pageY + 20 + "px";
    this.tooltipBox.style.left = event.pageX + 20 + "px";
  }

  // Cria a tooltip box e coloca no body
  criarToolTipBox(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  addTooltipsEvent() {
    this.tooltip.forEach((item) =>
      item.addEventListener("mouseover", this.onMouseOver)
    );
  }

  init() {
    if (this.tooltip.length) {
      this.addTooltipsEvent();
    }
    return this;
  }
}
