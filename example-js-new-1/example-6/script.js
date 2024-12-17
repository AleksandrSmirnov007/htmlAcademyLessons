const makePizza = function (title, cb) {
  console.log(`Заказ на приготовление пиццы «${title}» получен. Начинаем готовить…`);

  // setTimeout — встроенная функция для отложенного вызова колбэка.
  // Интерфейс у неё прост: первым аргументом нужно передать колбэк, а вторым — задержку (таймаут) в милисекундах.
  // Ближе с setTimeout вы познакомитесь позже, в отдельном материале раздела.
  setTimeout(cb, 3000);
}

const readBook = function () {
  console.log('Читаю книгу «Колдун и кристалл»…');
}

const eatPizza = function () {
  console.log('Ура! Пицца готова, пора подкрепиться.');
}

makePizza('Пеперонни', eatPizza);
readBook();
