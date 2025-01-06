
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
    console.log(`debounce в работе, значение timeoutId :${timeoutId}`);
    clearTimeout(timeoutId);
    console.log(`debounce в работе, значение timeoutId :${timeoutId}`);
    // Затем устанавливаем новый таймаут с вызовом колбэка на ту же задержку
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
    console.log(`debounce в работе, значение timeoutId :${timeoutId}`);
    // Таким образом цикл «поставить таймаут - удалить таймаут» будет выполняться,
    // пока действие совершается чаще, чем переданная задержка timeoutDelay
  };
}

// Важно
// Пример прминения функции debounce:
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

// const sacrificeDebounced = debounce(sacrifice, 2000);

// sacrificeDebounced("Катя");
// sacrificeDebounced("Света");
// sacrificeDebounced("Лена");


// Через полсекунды Лена будет принесена в жертву, а Катя и Света останутся в живых благодаря нашей волшебной функции.
// Если вы внимательно читали предыдущие примеры, то должны хорошо понимать, как тут всё работает. Функция-обёртка, создаваемая debounce, запускает отложенное выполнение исходной функции с помощью setTimeout. При этом идентификатор таймаута сохраняется в переменную lastTimeout, доступную обёртке благодаря замыканию. Если в этой переменной уже лежит идентификатор таймаута, обёртка отменяет этот таймаут с помощью clearTimeout. Если предыдущий таймаут уже успел выполниться, то ничего не происходит. Если нет, тем хуже для него.
// На этом, пожалуй, я закончу. Надеюсь, сегодня вы узнали много нового, а главное — поняли всё, что узнали. До новых встреч.




export { debounce};
