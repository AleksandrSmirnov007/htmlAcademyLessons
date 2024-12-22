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
      return onSuccess(data);
    })
    .catch((err) => {
      return onError(err);
    });
};


export {createLoader};
