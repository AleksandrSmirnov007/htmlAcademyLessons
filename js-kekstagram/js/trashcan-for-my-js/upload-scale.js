console.log('up-load-scale.js is working');
const imgUploadPreview = document.querySelector('.img-upload__preview').querySelector('img');

const upLoadScale = document.querySelector('.img-upload__scale');
const buttonControlSmaller = upLoadScale.querySelector('.scale__control--smaller');
const buttonControlBigger = upLoadScale.querySelector('.scale__control--bigger');
const scaleControlValue = upLoadScale.querySelector('.scale__control--value');

const SCALE_STEP = 25;
const SCALE_MIN = 25;
const SCALE_MAX = 100;

const cutPercentToNumber = (value) => Number(value.slice(0, value.length - 1)); // отделяем проценты (один символ в конце строки) и оставляем только число

const onClickSmiller = () => {
  const currentValue = cutPercentToNumber(scaleControlValue.value);
  const newValue = currentValue - SCALE_STEP;

  if (newValue < SCALE_MIN) {
    scaleControlValue.value = `${SCALE_MIN}%`;
    imgUploadPreview.style.scale = SCALE_MIN / 100;
  } else {
    scaleControlValue.value = `${newValue}%`;
    imgUploadPreview.style.scale = newValue / 100;
  }
}

const onClickBigger = () => {
  const currentValue = cutPercentToNumber(scaleControlValue.value);
  const newValue = currentValue + SCALE_STEP;

  if (newValue > SCALE_MAX) {
    scaleControlValue.value = `${SCALE_MAX}%`;
    imgUploadPreview.style.scale = SCALE_MAX / 100;
  } else {
    scaleControlValue.value = `${newValue}%`;
    imgUploadPreview.style.scale = newValue / 100;
  }
}

// доступ через делегирование к родителю от кнопок
upLoadScale.addEventListener('click', (evt) => {
  // делегирование от кнопки уменьшить масштаб
  if (evt.target.matches('.scale__control--smaller')) {
    onClickSmiller();
  }
  // делегирование от кнопки уменьшить масштаб
  if (evt.target.matches('.scale__control--bigger')) {
    onClickBigger();
  }
});
