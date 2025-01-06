
// Функция взята из интернета и доработана
// Источник - https://www.freecodecamp.org/news/javascript-debounce-example

function debounce (callback, timeoutDelay = 500) {
  // Используем замыкания, чтобы id таймаута у нас навсегда приклеился
  // к возвращаемой функции с setTimeout, тогда мы его сможем перезаписывать
  let timeoutId;
  console.log(`debounce в работе, значение timeoutId :${timeoutId}`);
  return (...rest) => {
    // Перед каждым новым вызовом удаляем предыдущий таймаут,
    // чтобы они не накапливались
    clearTimeout(timeoutId);
    console.log(`debounce в работе, значение timeoutId :${timeoutId}`);
    // Затем устанавливаем новый таймаут с вызовом колбэка на ту же задержку
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
    console.log(`debounce в работе, значение timeoutId :${timeoutId}`);
    // Таким образом цикл «поставить таймаут - удалить таймаут» будет выполняться,
    // пока действие совершается чаще, чем переданная задержка timeoutDelay
  };
}

function sacrifice(name){
  console.log(name + " была принесена в жертву *демонический смех*");
};

const sacrificeDebounced = debounce(sacrifice, 500);

sacrificeDebounced("Катя");
sacrificeDebounced("Света");
sacrificeDebounced("Лена");


// Через полсекунды Лена будет принесена в жертву, а Катя и Света останутся в живых благодаря нашей волшебной функции.
// Если вы внимательно читали предыдущие примеры, то должны хорошо понимать, как тут всё работает. Функция-обёртка, создаваемая debounce, запускает отложенное выполнение исходной функции с помощью setTimeout. При этом идентификатор таймаута сохраняется в переменную lastTimeout, доступную обёртке благодаря замыканию. Если в этой переменной уже лежит идентификатор таймаута, обёртка отменяет этот таймаут с помощью clearTimeout. Если предыдущий таймаут уже успел выполниться, то ничего не происходит. Если нет, тем хуже для него.
// На этом, пожалуй, я закончу. Надеюсь, сегодня вы узнали много нового, а главное — поняли всё, что узнали. До новых встреч.


// ЗАДАЧА 2. Есть квадрат который меняет цвет по клику. На основе выше описанной функции сделать так что бы сколько бы раз не была нажата кнопка обновить цвет за указанное время цвет поменяется всего один раз
// решена и код работает

// добавляю боок кода отвечающий за смену цвета квадрата
const changeButton = document.querySelector('.changeColorButton');
const element = document.querySelector('.element');
const delayField = document.querySelector('.delay-count');

let delay = delayField.value * 1000;

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



const funcColorChange = () => {
  console.log(`начало выполнения функции funcColorChange`);
  if (colorIndex < allColor.length - 1) {
    colorIndex++;
  } else {
    colorIndex = 0;
  }
  console.log(`индекс цвета: ${colorIndex} меняем цвет`);
  element.style.backgroundColor = allColor[colorIndex];
};

console.log(` текущее заначение  delay:  ${delay}`); //


let funcColorChangeDebounced = debounce( funcColorChange, 1000);

delayField.addEventListener('change', () => {
  delay = delayField.value * 1000;
  funcColorChangeDebounced = debounce( funcColorChange, delay);
  console.log(funcColorChangeDebounced);
});


changeButton.addEventListener('click', () => {
  console.log('клик на кнопку изменить цвет');
  funcColorChangeDebounced();

});
