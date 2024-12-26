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


const TIME_SHOW_ALERT = 7000;

const showMessage = (message, statusColor) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.textTransform = 'none';
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'fixed';
  alertContainer.style.left = 0;
  alertContainer.style.right = 0;
  alertContainer.style.top = '10%';
  alertContainer.style.width = '50%';
  alertContainer.style.margin = '0 auto';
  alertContainer.style.lineHeight = '1.4';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.color = 'black';
  alertContainer.style.minHeight = '20%';
  alertContainer.style.display = 'grid';
  alertContainer.style.placeContent = 'center';
  alertContainer.style.backgroundColor = 'white';
  alertContainer.style.borderRadius = '10px';
  alertContainer.style.border = `5px solid ${statusColor}`;

  alertContainer.textContent = message;
  document.body.append(alertContainer);

  setTimeout (() => {
    alertContainer.remove();
  }, TIME_SHOW_ALERT);
}


const showAlert = (message) => {
  showMessage(message, 'rgba(235, 76, 66, 0.8)');
};

const showSuccess = (message) => {
  showMessage(message, 'rgba(80, 200 ,120, 0.8)');
}

// showSuccess('Данные успешно отправлены');

export {getRandomPostiveInteger, checkStringLength, getRandomArrayElement, showAlert, showSuccess};
