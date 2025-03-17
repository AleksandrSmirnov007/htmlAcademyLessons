// Объекты хранилища sessionStorage и sessionStorage предоставляют одинаковые методы и свойства:

// setItem(key, value) – сохранить пару ключ/значение.
// getItem(key) – получить данные по ключу key.
// removeItem(key) – удалить данные с ключом key.
// clear() – удалить всё.
// key(index) – получить ключ на заданной позиции.
// length – количество элементов в хранилище.

// Session Storage — это объект веб-хранилища, доступный в браузере, который позволяет хранить данные в рамках сессии. Это значит, что информация будет сохраняться при перезагрузке страницы, но будет очищена, как только пользователь закроет вкладку или браузер. 1

// Некоторые особенности sessionStorage:

// Хранение для конкретной вкладки. Каждая открытая вкладка имеет свой изолированный экземпляр sessionStorage, что удобно для чувствительных данных, которые не должны сохраняться за пределами сессии. 2
// Безопасность. Данные автоматически очищаются в конце сессии, что снижает риск утечки информации. 2
// Ограниченный срок хранения. Данные не сохраняются при закрытии вкладки, что может быть недостатком, если требуется постоянное хранение информации. 2
// Ограничение объёма. Обычно позволяет около 5МБ данных, что может быть limiting для более сложных приложений. 2
// SessionStorage используется, когда нужны временные данные, которые должны быть удалены, когда пользователь закрывает вкладку браузера. Например, для хранения токенов аутентификации на одну сессию, сохранения ввода пользователя в формах при навигации по странице, поддержания временных настроек интерфейса. 3



import './other.js';
console.log('проба');

console.log( sessionStorage.getItem('test'));
// const foo = sessionStorage.getItem('data');

const foo = JSON.parse(
  sessionStorage.getItem('data')
);

console.log(foo);

console.log( JSON.stringify(sessionStorage, null, 2) );

const saveInput = document.querySelector('.input');
console.log(saveInput);

const saveButton = document.querySelector('.save-button');
console.log(saveButton);

const showButton = document.querySelector('.show-button');
console.log(showButton);

const showField = document.querySelector('.show-output');


const saveData = (data) => {
  console.log('результат работы cachedData');
  const cachedData = sessionStorage.getItem('someData');

  console.log(cachedData);
  if (cachedData) {
    console.log('данные есть');
    console.log(JSON.parse(cachedData));
    sessionStorage.setItem('someData', JSON.stringify(data));
  } else {
    console.log('данных нет');
    sessionStorage.setItem('someData', JSON.stringify(data));
  }

}

saveButton.addEventListener('click', () => {
  console.log(saveInput.value);
  saveData(saveInput.value);
});

showButton.addEventListener('click', () => {
  showField.value = JSON.parse(sessionStorage.getItem('someData'));
});


