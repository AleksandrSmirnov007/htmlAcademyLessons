const body = document.querySelector('body');
const successMessage =
  document
  .querySelector('#success')
  .content.querySelector('.success');

const failMessage =
  document
  .querySelector('#error')
  .content.querySelector('.error');

const hideMessage = () => {
  const messageElement = document.querySelector('.error') || document.querySelector('.success'); // повторил спомсоб из кексограмма но в консолт через сунды дые выдвет ошибку: Uncaught TypeError: Cannot read properties of null (reading 'remove') at hideMessage ()то есть пытается удалить и второй элемент но его нет, тогда добавил дальше   // if(messageElement) {  messageElement.remove(); };
  if(messageElement) {
    messageElement.removeEventListener('click', onMessageClick); // удаляем обработчик проверить в инструментах разработчика проверить в инструментах разработчика
    messageElement.remove();
  };
  body.removeEventListener('keydown', onEscDown);
};

// обернем функцию hideMessage в функцию onMessageClick для обработчика, что бы потом можно было удалить обработчик с функцией onMessageClick в функции hideMessage // звучит страшно но нужно провериь на практике
function onMessageClick () {
  hideMessage();
};

function onEscDown (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    evt.stopPropagation();
    hideMessage();
  }
};

// сообщение об успехе
const showSuccessMessage = (message) => {
  if (message) {
    const messageElement = successMessage.querySelector('.success__message');
    messageElement.textContent = message;
  }

  successMessage.addEventListener('click', onMessageClick);
  body.addEventListener('keydown', hideMessage);
  body.appendChild(successMessage);
  setTimeout(hideMessage, 5000);
};

// сообщение об ошибке
const showFailMessage = (message) => {
  if (message) {
    const messageElement = failMessage.querySelector('.error__message');
    messageElement.textContent = message;
  }

  failMessage.addEventListener('click', onMessageClick);
  body.addEventListener('keydown', onEscDown);
  body.appendChild(failMessage);
}

export {
  showSuccessMessage,
  showFailMessage
};
