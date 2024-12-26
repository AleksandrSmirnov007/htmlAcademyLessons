// 4.1. Загрузка изображений от других пользователей производится сразу после открытия страницы с удалённого сервера: https://25.javascript.htmlacademy.pro/kekstagram/data.
console.log('api.js is working');
import {showAlert, showSuccess} from './util.js';

const getData = (onSuccess) => {
  fetch ('https://25.javascript.htmlacademy.pro/kekstagram/data')
    .then ((response) => {
      if (response.ok) {
        return response.json();
      } else {
        showAlert('Что-пошло не так. Перезагрузите страницу');
      }
    })
    .then ((pictures) => onSuccess(pictures))
    .catch((error) => console.error('произошла ошибка: ' + error));
}


const sendData = (body) => {
  fetch('https://25.javascript.htmlacademy.pro/kekstagram',
    {
      method: 'POST',
      credentials: 'same-origin',
      body: body,
    },
  )
    .then((response) => {
      if(response.ok) {
        showSuccess('Данные отправлены успешно');
        return response.json;
      } else {
        showAlert('Произошла ошибка при отправке данных')
      }
    })
    .then((data) => console.log(data));
}
export { getData, sendData };

