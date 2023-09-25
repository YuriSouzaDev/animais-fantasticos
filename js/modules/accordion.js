export default function initAccordion() {
  // função de abrir perguntas faq
  const accordionList = document.querySelectorAll(
    "[data-anime='accordion'] dt"
  );
  const activeClass = "ativo";

  // verifica se o elemento existe para ativar a função
  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    // adiciona evento de click nos "dt"
    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }

  function activeAccordion() {
    // faz um loop para remover a classe ao clicar em outro elemento
    accordionList.forEach((e) => {
      e.classList.remove(activeClass);
      e.nextElementSibling.classList.remove(activeClass);
    });
    //  "this" se refere ao elemento "dt"
    this.classList.toggle(activeClass);
    // se refere ao "dd"
    this.nextElementSibling.classList.toggle(activeClass);
  }
}
