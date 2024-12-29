const successMessage = document.querySelector('#success').content.querySelector('.success');
const errorMessage = document.querySelector('#error').content.querySelector('.error');
const body = document.querySelector('body');

const showSuccessMessage = () => {
  body.append(successMessage);
  body.addEventListener('keydown', onEscDown);
  body.addEventListener('click', onBodyClick);
  successMessage
    .querySelector('.success__button')
    .addEventListener('click', hideMessage);
};

const showErrorMessage = () => {
  body.append(errorMessage);
  body.addEventListener('keydown', onEscDown);
  body.addEventListener('click', onBodyClick);
  errorMessage
    .querySelector('.error__button')
    .addEventListener('click', hideMessage);
};


function hideMessage () {
  const messageElement = document.querySelector('.success') || document.querySelector('.error');
  messageElement.remove();
  body.removeEventListener('keydown', onEscDown);
  body.removeEventListener('click', onBodyClick);
};

function onBodyClick (evt) {
  console.log('body click');
  if (evt.target.closest('.error__inner') || evt.target.closest('.success__inner')) {
    return; // приведет к выходу из фунции без каких либо действий если мы кликнем на содержимое сообщения
  }
  hideMessage(); // если кликнем на другое место в body кроме содержимого сообщение то сообщение скроется
};

function onEscDown (evt) {
  if(evt.key === 'Escape') {
    evt.preventDefault();
    evt.stopPropagation(); //Метод stopPropagation() объекта Event в JavaScript предотвращает дальнейшую передачу текущего события (предотвращает всплытие по дереву DOM)
    hideMessage();
  }
}


export {showSuccessMessage, showErrorMessage};
