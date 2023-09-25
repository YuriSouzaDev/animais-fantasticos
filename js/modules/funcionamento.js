export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");
  const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);

  const data = new Date();
  const diaAtual = data.getDay();
  const horarioAtual = data.getHours();

  const semanaAberto = diasSemana.indexOf(diaAtual) !== -1;
  const horarioAberto =
    horarioAtual >= horarioSemana[0] && horarioAtual < horarioSemana[1];

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add("open");
  }
}
