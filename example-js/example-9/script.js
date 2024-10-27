var button = document.querySelector('.button');

document.addEventListener('click', function(evt) {
  console.log('произошел клик');
  console.log(evt);
});

button.addEventListener('click', function(evt) {
  console.log('кнопка была нажата');
  console.log(evt);
});
