// Работа с fetch() не ограничивается лишь получением данных от сервера. Ничего не мешает их передавать на сервер. Эта задача не сильно сложней, но придётся задействовать второй аргумент fetch() — объект с настройками.

// Попробуем подготовить и отправить запрос методом POST (речь о методе в контексте протокола HTTP):

// Данные для отправки
const post = {
  id: 1,
  userId: 31337,
  title: 'Fetch API',
  body: 'Fetch API — современный, гибкий и универсальный способ для отправки запросов к серверу...',
};

// Вторым аргументом передадим объект с настройками.
// Определим в нём метод, заголовки и тело запроса
fetch(
  'https://jsonplaceholder.typicode.com/posts',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  })
  .then((response) => response.json())
  .then((json) => console.log(json));

  // В этом примере кода задействован второй аргумент fetch(). С его помощью мы передаём объект с настройками, где переопределяем HTTP-метод (по умолчанию GET, а нам нужен POST).