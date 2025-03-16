// https://htmlacademy.ru/blog/js/localstorage

import './other.js';
console.log('проба');

console.log( localStorage.getItem('test'));
// const foo = localStorage.getItem('data');

const foo = JSON.parse(
  localStorage.getItem('data')
);

console.log(foo);

console.log( JSON.stringify(localStorage, null, 2) );

const saveInput = document.querySelector('.input');
console.log(saveInput);

const saveButton = document.querySelector('.button');
console.log(saveButton);

const showButton = document.querySelector('.show-button');
console.log(showButton);

const saveData = (data) => {
  console.log('результат работы cachedData');
  const cachedData = localStorage.getItem('someData');

  console.log(cachedData);
  if (cachedData) {
    console.log('данные есть');
    console.log(JSON.parse(cachedData));
    localStorage.setItem('someData', JSON.stringify(data));
  } else {
    console.log('данных нет');
    localStorage.setItem('someData', JSON.stringify(data));
  }

}

saveButton.addEventListener('click', () => {
  console.log(saveInput.value);
  saveData(saveInput.value);
});

showButton.addEventListener('click', () => {
  console.log(JSON.parse(localStorage.getItem('someData')));
});
