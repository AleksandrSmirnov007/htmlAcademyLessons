const getRandomPositiveFloat = (a, b, digits = 1) => {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = (upper - lower) * Math.random() + lower;
  return result.toFixed(digits);
};

const getRandomPostiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = (upper - lower + 1) * Math.random() + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (array) =>
  array[getRandomPostiveInteger(0, array.length - 1)];

const debounce = (callback, timeoutDelay = 1000) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export { getRandomPositiveFloat, getRandomPostiveInteger, getRandomArrayElement, debounce };
