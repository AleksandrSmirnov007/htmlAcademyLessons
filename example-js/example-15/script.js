var chatContent = document.querySelector('.chat-content');
var form = document.querySelector('.chat-form');
var messageInput = form.querySelector('.chat-form-input');

var messageTemplate = document.querySelector('#message-template').content;

var newItemTemplate = messageTemplate.querySelector('.chat-message');

var addEventListenerDel = function (item) {
  var buttonDel = item.querySelector('.chat-message-button');
  buttonDel.addEventListener('click', function () {
    console.log('кнопка удаления работает');
    item.remove();
  });
};

form.addEventListener('submit', function (evt) {
  evt.preventDefault();
  var messageInputValue = messageInput.value;
  var itemMessage = newItemTemplate.cloneNode(true);

  addEventListenerDel(itemMessage);
  var messageText = itemMessage.querySelector('p');
  messageText.textContent = messageInputValue;
  chatContent.appendChild(itemMessage);
  messageInput.value = '';
});



/*

Нужно запрограммировать мессенджер. Как должна работать программа:

— Шаблон сообщения находится в теге template с идентификатором message-template.

— В блоке сообщения (класс chat-message) должен быть текст сообщения, кнопка удаления и имя пользователя.

— Новое сообщение добавляется в конец контейнера с классом chat-content.

— Чтобы добавить новое сообщение, нужно ввести текст в поле ввода (элемент с классом chat-form-input) и нажать кнопку «Отправить» (отправляет данные из формы с классом chat-form).

- Чтобы удалить сообщение, нужно кликнуть по кнопке с крестиком (элемент с классом chat-message-button). Эта кнопка появляется при наведении на сообщение.


*/
