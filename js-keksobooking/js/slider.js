const form = document.querySelector('.ad-form');
const priceField = form.querySelector('#price');
const typeField = form.querySelector('#type');
const sliderElement = form.querySelector('.ad-form__slider');

const MAX_PRICE = 100000;

const TYPE = [
  {
    name: 'bungalow',
    min: 0,
  },

  {
    name: 'flat',
    min: 1000,
  },

  {
    name: 'hotel',
    min: 3000,
  },

  {
    name: 'house',
    min: 5000,
  },

  {
    name: 'palace',
    min: 10000,
  },
];

const SLIDER_STEP = 100;
sliderElement.style.marginTop = '3px';

// Начальное значение в поле ввода нужно будет записать самостоятельно. //   непонятно зачем ведь метод priceField.value = sliderElement.noUiSlider.get(); возвращает значение сразу и даже если будет присвоено другое зщансчение изначально, метод его исправит
priceField.value = 4000;

const DEFAULT_TYPE = TYPE[1];
let chosenType = DEFAULT_TYPE;

const sliderChosenTypeUpdate = () => {
  chosenType = TYPE.find((type) => type.name === typeField.value); // find()Метод Array экземпляров возвращает первый элемент в предоставленном массиве, который удовлетворяет предоставленной функции тестирования. Если никакие значения не удовлетворяют функции тестирования, возвращается undefined. Если вам нужен индекс найденного элемента в массиве, используйте findIndex().
  updateSlider();
};

const updateSlider = () => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: chosenType.min,
      max: MAX_PRICE,
    },
    start: priceField.value,
  }
  );
};

noUiSlider.create(sliderElement, {
  range: {
    min: DEFAULT_TYPE.min,
    max: MAX_PRICE,
  },
  step: SLIDER_STEP,
  start: DEFAULT_TYPE.min,
  connect: 'lower',
  format: {
    to: function (value) {
      if (!value) {
        return '';
      }
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      } else {
      return value.toFixed(0);
      }
    },
    from: function (value) {
      if (!value) {
        return '';
      }
      return parseFloat(value);
    },
  },
});

sliderElement.noUiSlider.on('update', () => {
  priceField.value = sliderElement.noUiSlider.get();
});

export {sliderChosenTypeUpdate};
