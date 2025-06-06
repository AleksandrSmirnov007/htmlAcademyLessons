import { showBigPicture } from './big-pictures.js';

const pictureTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');

const container = document.querySelector('.pictures');

// data данные об одной картинке с коментариями описанием лойками и адресом картинки
const createPicture = (data) => {
  const { comments, description, likes, url } = data; // реструктуризация одного переданного элемента масива плученного путем getPictures
  const picture = pictureTemplate.cloneNode(true);  // клон с внутренностями

  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__img').alt = description;
  picture.querySelector('.picture__comments').textContent = comments.length;
  picture.querySelector('.picture__likes').textContent = likes;

  // вписать раздачу событий вновь созданному элементу путем модификации клона после того ка напишется big-pictures
  picture.addEventListener('click', () => {
    showBigPicture(data);
  });

  return picture;
};

const renderPictures = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const pictureElement = createPicture(picture);
    fragment.appendChild(pictureElement);
  });

  const pictureList = container.querySelectorAll('.picture');
  pictureList.forEach(elem => elem.remove());

  container.appendChild(fragment);
};

export { renderPictures };
