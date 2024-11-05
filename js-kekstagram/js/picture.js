const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const container = document.querySelector('.pictures');  // сюда будем складывать картинки пользователей

const renderPicture = (userPicturesList) => {
  const fragment = document.createDocumentFragment();

  userPicturesList.forEach((userPicturesItem) => {

    const pictureItem = pictureTemplate.cloneNode(true);

    pictureItem.querySelector('img').src = userPicturesItem.url;
    pictureItem.querySelector('.picture__likes').textContent = userPicturesItem.likes;
    pictureItem.querySelector('.picture__comments').textContent = userPicturesItem.comments.length;

    fragment.appendChild(pictureItem);
  });

  container.appendChild(fragment);
};

export {renderPicture};
