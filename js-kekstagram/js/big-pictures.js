const bigPicture = document.querySelector('.big-picture');
const commentList = document.querySelector('.social__comments');
const body = document.querySelector('body');
const commentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.social__comments-loader');
const cancelButton = document.querySelector('.big-picture__cancel');
const MIN_LOADING_COMMENTS = 5;
let countLoadedComment = MIN_LOADING_COMMENTS;

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

const loadComments = () => {
  const count = Number(bigPicture.querySelector('.comments-count').textContent); // берем количество из html, проблема в том когда комментарии заканчивабтся, но цикл все равно пытается найти эленты до кратного числа загрузки - а их нет
  const start = countLoadedComment;
  let end = countLoadedComment + MIN_LOADING_COMMENTS;

  if (end > count) {
    end = count;
  }

  for (let i = start; i < end; i++ ){
    commentList.children[i].classList.remove('hidden');
    commentCount.querySelector('.comments-count-loaded').textContent = `${end} из`;
  }

  if(end === count) {
    commentsLoader.classList.add('hidden');
    countLoadedComment = MIN_LOADING_COMMENTS;
  }

  countLoadedComment += MIN_LOADING_COMMENTS;
};

const commentsLoaderClick = () =>
  commentsLoader.addEventListener('click', loadComments);

// в параметр comments переадется массив из обьектов коментариев
const renderComments = (comments) => {
  commentList.innerHTML = '';
  const fragment = document.createDocumentFragment();
// сдесь массив раскидыыается по элементам
  comments.forEach((comment) => {
    const commentElement = createComment(comment);
    if(fragment.children.length >= MIN_LOADING_COMMENTS){
      commentElement.classList.add('hidden');
    };
    fragment.append(commentElement);
  });

  commentList.appendChild(fragment);
}

const hideBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeyDown);
  commentCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  countLoadedComment = MIN_LOADING_COMMENTS;
  commentCount.querySelector('.comments-count-loaded').textContent = `${MIN_LOADING_COMMENTS} из`;
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

const addCounterComments = (comments) => {
  if(comments.length <= MIN_LOADING_COMMENTS) {
    commentCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');
  }
  commentCount.querySelector('.comments-count').innerHTML = comments.length;
};



const showBigPicture = (data) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');

  addCounterComments(data.comments);
  commentsLoaderClick();

  document.addEventListener('keydown', onEscKeyDown);

  renderPictureDetails(data);
  renderComments(data.comments)
};

cancelButton.addEventListener ('click', onCancelButtonClick);

export {showBigPicture};
