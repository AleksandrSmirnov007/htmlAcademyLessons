fetch(
  'https://25.javascript.htmlacademy.pro/code-and-magick',
  {
    method: 'POST',
    credentials: 'same-origin',
    body: new FormData(),
  },
)
  .then((response) => response.json())
  .then((data) => {
    console.log('Результат', data);
  });


// еще пример

// const newPost = {
//   title: 'foo',
//   body: 'bar',
//   userId: 1,
// }

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST', // Здесь так же могут быть GET, PUT, DELETE
//   // Тело запроса в JSON-формате
//   body: JSON.stringify(newPost),
//   headers: {
//     // Добавляем необходимые заголовки
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data)
//     // {title: "foo", body: "bar", userId: 1, id: 101}
//   }
// )
