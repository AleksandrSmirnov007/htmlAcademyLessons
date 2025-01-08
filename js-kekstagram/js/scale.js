const image = document.querySelector('.img-upload__preview img');
const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const scaleInput = document.querySelector('.scale__control--value');

const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;

const scaleImage = (value = DEFAULT_SCALE) => {
  image.style.transform = `scale(${value / 100})`;
  scaleInput.value = `${value}%`
};

const onSmillerButtonClick = () => {
  const currentValue = parseInt(scaleInput.value, 10); // Функция parseInt() анализирует строковый аргумент и возвращает целое число в указанном основании (базовой системе счисления). // При этом может подрезать приставку из % или несколько символов %% Пример // const foo = '100%%%%%'; // console.log(parseInt(foo, 10)); /// выведет 100
  let newValue = currentValue - SCALE_STEP;

  if (newValue < MIN_SCALE) {
    newValue = MIN_SCALE;
  }
  scaleImage(newValue);
}

const onBiggerButtonClick = () => {
  const currentValue = parseInt(scaleInput.value, 10);
  let newValue = currentValue + SCALE_STEP;

  if (newValue > MAX_SCALE) {
    newValue = MAX_SCALE;
  }
  scaleImage(newValue);
}

const resetScale = () => {
  scaleImage(); // по умолчанию параметры (value = DEFAULT_SCALE) если запустить без передачи параметров то используюется параметр по умолчанию scaleImage(DEFAULT_SCALE) тем самым масштаб изображения сбросится до изначального эту функцию мы передадим с помощью export что бы запускать ее при закрытии формы в hideModal()
};

smallerButton.addEventListener('click', onSmillerButtonClick );
biggerButton.addEventListener('click', onBiggerButtonClick );

export {resetScale};
