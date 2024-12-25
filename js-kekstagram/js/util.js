console.log('util.js is working')

const getRandomPostiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = (upper - lower + 1) * Math.random() + lower;
  return Math.floor(result);
}

const checkStringLength = (string, length) => string.length <= length;

const getRandomArrayElement = (array) =>
  array[getRandomPostiveInteger(0, array.length -1)];


const TIME_SHOW_ALERT = 10000;

const showMessage = (message, bgColor) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.right = 0;
  alertContainer.style.top = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = bgColor;

  alertContainer.textContent = message;
  document.body.append(alertContainer);

  setTimeout (() => {
    alertContainer.remove();
  }, TIME_SHOW_ALERT);
}

const showAlert = (message) => {
  showMessage(message, 'red');
};

const showSuccess = (message) => {
  showMessage(message, 'green');
}

export {getRandomPostiveInteger, checkStringLength, getRandomArrayElement, showAlert, showSuccess};
