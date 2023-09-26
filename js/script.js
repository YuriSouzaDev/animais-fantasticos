import initScrollSuave from "./modules/scroll-suave.js";
import Accordion from "./modules/accordion.js";
import initTabNav from "./modules/tabnav.js";
import initModal from "./modules/modal.js";
import initToolTip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initiFecthAnimais from "./modules/fetch-animais.js";
import initFecthBitcoin from "./modules/fetch-bitcoin.js";
import initAnimacaoScroll from "./modules/scroll-animacao.js";

const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();

initScrollSuave();
initTabNav();
initModal();
initToolTip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initiFecthAnimais();
initFecthBitcoin();
initAnimacaoScroll();
