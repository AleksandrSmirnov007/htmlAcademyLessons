const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.big-picture__cancel');


const commentTemplate = document.querySelector('#comments').content.querySelector('.social__comment');
const commentContainer = bigPicture.querySelector('.social__comments');
const fragment = document.createDocumentFragment();

const renderComents = function (comments) {
  comments.forEach((comment) => {
    console.log(comment);
    const commentItem = commentTemplate.cloneNode(true);
    commentItem.children[0].src = comment.avatar;
    commentItem.children[0].alt = comment.name;
    commentItem.children[1].textContent = comment.message;
    fragment.appendChild(commentItem);
  });
  commentContainer.appendChild(fragment);
};

const addListenerCloseButton = function () {
  closeButton.addEventListener('click', function () {
    bigPicture.classList.add('hidden');
  });


  document.addEventListener('keydown', event => {
    if (
      (event.key === "Escape" || event.keyCode === 27)
      &&
      (!bigPicture.classList.contains('hidden'))
      ) {
        bigPicture.classList.add('hidden');
      }
  });
};

export { addListenerCloseButton, renderComents };
