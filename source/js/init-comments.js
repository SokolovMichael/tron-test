const commentsSection = document.querySelector('.comments');
const commentsList = commentsSection.querySelector('.comments__list');
const templateComment = document.querySelector('#comment').content.querySelector('.comments__item');

const fillCommentsData = (comment) => {
  const similarComment = document.createDocumentFragment();
  commentsList.innerHTML = '';
  comment.forEach(({avatarWebp, avatar, name, date, message, userPhotoWebp, userPhoto}) => {
    const commentsElement = templateComment.cloneNode(true);
    commentsElement.querySelector('.comments__user-avatar').querySelector('source').srcset = avatarWebp;
    commentsElement.querySelector('.comments__user-avatar').querySelector('img').src = avatar;
    commentsElement.querySelector('.comments__user-avatar').querySelector('img').alt = name;
    commentsElement.querySelector('.comments__text').querySelector('span').textContent = date;
    commentsElement.querySelector('.comments__text').querySelector('h3').textContent = name;
    commentsElement.querySelector('.comments__text-wrapper').querySelector('p').innerHTML = message;
    commentsElement.querySelector('.comments__picture').querySelector('source').srcset = userPhotoWebp;
    commentsElement.querySelector('.comments__picture').querySelector('img').src = userPhoto;
    similarComment.appendChild(commentsElement);
  });
  commentsList.appendChild(similarComment);
};

const initComments = (comment) => {
  fillCommentsData(comment);
};

export {initComments};
