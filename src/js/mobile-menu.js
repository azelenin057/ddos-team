(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const mobileMenuBtn = document.querySelector('.js-show-btn');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtnA = document.querySelector('.js-close-menua');
  const closeMenuBtnB = document.querySelector('.js-close-menub');
  const closeMenuBtnC = document.querySelector('.js-close-menuc');
  const closeMenuBtnD = document.querySelector('.js-close-menud');
  const headerBasketBtn = document.querySelector('.header-basket-btn');
  const mobileBasketBtn = document.querySelector('.mobile-basket-btn');
  const heroBtn = document.querySelector('.hero-btn');
  const orderBtn = document.querySelector('.order-bttn');
  const modalUnlockScroll = document.querySelector('.btn-close-modal');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
      openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
      mobileMenu.classList.toggle('is-open');
      mobileMenuBtn.classList.toggle('show');
      
    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  const lockScroll = () => {
    const isModalOpen =
      headerBasketBtn.getAttribute('aria-expanded') === 'true' || false;
      headerBasketBtn.setAttribute('aria-expanded', !isModalOpen);
      mobileBasketBtn.getAttribute('aria-expanded') === 'true' || false;
      mobileBasketBtn.setAttribute('aria-expanded', !isModalOpen);
      heroBtn.getAttribute('aria-expanded') === 'true' || false;
      heroBtn.setAttribute('aria-expanded', !isModalOpen);
      orderBtn.getAttribute('aria-expanded') === 'true' || false;
      orderBtn.setAttribute('aria-expanded', !isModalOpen);
    
    
    const scrollLockMethod = !isModalOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtnA.addEventListener('click', toggleMenu);
  closeMenuBtnB.addEventListener('click', toggleMenu);
  closeMenuBtnC.addEventListener('click', toggleMenu);
  closeMenuBtnD.addEventListener('click', toggleMenu);
  headerBasketBtn.addEventListener('click', lockScroll);
  mobileBasketBtn.addEventListener('click', lockScroll);
  heroBtn.addEventListener('click', lockScroll);
  orderBtn.addEventListener('click', lockScroll);
  modalUnlockScroll.addEventListener('click', lockScroll);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();