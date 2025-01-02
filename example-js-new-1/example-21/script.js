

// Функция взята из интернета и доработана
// Источник - https://www.freecodecamp.org/news/javascript-debounce-example

function debounce (callback, timeoutDelay = 500) {
  // Используем замыкания, чтобы id таймаута у нас навсегда приклеился
  // к возвращаемой функции с setTimeout, тогда мы его сможем перезаписывать
  let timeoutId;

  return (...rest) => {
    // Перед каждым новым вызовом удаляем предыдущий таймаут,
    // чтобы они не накапливались
    clearTimeout(timeoutId);
    console.log('внутри функции дебоунсе')

    // Затем устанавливаем новый таймаут с вызовом колбэка на ту же задержку
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);

    // Таким образом цикл «поставить таймаут - удалить таймаут» будет выполняться,
    // пока действие совершается чаще, чем переданная задержка timeoutDelay
  };
}



delayField.addEventListener('change', () => {
  delay = delayField.value *1000;
});

const allColor = [
  'blue',
  'red',
  'yellow',
  'green',
];

let colorIndex = 0;
element.style.backgroundColor = allColor[0];

const funcColorChange = (colorIndex) => {
  console.log(`начало выполнения функции funcColorChange`);
  setTimeout(() => {
    element.style.backgroundColor = allColor[colorIndex];
    console.log(`конец выполнения функции funcColorChange ${delay / 1000} секунд`);
  }, delay);
};

changeButton.addEventListener('click', () => {

  if (colorIndex < allColor.length - 1) {
    colorIndex++;
  } else {
    colorIndex = 0;
  }
  console.log(colorIndex);
  funcColorChange(colorIndex);
  debounce(() => funcColorChange(colorIndex), 500);

});




