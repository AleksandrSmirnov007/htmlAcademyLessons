
console.log('Вторая часть: создание нескольких счетчиков на основе одной функции ');

function makeCounter() {
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
};

Counter1 = makeCounter();
Counter2 = makeCounter();

console.log('Value от Counter1: ' + Counter1.value());

console.log('Операции :  Counter1.decrement(); Counter1.decrement(); Counter1.decrement();');

Counter1.decrement();
Counter1.decrement();
Counter1.decrement();

console.log('Value от Counter1: ' + Counter1.value());

console.log('Value от Counter2: ' + Counter2.value());


Counter2.increment();
Counter2.increment();


console.log('Операции :  Counter2.increment(); Counter2.increment();');

console.log('Value от Counter1: ' + Counter1.value());

console.log('Value от Counter2: ' + Counter2.value());
