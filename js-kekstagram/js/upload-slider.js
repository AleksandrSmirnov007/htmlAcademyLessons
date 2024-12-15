console.log('upload-slider is working');
// Для эффекта «Оригинал» CSS-стили filter удаляются.
// Для эффекта «Хром» — filter: grayscale(0..1) с шагом 0.1;
// Для эффекта «Сепия» — filter: sepia(0..1) с шагом 0.1;
// Для эффекта «Марвин» — filter: invert(0..100%) с шагом 1%;
// Для эффекта «Фобос» — filter: blur(0..3px) с шагом 0.1px;
// Для эффекта «Зной» — filter: brightness(1..3) с шагом 0.1;

const FILTERS = [
  {
    name: 'none',
    style: 'none',
    min: 0,
    max: 1,
    step: 1,
    unit: '',
  },

  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    start: 1,
    unit: '',
  },

  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    start: 1,
    unit: '',
  },

  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    start: 100,
    unit: '%',
  },

  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    start: 3,
    unit: 'px',
  },

  {
    name: 'heat',
    style: 'brightness',
    min: 0,
    max: 3,
    step: 0.1,
    start: 3,
    unit: '',
  },
];

const FILTERS_INDEX_MAP = [
  'none', 'chrome', 'sepia', 'marvin', 'phobos', 'heat',
];

const imgUploadPreview = document.querySelector('.img-upload__preview').querySelector('img');
const effectLevelFieldset = document.querySelector('.effect-level');
const sliderElement = effectLevelFieldset.querySelector('.effect-level__slider');
const valueElement = effectLevelFieldset.querySelector('.effect-level__value');
const effectList = document.querySelector('.effects__list');

let CURRENT_FILTER = 'none';
let filterIndex = 0;

// Для разработки открытие скрытого поля
// valueElement.style.display = 'inline-block';
// valueElement.style.color = 'black';
////////////

effectLevelFieldset.classList.add('hidden');

const effectsList = document.querySelector('.effects__list');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  step: 1,
  start: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0); // если нужен вывод к примеру в процентах то можно использовать шаблонную строку return `${value.toFixed(0)} %`;
      } else{
      return value.toFixed(1);
      }
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});


// 'элемент бегунка слайдера появляется только после создания библиотекой слайдера
const noUiHandle = document.querySelector('.noUi-handle');

console.log(noUiHandle);

sliderElement.noUiSlider.on('update', () => {
// модификаторы классов для ползунка в css = = = =   .noUi-handle--min для сгругления левой части,  noUi-handle--max для скругления правой части
  valueElement.value = sliderElement.noUiSlider.get();
  if (valueElement.value == FILTERS[filterIndex].min) {
    noUiHandle.classList.add('noUi-handle--min');
  } else {
    noUiHandle.classList.remove('noUi-handle--min');
  }

  if (valueElement.value == FILTERS[filterIndex].max) {
    noUiHandle.classList.add('noUi-handle--max');
  } else {
    noUiHandle.classList.remove('noUi-handle--max');
  }

  const unit =  FILTERS[filterIndex].unit;
  let filterCssValue = `${FILTERS[filterIndex].style}(${valueElement.value}${unit})`;
  imgUploadPreview.style.filter = filterCssValue;
  const style = window.getComputedStyle(imgUploadPreview);
  const filter = style.getPropertyValue('filter');

});

const findFilterIndex = (filter) => {
  for (let i = 0;  i < FILTERS_INDEX_MAP.length; i++) {
    if (FILTERS_INDEX_MAP[i] === filter) {
      return i;
    }
  }
}

effectList.addEventListener('change', (evt) => {

  CURRENT_FILTER = evt.target.value;  // забираем содержимое value от input type='radio' на который кликнули

  if(CURRENT_FILTER === 'none'){
    effectLevelFieldset.classList.add('hidden');
  } else {
    effectLevelFieldset.classList.remove('hidden');
  }
  imgUploadPreview.className = ''; // присваиваем имени класса пустую строку тем самым удаляем все классы если и был уже присвоен клас другого эффекта он удалится
  imgUploadPreview.classList.add(`effects__preview--${CURRENT_FILTER}`); // добавляем неоходимый класс методом составления шаблонной строки и добавляя имя фильра

  filterIndex = findFilterIndex(CURRENT_FILTER);

  sliderElement.noUiSlider.updateOptions({
    range: {
      min: FILTERS[filterIndex].min,
      max: FILTERS[filterIndex].max,
    },
    step: FILTERS[filterIndex].step,
    start: FILTERS[filterIndex].start,
  }
  );
});



// sliderElement.noUiSlider.on('update', () => {
//   valueElement.value = sliderElement.noUiSlider.get();
// });







// 2.2. Наложение эффекта на изображение:

// По умолчанию должен быть выбран эффект «Оригинал».
// На изображение может накладываться только один эффект.
// При смене эффекта, выбором одного из значений среди радиокнопок .effects__radio, добавить картинке внутри .img-upload__preview CSS-класс, соответствующий эффекту. Например, если выбран эффект .effect-chrome, изображению нужно добавить класс effects__preview--chrome.
// Интенсивность эффекта регулируется перемещением ползунка в слайдере. Слайдер реализуется сторонней библиотекой для реализации слайдеров noUiSlider. Уровень эффекта записывается в поле .effect-level__value. При изменении уровня интенсивности эффекта (предоставляется API слайдера), CSS-стили картинки внутри .img-upload__preview обновляются следующим образом:
// Для эффекта «Хром» — filter: grayscale(0..1) с шагом 0.1;
// Для эффекта «Сепия» — filter: sepia(0..1) с шагом 0.1;
// Для эффекта «Марвин» — filter: invert(0..100%) с шагом 1%;
// Для эффекта «Фобос» — filter: blur(0..3px) с шагом 0.1px;
// Для эффекта «Зной» — filter: brightness(1..3) с шагом 0.1;
// Для эффекта «Оригинал» CSS-стили filter удаляются.
// При выборе эффекта «Оригинал» слайдер скрывается.
// При переключении эффектов, уровень насыщенности сбрасывается до начального значения (100%): слайдер, CSS-стиль изображения и значение поля должны обновляться.
