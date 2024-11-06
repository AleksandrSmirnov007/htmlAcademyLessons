// Точка входа, основной модуль
import { getPictures } from './data.js' // импортироуем функцию создания данных объектов
import {renderPicture} from './picture.js' // импортируем функцию превращения данных в элементы и добавление на страницу

// import './big-picture.js';
const data = (getPictures());

console.log(data);
renderPicture(data); // читаем изнутри: передаем данные объектов картинок, а далее их превращаем в элементы и отрисовываем

const bigPicture = document.querySelector('.big-picture');

const closeButton = bigPicture.querySelector('.big-picture__cancel');

const pictureContainer = document.querySelector('.pictures');

const pictures = pictureContainer.querySelectorAll('.picture');

console.log(bigPicture);

// for (const el of pictures) {

//   el.addEventListener('click', function () {
//     bigPicture.classList.remove('hidden');
//     const imageEl = el.querySelector('.picture__img');
//     console.log(el);
//     bigPictureImage.src = imageEl.src;
//   });
// };

const commentContainer = bigPicture.querySelector('.social__comments');

const renderComents = function (comments) {

  const commentTemplate = document.querySelector('#comments').content.querySelector('.social__comment');
  const fragment = document.createDocumentFragment();

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


// pictures.forEach(element => {
//   console.log(element);
// });
// Непонятно почему forEach не работает на коллекции элементов!!!????
// a вот for работает
// upd: тогда были другие условия надо поробовать снова forEach

for (let i = 0; i < pictures.length; i++) {

  pictures[i].addEventListener('click', function () {
    bigPicture.classList.remove('hidden');

    bigPicture.querySelector('.social__comment-count').classList.add('hidden');
    bigPicture.querySelector('.social__comments-loader').classList.add('hidden');

    console.log(pictures[i]);
    const bigPictureImage = bigPicture.querySelector('.big-picture__img').children[0]; // у элемента img нет класса и находим его как первого (и едимтвенного) ребенка .big-picture__img'

    bigPictureImage.src = data[i].url;
    bigPictureImage.alt = data[i].description;

    bigPicture.querySelector('.social__caption').textContent = data[i].description; // передаем описание фотографии

    commentContainer.innerHTML = ''; // удаляем коментарии заглушки которые написаны в HTML

    const comments = data[i].comments;

    renderComents(comments); // отделил в функцию смотри выше

  });
};

console.log('big-picture подключен');

closeButton.addEventListener('click', function () {
  bigPicture.classList.add('hidden');
});
