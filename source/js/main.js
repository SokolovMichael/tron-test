import {initMenu} from './init-menu.js';
import {scrollTo} from './scroll.js';
import {initCounter, countDown, deadLine} from './init-counter.js';
import {inputTel} from './input-tel.js';
import {initDate} from './init-date.js';
import {createComments} from './data.js';
import {initComments} from './init-comments.js';
import {hideEmptyImages} from './hide-empty-images.js';
import {initModal} from './init-modal.js';

const comment = createComments();

initMenu();
scrollTo();
initCounter(countDown, deadLine);
inputTel();
initDate();
initComments(comment);
hideEmptyImages();
initModal();
