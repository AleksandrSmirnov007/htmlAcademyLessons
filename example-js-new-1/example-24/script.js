// function debounce(f, delay){
//   var lastTimeout;
//   return function(){
//     if(lastTimeout){
//       clearTimeout(lastTimeout);
//     }
//     var args = Array.from(arguments);
//     lastTimeout = setTimeout(function(){
//       f.apply(null, args);
//     }, delay);
//   }
// }

// function sacrifice(name){
//   console.log(name + " была принесена в жертву *демонический смех*");
// };

// const sacrificeDebounced = debounce(sacrifice, 500);

// sacrificeDebounced("Катя");
// sacrificeDebounced("Света");
// sacrificeDebounced("Лена");


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

function debounce(f, delay){
  var lastTimeout;
  return function(){
    if(lastTimeout){
      clearTimeout(lastTimeout);
    }
    var args = Array.from(arguments);
    lastTimeout = setTimeout(function(){
      f.apply(null, args);
    }, delay);
  }
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



const funcColorChange = () => {
  if (colorIndex < allColor.length - 1) {
    colorIndex++;
  } else {
    colorIndex = 0;
  }
  console.log(colorIndex);
  console.log(`начало выполнения функции funcColorChange`);
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

  funcColorChangeDebounced();

});
