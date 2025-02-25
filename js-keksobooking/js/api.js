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

    onSuccess();

  } catch (error) {
    onFail(error.message);
  }
}

export { getData, sendData };
