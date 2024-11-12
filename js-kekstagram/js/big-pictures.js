const bigPicture = document.querySelector('.big-picture');
const commentList = document.querySelector('.social__comments');
const body = document.querySelector('body');
const commentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.social__comments-loader');

const cancelButton = document.querySelector('.big-picture__cancel');

const createComment = ({avatar, name, message}) => {
  const comment = document.createElement('li');
  comment.innerHTML =
    '<img class="social__picture" src="" alt="" width="35" height="35"><p class="social__text"></p>'
  comment.classList.add('social__comment');

  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;
  return comment;
};

// в параметр comments переадется массив из обьектов коментариев
const renderComments = (comments) => {
  commentList.innerHTML = '';

  const fragment = document.createDocumentFragment();
// сдесь массив раскидыыается по элементам
  comments.forEach((comment) => {
    const commentElement = createComment(comment);
    fragment.append(commentElement);
  });

  commentList.appendChild(fragment);
}

const hideBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeyDown);
};

function onEscKeyDown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideBigPicture();
  }
};

const onCancelButtonClick = () => {
  hideBigPicture();
};

const renderPictureDetails = ({url, likes, description}) => {
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.big-picture__img img').alt = description;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__caption').textContent = description;
};

const showBigPicture = (data) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  document.addEventListener('keydown', onEscKeyDown);

  renderPictures(data);
  renderComments(data.comment)
};

cancelButton.addEventListener ('click', onCancelButtonClick);

export {showBigPicture};
