// Другое дело fetch. Это просто функция, которой нужно сообщить адрес запроса, а она вернёт промис. Метод и другие параметры можно не сообщать, потому что по умолчанию запрос уйдёт как GET.
// fetch возвращает промисс поэтому можно использовать then


// Чтобы превратить ответ в понятный нам вид, нужно вызвать метод json. Теперь мы можем посмотреть содержимое в формате JSON и проводить над ним необходимые манипуляции.
// В первом then мы получим объект ответа Response. Это пока что не данные, а именно объект ответа сервера.
// Чтобы превратить ответ в понятный нам вид, нужно вызвать метод json. Теперь мы можем посмотреть содержимое в формате JSON и проводить над ним необходимые манипуляции.


// fetch('https://25.javascript.htmlacademy.pro/code-and-magick/data')
//   .then((response) => response.json())
//   .then((data) => console.log(data));



// Здесь же, в настройках, нужно передавать тело POST-запроса, в ключе body. Давайте попробуем отправить пустой POST-запрос на сервер «Кодымагии». В ответ получим объект с описанием ошибок валидации на сервере.

// P. S. Наш сервер принимает только FormData-данные. Разобраться, что такое FormData, часть домашнего задания.


// fetch(
//   'https://25.javascript.htmlacademy.pro/code-and-magick',
//   {
//     method: 'POST',
//     credentials: 'same-origin',
//     body: new FormData(),
//   }
// )
//   .then((response) => response.json())
//   .then((data) => {
//     console.log('Результат: ', data)
//   }
// );


// Важная особенность fetch в том, что возвращаемый промис не перейдёт в состояние rejected из-за ответа HTTP, который считается ошибкой. Даже если ответ со статус-кодами 404 или 500. В этом есть логика, ведь сервер нам ответил, пусть и ошибкой.
// Посмотрите на статус-код в консоли, он равен 400, что означает «Неправильный запрос». Однако мы обрабатываем ответ всё ещё в then, а не catch.
// Как же тогда понять, что сервер ответил ошибкой? Можно ориентироваться на значение ключа response.ok. В случае ошибки его значением будет false.

// fetch(
//   'https://25.javascript.htmlacademy.pro/code-and-magick',
//   {
//     method: 'POST',
//     credentials: 'same-origin',
//     body: new FormData(),
//   }
// )
//   .then((response) => {
//     console.log(response.status); // выведет 400
//     console.log(response.ok); // выведет false
//     return response.json()
//   })
//   .then((data) => {
//     console.log('Результат: ', data)
//   }
// );


// Где же может пригодиться catch? В случае, если запрос будет отклонён при сбое сети или если при обработке ответа что-то пошло не так.

// Давайте «забудем» передать данные серверу. Тогда сервер вернёт 500 ошибку, мы помним, что она обработается в then, поэтому мы видим 500 и false в консоли. Вот только 500 ошибка не содержит данных в JSON, поэтому при попытке response.json() мы получим ошибку парсинга, что сломает наш код, и до вывода результата даже не дойдёт.

// fetch(
//   'https://25.javascript.htmlacademy.pro/code-and-magick',
//   {
//     method: 'POST',
//     credentials: 'same-origin',
//                                   // удалили код  body: new FormData(),
//   }
// )
//   .then((response) => {
//     console.log(response.status); // выведет 400
//     console.log(response.ok); // выведет false
//     return response.json()
//   })
//   .then((data) => {
//     console.log('Результат: ', data)
//   })
//   .catch ((err) => {
//     console.error(err); // выведет: log: Unexpected end of JSON input
//   });

// Такие вещи и удобно обрабатывать в catch y fetch запросов.
// Аналогично будет обработана ошибка чтения несуществующего JSON-файла.


fetch(
  'https://25.javascript.htmlacademy.pro/code-and-magick',
  {
    method: 'POST',
    credentials: 'same-origin',
                                  // удалили код  body: new FormData(),
  }
)
  .then((response) => {
    console.log(response.status); // выведет 400
    console.log(response.ok); // выведет false
    return response.json()
  })
  .then((data) => {
    console.log('Результат: ', data)
  })
  .catch ((err) => {
    console.error(err); // выведет: log: Unexpected end of JSON input
  });
