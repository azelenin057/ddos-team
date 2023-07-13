(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    openModalBtnHeader: document.querySelector("[data-modalopen-header]"),
    openModalBtnMenu: document.querySelector("[data-modalopen-menu]"),
    openModalBtnVegetables: document.querySelector("[data-modalopen-vegetables]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.openModalBtnHeader.addEventListener("click", toggleModal);
  refs.openModalBtnMenu.addEventListener("click", toggleModal);
  refs.openModalBtnVegetables.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();