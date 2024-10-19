
console.log('первая часть: создание функции счетчика ');

let Counter = (function () {
  let privateCounter = 0;

  function changeBy (val) {
    privateCounter += val;
  }

  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    },
  }
})();

console.log('Запуск фунции');

console.log('print commands: Counter.value(), Counter.increment(), Counter.decrement');
console.log('Вывод Counter.value в консоль, Counter.value = ' + Counter.value());

console.log(Counter.value()); /* Напишет в консоль 0 */

Counter.increment();
Counter.increment();

console.log(Counter.value()); /* напишет в консоль 2 */

Counter.decrement();

console.log(Counter.value()); /* напишет в консоль 1 */

Counter.value = 0; // обнулим счетчик

// Заметьте, мы описываем анонимную функцию, создающую счётчик, и тут же запускаем её, присваивая результат исполнения переменной Counter.
