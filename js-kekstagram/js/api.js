// 4.1. Загрузка изображений от других пользователей производится сразу после открытия страницы с удалённого сервера: https://25.javascript.htmlacademy.pro/kekstagram/data.
console.log('api.js is working');
import {showAlert} from './util.js';

const getData = (onSuccess) => {
  fetch ('https://25.javascript.htmlacademy.pro/kekstagram/data')
    .then ((response) => {
      if (response.ok) {
        return response.json();
      } else {
        showAlert('response.ok = false, данные не пришли с сервера');
      }
    })
    .then ((pictures) => onSuccess(pictures))
    .catch((error) => console.error('произошла ошибка: ' + error));
}

export { getData };

