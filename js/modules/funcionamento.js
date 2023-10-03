export default class Funcionamento {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
  }

  dadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(",").map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario
      .split(",")
      .map(Number);
  }

  dadosAgora() {
    this.data = new Date();
    this.diaAtual = this.data.getDay();
    this.horarioAtual = this.data.getUTCHours() - 3;
  }

  isOpen() {
    const semanaAberto = this.diasSemana.indexOf(this.diaAtual) !== -1;
    const horarioAberto =
      this.horarioAtual >= this.horarioSemana[0] &&
      this.horarioAtual < this.horarioSemana[1];
    return semanaAberto && horarioAberto;
  }

  addClassOpen() {
    if (this.isOpen()) this.funcionamento.classList.add(this.activeClass);
  }
  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.addClassOpen();
    }
    return this;
  }
}
