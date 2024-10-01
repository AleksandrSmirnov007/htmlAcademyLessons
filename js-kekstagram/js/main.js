//функция возвращающая случайно число из переаданного диапазона включительно

function randomNumber (number) {
  if (number >= 0) {
    return Math.random() * number;
  }

  return 0;
}

randomNumber();
// моя фунция работает, но она не то что нужно. Прочитать еще раз задание и сделать работающие функции.
// если сервер(brausersinc) завис перезагрузить его cntl + c

// код из архива учебного проекта

function getRandomPositiveInteger (a, b = 1) {
  if (a === undefined) {
    throw new Error('Первый параметр должен быть число');
  }

  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function checkStringLength (string, length) {
  return string.length <= length;
}

getRandomPositiveInteger(1, 0);
checkStringLength('', 140);
