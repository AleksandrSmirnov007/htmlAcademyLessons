const getData = async (onSuccess, onFail) => {
  try {
    const response = await fetch ('https://25.javascript.htmlacademy.pro/keksobooking/data');
    if (!response.ok) {
      throw new Error ('Не удалось загрузить обьявления об аренде. Попробуйте перезагрузить страницу');
    }

    const rentals = await response.json();
    onSuccess(rentals);

  } catch (error) {
    onFail(error.message);
  }
};

const sendData = async (onSuccess, onFail, body) => {
  console.log(body);
  try {
    const response = await fetch ('https://25.javascript.htmlacademy.pro/keksobooking',
      {
        method: 'POST',
        body: body,
      }
    );
    if (!response.ok) {
      throw new Error ('Не удалось отправить форму попробуйте еще раз');
    }
    // const result = await response.json();
    // console.log(result);
    onSuccess(); // Было     onSuccess('Данные отправлены успешно'); решил не передавать сообщение для успешного исхода (оно есть в шаблоне), а для неуспешного могут быть варианты - "неправильно заполнена форма" или "непередались данные на сервер"

  } catch (error) {
    onFail(error.message);
  }
}

export { getData, sendData };
