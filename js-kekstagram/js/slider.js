console.log('upload-slider is working');
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
const image = document.querySelector('.img-upload__preview img');
const sliderElement = document.querySelector('.effect-level__slider');
const effectLevel = document.querySelector('.effect-level__value');
const form = document.querySelector('.img-upload__form');

// Для разработки открытие скрытого поля
// effectLevel.style.display = 'inline-block';
// effectLevel.style.color = 'black';
////////////

const EFFECTS = [
  {
    name: 'none',
    min: 0,
    max: 100,
    step: 1,
  },

  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },

  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },

  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },

  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },

  {
    name: 'heat',
    style: 'brightness',
    min: 0,
    max: 3,
    step: 0.1,
    unit: '',
  },
];

const DEFAULT_EFFECT = EFFECTS[0];
let chosenEffect = DEFAULT_EFFECT;

const isDefault = () => chosenEffect == DEFAULT_EFFECT;


const updateSlider = () => {
  sliderElement.classList.remove('hidden');

  sliderElement.noUiSlider.updateOptions({
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max,
    },
    step: chosenEffect.step,
    start: chosenEffect.max,
  }
  );

  if(isDefault()) {
    sliderElement.classList.add('hidden');
  }
};


const onFormChange = (evt) => {
  if(!evt.target.classList.contains('effects__radio')) {
    return; // если цель клика не содержит класс effects__radio то верни "ничего" и просто заверши функцию и выполняй следующий
  }
  chosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value); // find()Метод Array экземпляров возвращает первый элемент в предоставленном массиве, который удовлетворяет предоставленной функции тестирования. Если никакие значения не удовлетворяют функции тестирования, возвращается undefined. Если вам нужен индекс найденного элемента в массиве, используйте findIndex().
  updateSlider();
  console.log(chosenEffect);
}

noUiSlider.create(sliderElement, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  step: DEFAULT_EFFECT.step,
  start: DEFAULT_EFFECT.max,
  connect: 'lower',
});
updateSlider();

// 'элемент бегунка слайдера появляется только после создания библиотекой слайдера
const noUiHandle = document.querySelector('.noUi-handle');


// в архиве проекта нет этого кода но радиус бегунку добавляется в крайних положениях
const addRadiusHandle = (value) => {
  // модификаторы классов для ползунка в css = = = =   .noUi-handle--min для сгругления левой части,  noUi-handle--max для скругления правой части
  if (value == chosenEffect.min) {
    noUiHandle.classList.add('noUi-handle--min');
  } else {
    noUiHandle.classList.remove('noUi-handle--min');
  }

  if (value == chosenEffect.max) {
    noUiHandle.classList.add('noUi-handle--max');
  } else {
    noUiHandle.classList.remove('noUi-handle--max');
  }
};

const onSliderUpdate = () => {
  // похоже на блок подготовки к значению фильтра none (оригинал)
  image.style.filter = ''; // обнуляем фильр в архиве проекта так написано, хотя не пойму зачем постоянно при движении бегунка обновлять фильтр
  image.className = '' // удаляем все классы ранее хотя тоже через чур часто ведь классы меняются только при выборе эффекта зачем их чистить имеено в этом месте при каждом перемещении ползунка
  effectLevel.value = ''; // удаляем значение поля и каждый раз перезаписываем новое (ну наверно актуально)
  if(isDefault()) {
    return; // chosenEffect == DEFAULT_EFFECT; завершит выполнение и выйдет из функции
  }

  console.log(window.getComputedStyle(image).getPropertyValue('filter'));
  const sliderValue = sliderElement.noUiSlider.get();
  image.style.filter = `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
  effectLevel.value = sliderValue;

  addRadiusHandle(effectLevel.value);
};

const resetSlider = () => {
  image.className = '';
  image.style.filter = 'none';
};

form.addEventListener('change', onFormChange);
sliderElement.noUiSlider.on('update', onSliderUpdate);

export {resetSlider};




