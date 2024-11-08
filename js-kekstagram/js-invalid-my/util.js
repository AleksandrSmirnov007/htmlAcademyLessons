function getRandomPositiveInteger(a, b) {

  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function checkStringLength(string, length) {
  return string.length <= length;
}

const getRamdomArrayElement = (array) => array[getRandomPositiveInteger(0, array.length -1)];

export {getRandomPositiveInteger, checkStringLength, getRamdomArrayElement};
