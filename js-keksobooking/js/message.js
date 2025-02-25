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
  const messageElement = document.querySelector('.error') || document.querySelector('.success');
  if(messageElement) {
    messageElement.removeEventListener('click', onMessageClick);
    messageElement.remove();
  };
  body.removeEventListener('keydown', onEscDown);
};

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
