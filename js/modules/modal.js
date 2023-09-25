export default function initModal() {
  const modal = document.querySelector("[data-modal='container']");
  const fecharModalBtn = document.querySelector("[data-modal='fechar']");
  const abrirModalBtn = document.querySelector("[data-modal='abrir']");

  function toggleModal(e) {
    e.preventDefault();
    modal.classList.toggle("ativo");
  }

  function cliqueForaModal(e) {
    if (e.target === this) {
      toggleModal(e);
    }
  }

  if (modal && fecharModalBtn && abrirModalBtn) {
    abrirModalBtn.addEventListener("click", toggleModal);
    fecharModalBtn.addEventListener("click", toggleModal);
    modal.addEventListener("click", cliqueForaModal);
  }
}
