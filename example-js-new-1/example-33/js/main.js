import './other.js';
console.log('проба');

console.log( localStorage.getItem('test'));
// const foo = localStorage.getItem('data');

const foo = JSON.parse(
  localStorage.getItem('data')
);

console.log(foo);

console.log( JSON.stringify(localStorage, null, 2) );
