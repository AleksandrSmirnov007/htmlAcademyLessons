const createLoader = (onSuccess, onError) => () => {
  return fetch(
    'https://25.javascript.htmlacademy.pro/code-and-magick/data',
    {
      method: 'GET',
      credentials: 'same-origin',
    },
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((data) => {
      // console.log(data); // По идее в  main.js  за счет кода const loadAnimals = createLoader(console.log, console.error);  в onSuccess должно подставиться console.log но этого не происходит хотя код полностью  переписан с демонстрации
      onSuccess(data);
    })
    .catch((err) => {
      onError(err);
    });
};


export {createLoader};
