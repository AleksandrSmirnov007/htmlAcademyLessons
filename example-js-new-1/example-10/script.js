
// Ранее, чтобы сделать запрос на сервер, нам нужен был специальный объект XMLHttpRequest.

// Способ рабочий, но сложный в описании: нужно создать объект, вызвать метод open для открытия соединения, затем вызвать метод send, чтобы отправить запрос, добавить обработчик события load.

// И так для каждого запроса.

const xhr = new XMLHttpRequest();

xhr.addEventListener ('load', () => {
  console.log(xhr.status, xhr.statusText);
});

xhr.open('GET', 'https://25.javascript.htmlacademy.pro/code-and-magick/data');

xhr.send();
