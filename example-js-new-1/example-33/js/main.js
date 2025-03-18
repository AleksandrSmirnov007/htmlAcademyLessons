// https://htmlacademy.ru/blog/js/localstorage

import './other.js';
console.log('проба');

console.log( localStorage.getItem('test'));
// const foo = localStorage.getItem('data');

const foo = JSON.parse(
  localStorage.getItem('data')
);

console.log(foo);

console.log( JSON.stringify(localStorage, null, 2) );

const saveInput = document.querySelector('.input');
console.log(saveInput);

const saveButton = document.querySelector('.save-button');
console.log(saveButton);

const showButton = document.querySelector('.show-button');
console.log(showButton);

const showField = document.querySelector('.show-output');


const saveData = (data) => {
  console.log('результат работы cachedData');
  const cachedData = localStorage.getItem('someData');

  console.log(cachedData);
  if (cachedData) {
    console.log('данные есть');
    console.log(JSON.parse(cachedData));
    localStorage.setItem('someData', JSON.stringify(data));
  } else {
    console.log('данных нет');
    localStorage.setItem('someData', JSON.stringify(data));
  }

}

saveButton.addEventListener('click', () => {
  console.log(saveInput.value);
  saveData(saveInput.value);
});

showButton.addEventListener('click', () => {
  showField.value = JSON.parse(localStorage.getItem('someData'));
});


// Что такое localStorage и как им пользоваться
// 12 октября 2023
// JS

// Евгений Шкляр

// localStorage — это место в браузере пользователя, в котором сайты могут сохранять разные данные. Это как ящик для хранения вещей, которые не исчезнут, даже если вы выключите компьютер или закроете браузер.

// До localStorage разработчики часто использовали cookies, но они были не очень удобны: мало места и постоянная передача данных туда-сюда. LocalStorage появился, чтобы сделать процесс более простым и эффективным.

// Как хранятся данные в localStorage
// В localStorage данные хранятся в формате пары ключ-значение, причём и ключ, и значение всегда сохраняются в виде строк. Даже если вы сохраните числовое или логическое значение, оно автоматически преобразуется в строку.


// Сохраняем число или булевскую переменную:

// localStorage.setItem('number', 123);
// localStorage.setItem('boolean', true);
// При извлечении в обоих случаях будет строка:

// console.log(localStorage.getItem('number')); // "123"
// console.log(localStorage.getItem('boolean')); // "true"
// Если вам нужно сохранить более сложные структуры данных, например, объекты или массивы, используйте JSON.stringify() для их преобразования в строку перед сохранением и JSON.parse() для преобразования обратно после извлечения:

// const user = {
//   name: "Alex",
//   age: 25
// };

// // Сохранение объекта в localStorage
// localStorage.setItem('user', JSON.stringify(user));

// // Извлечение объекта из localStorage
// const retrievedUser = JSON.parse(localStorage.getItem('user'));
// console.log(retrievedUser.name); // "Alex"
// Таким образом, несмотря на то что в localStorage можно сохранять только строки, с помощью JSON вы можете эффективно работать с более сложными типами данных.

// В каких случаях пригодится localStorage
// Сохранение пользовательских настроек
// Например, если на сайте можно выбирать светлую или темную тему, чтобы каждый раз не переключать, можно использовать следующий код:

// // Проверяем, установлена ли тема 'dark' в localStorage
// if (localStorage.getItem('theme') === 'dark') {
//   // Если установлена темная тема, применяем ее к body документа
//   document.body.classList.add('dark-mode');
// }
// Сокращение запросов к серверу
// Если не хочется каждый раз обращаться к серверу за данными, можно сохранить их в localStorage:

// // Пытаемся получить данные из localStorage по ключу 'someData'
// const cachedData = localStorage.getItem('someData');

// // Проверяем, существуют ли данные в кэше
// if (cachedData) {
//   // Если данные существуют, преобразуем их из строки в объект или массив и обрабатываем
//   processData(JSON.parse(cachedData));
// } else {
//   // Если данных в кэше нет, делаем запрос к серверу за данными
//   fetchDataFromServer().then(data => {
//     // После получения данных сохраним их в localStorage для дальнейшего использования
//     localStorage.setItem('someData', JSON.stringify(data));

//     // Обрабатываем полученные с сервера данные
//     processData(data);
//   });
// }
// Работа без интернета
// Приложения, которые могут работать без интернета (например, список задач), могут использовать localStorage для хранения информации:

// // Пытаемся получить список задач из localStorage. Если его нет, используем пустой массив.
// const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// // Функция для добавления задачи
// function addTask(task) {
//     // Добавляем новую задачу в массив
//     tasks.push(task);

//     // Сохраняем обновленный список задач в localStorage
//     localStorage.setItem('tasks', JSON.stringify(tasks));

//     // Обновляем отображение списка задач на странице (предполагается, что функция renderTasks определена где-то еще)
//     renderTasks();
// }
// Как очистить localStorage
// Чтобы очистить localStorage с помощью JavaScript, вы можете использовать метод clear(). Этот метод удаляет все пары ключ-значение из localStorage для текущего домена. После выполнения этого кода весь localStorage будет полностью очищен:

// localStorage.clear();
// Если вы хотите удалить конкретное значение из localStorage, используйте метод removeItem(), указав ключ, который хотите удалить:

// localStorage.removeItem('keyName');
// Так, значение, связанное с keyName, будет удалено, а остальные данные в localStorage останутся нетронутыми.

// Не храните важные данные в localStorage
// Есть несколько ситуаций, при которых данные могут быть потеряны или удалены:

// Очистка браузера. Если пользователь решит вручную очистить историю браузера и данные сайтов, localStorage тоже очистится.
// Ограничение по размеру. Каждый браузер имеет свои ограничения на размер данных, который может быть сохранен в localStorage (обычно около 5–10 мегабайт). Если попытаться сохранить больше данных, чем позволяет лимит, предыдущие данные не будут удалены, но новые не сохранятся.
// Инкогнито-режим. Если пользователь открывает сайт в режиме инкогнито или приватного просмотра, localStorage может быть доступен для текущей сессии, но данные будут потеряны после закрытия этой сессии.
// Политика Same-Origin. localStorage привязан к конкретному домену, протоколу и порту. Это означает, что если вы сохраните что-то на http://example.com, вы не сможете получить доступ к этим данным с https://example.com или http://sub.example.com.
// Осознанное удаление разработчиком. Код на сайте может намеренно удалять или перезаписывать данные в localStorage. Например, в списке задач, как мы рассмотрели выше.
// Ограничение места на устройстве. Если на устройстве пользователя закончится свободное место, некоторые браузеры могут автоматически очистить localStorage.
// Всегда стоит помнить, что localStorage не предназначен для хранения критически важных данных. Если вам нужно надежное хранение, лучше рассмотреть серверные базы данных или другие методы хранения данных на стороне сервера.

// Так что localStorage — это ещё один маленький помощник для фронтендера. Но, как и все инструменты, его стоит использовать с умом и не забывать об ограничениях. Не пытайтесь положить туда слишком много или что-то слишком важное — ведь это не серверная база данных. Но чтобы сделать жизнь пользователя чуть удобнее — самое то!

// «Доктайп» — журнал о фронтенде. Читайте, слушайте и учитесь с нами.
