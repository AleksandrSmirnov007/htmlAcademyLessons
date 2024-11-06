// Точка входа, основной модуль
import { getPictures } from './data.js' // импортироуем функцию создания данных объектов
import {renderPicture} from './picture.js' // импортируем функцию превращения данных в элементы и добавление на страницу

// import './big-picture.js';

renderPicture(getPictures()); // читаем изнутри: создаем данные объектов картинок, а далее их превращаем в элементы и отрисовываем

const bigPicture = document.querySelector('.big-picture');

const bigPictureImage = bigPicture.querySelector('.big-picture__img').children[0]; // у элемента img нет класса и находим его как первого (и едимтвенного) ребенка .big-picture__img'

console.log(bigPictureImage);
const closeButton = bigPicture.querySelector('.big-picture__cancel');

const pictureContainer = document.querySelector('.pictures');

// pictures.forEach(element => {
//   console.log(element);
// });
// Непонятно почему forEach не работает на коллекции элементов!!!????
// a вот for работает

const pictures = pictureContainer.querySelectorAll('.picture');

console.log(bigPicture);

for (const el of pictures) {

  el.addEventListener('click', function () {
    bigPicture.classList.remove('hidden');
    const imageEl = el.querySelector('.picture__img');
    console.log(el);
    bigPictureImage.src = imageEl.src;
  });
};

console.log('big-picture подключен');

closeButton.addEventListener('click', function () {
  bigPicture.classList.add('hidden');
});
