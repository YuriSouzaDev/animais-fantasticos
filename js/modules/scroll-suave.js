export default function initScrollSuave() {
  // inicio do seu evento ensinado

  // const linksIntenos = document.querySelectorAll(".js-menu a[href^='#']");

  // function scrollToSection(element) {
  //   element.preventDefault();
  //   const href = element.currentTarget.getAttribute("href");
  //   const section = document.querySelector(href);

  //   // section.scrollIntoView({
  //   //   behavior: "smooth",
  //   //   block: "start",
  //   // });

  //   // forma alternativa
  //   const topo = section.offsetTop;
  //   window.scrollTo({
  //     top: topo,
  //     behavior: "smooth",
  //   });
  // }

  // linksIntenos.forEach((link) => {
  //   link.addEventListener("click", scrollToSection);
  // });

  // Identificar o clique no menu
  // Verificar o item que foi clicado e fazer referência com o alvo
  // Verificar a distância entre o alvo e o topo
  // Animar o scroll até o alvo

  // fim do seu evento ensinado

  // Inicio do evento teste
  // vindo da internet Clément Burgoin - iwazaru
  const menuItems = document.querySelectorAll(
    '[data-menu="suave"] a[href^="#"]'
  );

  function getScrollTopByHref(element) {
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;
  }

  function scrollToPosition(to) {
    // Caso queira o nativo apenas
    // window.scroll({
    // top: to,
    // behavior: "smooth",
    // })
    smoothScrollTo(0, to);
  }

  function scrollToIdOnClick(event) {
    event.preventDefault();
    const to = getScrollTopByHref(event.currentTarget) - 80;
    scrollToPosition(to);
  }

  menuItems.forEach((item) => {
    item.addEventListener("click", scrollToIdOnClick);
  });

  // Caso deseje suporte a browsers antigos / que não suportam scroll smooth nativo
  /**
   * Smooth scroll animation
   * @param {int} endX: destination x coordinate
   * @param {int) endY: destination y coordinate
   * @param {int} duration: animation duration in ms
   */
  function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    duration = typeof duration !== "undefined" ? duration : 400;

    // Easing function
    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1)
        return (distance / 2) * time * time * time * time + from;
      return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
    };

    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60); // 60 fps
  }

  // fim do evento teste
}
