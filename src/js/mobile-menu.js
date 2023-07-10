(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const closeMenuOpenBasket = document.querySelector('.js-closemenu-openbasket');
  const closeMenuLinkA = document.querySelector('.js-close-linka');
  const closeMenuLinkB = document.querySelector('.js-close-linkb');
  const closeMenuLinkC = document.querySelector('.js-close-linkc');
  const openMenuBtn2 = document.querySelector('.js-open-menu2');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
      openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
      mobileMenu.classList.toggle('is-open');
      openMenuBtn2.classList.toggle('show');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  closeMenuLinkA.addEventListener('click', toggleMenu);
  closeMenuLinkB.addEventListener('click', toggleMenu);
  closeMenuLinkC.addEventListener('click', toggleMenu);
  closeMenuOpenBasket.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();