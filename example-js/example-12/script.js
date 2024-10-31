let keys = document.querySelectorAll('.key');
let display = document.querySelector('.display');
let clear =  document.querySelector('.clear');

console.log(clear);

for (let key of keys) {
  key.addEventListener('click', function () {
    console.log(key.textContent);
    display.textContent += key.textContent;
  });
}

clear.addEventListener('click', function () {
  console.log('очистить');
  display.textContent = '';
});


/*
Кнопки с буквами и «пробел» имеют класс key, а дисплей — класс display.

При клике на кнопку с буквой или пробелом текстовое содержимое этой кнопки должно добавляться к текстовому содержимому дисплея.

Кнопка очистки имеет класс clear. При клике на неё весь текст внутри дисплея должен удаляться, для этого в текстовое содержимое дисплея нужно записать пустую строку.
*/
