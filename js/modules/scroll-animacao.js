export default function initAnimacaoScroll() {
  // scroll animation
  const sections = document.querySelectorAll("[ data-anime='scroll']");
  const activeClass = "ativo";

  const windowMetade = window.innerHeight * 0.6; // calcula o tamanho da tela para ativar animacao

  function animaScroll() {
    sections.forEach((section) => {
      // retorna o tamanho do elemento
      const sectionTop = section.getBoundingClientRect().top;
      // verifica se a seção está visivel, calculo do tamanho da tela - o tamanho da seção, e se for menor que 0
      const isSectionVisible = sectionTop - windowMetade < 0;
      if (isSectionVisible) section.classList.add(activeClass);
      // adiciona a classe ativo, caso esteja visivel
      else if (section.classList.contains(activeClass))
        section.classList.remove(activeClass);
      // remove a classe ativo, caso não esteja visivel
    });
  }

  if (sections.length) {
    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}
