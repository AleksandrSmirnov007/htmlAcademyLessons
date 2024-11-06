const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.big-picture__cancel');


console.log('big-picture подключен');
bigPicture.classList.remove('hidden');

closeButton.addEventListener('click', function () {
  bigPicture.classList.add('hidden');
});
