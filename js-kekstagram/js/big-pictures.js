const bigPicture = document.querySelector('.big-picture');
const commentCount = bigPicture.querySelector('.social__comment-count');
const commentList = bigPicture.querySelector('.social__comments');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const body = document.querySelector('body');
const cancelButton = bigPicture.querySelector('.big-picture__cancel');

const COMMENTS_PER_PORTION = 5;
let commentsShown = 0;
let comments =[]; // в учебном проекте вынесли в глобальную переменную массив коментариев, а я заводил его через параметры comments и вызывал функцию renderComments(data.comments)

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

const renderComments = () => {

  commentsShown += COMMENTS_PER_PORTION;

  if (commentsShown >= comments.length) {
    commentsLoader.classList.add('hidden');
    commentsShown = comments.length;
  } else {
    commentsLoader.classList.remove('hidden');
  }

  const fragment = document.createDocumentFragment();

  // метод forEach перебирает все комментарии и подошелбы если бы нам надо было отображать их все, но если комментариев много нам надо отражать определенную часть и нет смысла  полностью проходиться по всему массиву. Когщда я делал я создал на странице все элементы коментариев и те которые не должны отображаться я добавлял класс hidden.  а потомо при клике на кнопку показать болше кбирал у следующей группы класс хидден. Все таки это моя ошибка
  for (let i = 0; i < commentsShown; i++) {
    const commentElement = createComment(comments[i]);
    fragment.append(commentElement);
  };

  commentList.innerHTML = '';
  commentList.append(fragment);
  commentCount.innerHTML = `${commentsShown} из <span class="comments-count">${comments.length}</span> комментариев`;
};


const onCommentsLoaderClick = () => renderComments();


const hideBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeyDown);
  console.log(commentsShown);
  commentsShown = 0;
  console.log(commentsShown);
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
  commentsLoader.classList.add('hidden');
  document.addEventListener('keydown', onEscKeyDown);
  renderPictureDetails(data);
  comments = data.comments;
  if (comments.length > 0) {
    renderComments();
  }
};

cancelButton.addEventListener ('click', onCancelButtonClick);
commentsLoader.addEventListener('click', onCommentsLoaderClick);

export {showBigPicture};
