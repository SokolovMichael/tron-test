import {isEscapeKey} from './utils/is-escape-key.js';

const pageHeader = document.querySelector('.page__header');
const nav = document.querySelector('.nav');
const openMenuButton = nav.querySelector('.nav__toggle');
const closeMenuButton = nav.querySelector('.toggles__close');
const menu = nav.querySelector('.nav__menu-wrapper');

const onMenuOutsideClickClose = (evt) => {
  if (!openMenuButton.contains(evt.target)) {
    if (!menu.contains(evt.target)) {
      onCloseMenu();
    }
  }
};

const onCloseMenu = () => {
  nav.classList.remove('nav--opened');
  nav.classList.add('nav--closed');
  closeMenuButton.removeEventListener('click', onCloseMenu);
  document.removeEventListener('keydown', onMenuEscKeydown);
  openMenuButton.addEventListener('click', onShowMenu);
  document.removeEventListener('click', onMenuOutsideClickClose);
};

const onMenuEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    onCloseMenu();
  }
};

const onShowMenu = () => {
  nav.classList.remove('nav--closed');
  nav.classList.add('nav--opened');
  openMenuButton.removeEventListener('click', onShowMenu);
  closeMenuButton.addEventListener('click', onCloseMenu);
  document.addEventListener('keydown', onMenuEscKeydown);
  document.addEventListener('click', onMenuOutsideClickClose);
};

const initMenu = () => {
  pageHeader.classList.remove('page__header--nojs');
  nav.classList.remove('nav--nojs');
  openMenuButton.addEventListener('click', onShowMenu);
};

export {initMenu};
