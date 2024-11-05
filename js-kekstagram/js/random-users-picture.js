import { getPictures } from './data.js';

const userPicturesList = getPictures(24);

const pictureContainer = document.querySelector('.pictures');  // сюда будем складывать картинки пользователей

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const fragment = document.createDocumentFragment();

console.log(userPicturesList);

const pictureRender = (userPicturesList) => {

  userPicturesList.forEach((userPicturesItem) => {

    const pictureItem = pictureTemplate.cloneNode(true);

    pictureItem.querySelector('img').src = userPicturesItem.url;
    pictureItem.querySelector('.picture__likes').textContent = userPicturesItem.likes;
    pictureItem.querySelector('.picture__comments').textContent = userPicturesItem.comments.length;

    fragment.appendChild(pictureItem);
    console.log(pictureItem);
  });

  pictureContainer.appendChild(fragment);
};

const randomUsersPicture = function () {
  pictureRender(getPictures(24));
}

export {randomUsersPicture};
