// 4.1. Загрузка изображений от других пользователей производится сразу после открытия страницы с удалённого сервера: https://25.javascript.htmlacademy.pro/kekstagram/data.
console.log('api.js is working');
import { debounce } from './debounce.js';



const getData = async (onSuccess, onFail, filter = 'filter-default') => {
  try {
  const response = await fetch ('https://25.javascript.htmlacademy.pro/kekstagram/data');
    if (!response.ok) {
      throw new Error ('Не удалось загрузить фотографии');
    }

    const offers = await response.json();

    console.log(`данные о фильре передались в getData и равны ${filter}`);
    onSuccess(offers, filter);
    return offers;

  } catch(error) {
    onFail(error.message);
  }
}

const sendData = async (onSuccess, onFail, body) => {
  try {
    const response = await fetch('https://25.javascript.htmlacademy.pro/kekstagram',
        {
          method: 'POST',
          body: body, // в архиве проекта пишут на этой строке просто body,
        },
      );

      if(!response.ok) {
        throw new Error('Не удалось отправить форму. Попробуйте еще раз');
      }

      onSuccess('Данные отправлены успешно');
  } catch (error) {
    onFail(error.message);
  }
}
export { getData, sendData };

