export const addNavToggle = () => {
  const header = document.querySelector('.header');
  const toggle = header.querySelector('.nav__toggle');
  const navigation = header.querySelector('.nav__list');

  const closeNav = () => {
    header.classList.remove('nav-open');
    document.removeEventListener('keydown', onDocumentKeydown);
    document.removeEventListener('click', onDocumentClick);
    navigation.classList.add('nav__list--closed');
    navigation.classList.remove('nav__list--open');
    navigation.removeEventListener('click', onLinkClick);
    toggle.classList.add('nav__toggle--closed');
    toggle.classList.remove('nav__toggle--open');
    window.scrollLock.enableScrolling();
  };

  const openNav = () => {
    header.classList.add('nav-open');
    document.addEventListener('keydown', onDocumentKeydown);
    document.addEventListener('click', onDocumentClick);
    navigation.classList.add('nav__list--open');
    navigation.classList.remove('nav__list--close');
    navigation.addEventListener('click', onLinkClick);
    toggle.classList.add('nav__toggle--open');
    toggle.classList.remove('nav__toggle--closed');
    window.scrollLock.disableScrolling();
  };

  const onDocumentKeydown = (evt) => {
    return evt.key === 'Escape' ? closeNav() : null;
  };

  const onDocumentClick = (evt) => {
    return (evt.target.closest('.header__nav') || evt.target.closest('.nav__toggle') ? evt.preventDefault() : closeNav());
  };

  const onLinkClick = (evt) => {
    if ((evt.target.matches('.nav__link') && !evt.target.matches('.nav__link--button')) || evt.target.matches('.nav__sublink')) {
      closeNav();
    }
  };

  if (header !== null && toggle !== null && navigation !== null) {
    toggle.addEventListener('mousedown', (e) => e.preventDefault());
    toggle.addEventListener('click', () => {
      if (toggle.classList.contains('nav__toggle--closed')) {
        openNav();
      } else if (toggle.classList.contains('nav__toggle--open')) {
        closeNav();
      }
    });
  }
};
