// Точка входа, основной модуль
import { getPictures } from './data.js'; // импортироуем функцию создания данных объектов
import {renderPicture} from './picture.js'; // импортируем функцию превращения данных в элементы и добавление на страницу
import { addListenerCloseButton, renderComents } from './big-picture.js';


const data = (getPictures());
console.log(data);
renderPicture(data); // читаем изнутри: передаем данные объектов картинок, а далее их превращаем в элементы и отрисовываем



const bigPicture = document.querySelector('.big-picture');
const pictureContainer = document.querySelector('.pictures');
const pictures = pictureContainer.querySelectorAll('.picture');
const commentContainer = bigPicture.querySelector('.social__comments'); // удалить

const renderBigPicture = function () {
  for (let i = 0; i < pictures.length; i++) {

    pictures[i].addEventListener('click', function () {
      bigPicture.classList.remove('hidden');

      bigPicture.querySelector('.social__comment-count').classList.add('hidden');
      bigPicture.querySelector('.social__comments-loader').classList.add('hidden');

      bigPicture.querySelector('.big-picture__img').children[0].src = data[i].url;
      bigPicture.querySelector('.big-picture__img').children[0].alt = data[i].description;

      bigPicture.querySelector('.social__caption').textContent = data[i].description; // передаем описание фотографии
      bigPicture.querySelector('.social__picture').src = data[i].avatar;
      bigPicture.querySelector('.likes-count').textContent = data[i].likes;
      commentContainer.innerHTML = ''; // удаляем коментарии заглушки которые написаны в HTML

      const comments = data[i].comments;

      renderComents(comments); // отделил в функцию смотри выше
    });
  };
};

renderBigPicture();

addListenerCloseButton();
