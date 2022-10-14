import {isEscapeKey} from './utils/is-escape-key.js';
import {createFocusTrap} from 'focus-trap';

const page = document.querySelector('.page__body');
const pageWrapper = page.querySelector('.page__wrapper');
const modal = page.querySelector('.modal');
const closeModalWindowButton = modal.querySelector('button[type="button"]');
const formPopupInput = modal.querySelector('input[type="text"]');

const focusTrap = createFocusTrap('#modal', {
  onActivate: () => {
    modal.classList.add('trap', 'is', 'visible');
  },
  onDeactivate: () => {
    modal.classList.remove('trap', 'is', 'visible');
  },
});

const onModalWindowOpen = () => {
  if (event.clientY <= 0) {
    modal.classList.remove('modal--closed');
    closeModalWindowButton.addEventListener('click', onModalWindowClose);
    document.addEventListener('keydown', onModalWindowEscKeydown);
    document.addEventListener('click', onModalWindowOutsideClickClose);
    formPopupInput.focus();
    pageWrapper.setAttribute('inert', 'true');
    focusTrap.activate();
    document.removeEventListener('mouseout', onModalWindowOpen);
    page.classList.add('page__body--not-scroll');
  }
};

const onModalWindowClose = () => {
  modal.classList.add('modal--closed');
  closeModalWindowButton.removeEventListener('click', onModalWindowClose);
  document.removeEventListener('keydown', onModalWindowEscKeydown);
  document.removeEventListener('click', onModalWindowOutsideClickClose);
  pageWrapper.removeAttribute('inert', 'true');
  focusTrap.deactivate();
  page.classList.remove('page__body--not-scroll');
};

const onModalWindowEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    onModalWindowClose();
  }
};

const onModalWindowOutsideClickClose = (evt) => {
  if (!document.querySelector('.modal__wrapper').contains(evt.target)) {
    onModalWindowClose();
  }
};

const initModal = () => {
  document.addEventListener('mouseout', onModalWindowOpen);
};

export {initModal};
