const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
// const pictures = document.querySelectorAll('.picture');

const pictureContainer = document.querySelector('.pictures');

console.log(pictureContainer.children);

const pictures = pictureContainer.children;


console.log(pictures[3]);

console.log('big-picture подключен');
// bigPicture.classList.remove('hidden');


closeButton.addEventListener('click', function () {
  bigPicture.classList.add('hidden');
});
