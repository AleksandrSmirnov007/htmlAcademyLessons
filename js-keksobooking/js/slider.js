import { getMaxPrice, getType } from './form-variables.js';

const sliderElement = document.querySelector('.ad-form__slider');
const valueElement = document.querySelector('.ad-form__value');
const form = document.querySelector('.ad-form');
const selectType = form.querySelector('#type');

const MAX_PRICE = getMaxPrice();
console.log(MAX_PRICE);

const TYPE = getType();
console.log(TYPE);


const SLIDER_STEP = 100;
sliderElement.style.marginTop = '3px';

// Начальное значение в поле ввода нужно будет записать самостоятельно. //   непонятно зачем ведь метод valueElement.value = sliderElement.noUiSlider.get(); возвращает значение сразу и даже если будет присвоено другое зщансчение изначально, метод его исправит
valueElement.value = 4000;

const DEFAULT_TYPE = TYPE[1];
let chosenType = DEFAULT_TYPE;

function getChosenType () {
  return chosenType;
}

const updateAtribyte = () => {
  valueElement.min = chosenType.min;
  valueElement.placeholder = chosenType.min;
};

const onSelectTypeChange = () => {
  chosenType = TYPE.find((type) => type.name === selectType.value); // find()Метод Array экземпляров возвращает первый элемент в предоставленном массиве, который удовлетворяет предоставленной функции тестирования. Если никакие значения не удовлетворяют функции тестирования, возвращается undefined. Если вам нужен индекс найденного элемента в массиве, используйте findIndex().
  console.log(chosenType);
  updateSlider();
  updateAtribyte();
};

selectType.addEventListener('change', onSelectTypeChange);

const isDefault = () => chosenType == DEFAULT_TYPE;

const updateSlider = () => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: chosenType.min,
      max: MAX_PRICE,
    },
    start: valueElement.value,
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
  connect: 'lower', // Дополнительно можно указать, с какой стороны закрашивать слайдер. Например, от меньшего к большему значению.
  // Давайте разберёмся с этим самым обработчиком. Если вы обратили внимание, на предыдущих шагах в поле цена иногда попадали странные дробные числа. Чтобы этого не происходило, нужно взять форматирование в свои руки. Сперва начнём выводить в поле «Цена» обработанные значения, это первый параметр колбэка, если забыли.
  // Затем опишем методы форматирования. Метод .format.to() нужен для форматирования значения из слайдера и вывода его где-либо. Метод .format.from() нужен для форматирования значения для слайдера. Этот метод должен строго возвращать число, поэтому используем parseFloat(), и достаточно.
  // А вот с методом .format.to() нужно повозиться. Условия такие: если значение слайдера целое число, то нужно вывести его без дробной части; если значение дробное — с одним знаком после запятой. Для первого условия используем метод Number.isInteger(), он вернёт булево значение в зависимости от того, целое ли ему передано число. Например, число 7.0 метод считает целым, хотя запись дробная. Это то, что нам и нужно. А дальше дело техники. С помощью .toFixed() оставим нужное количество знаков после запятой.
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0); // если нужен вывод к примеру в процентах то можно использовать шаблонную строку return `${value.toFixed(0)} %`;
      } else{
      return value.toFixed(0);
      }
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
});

// продолжить Д/З раздел 8 (валидация формы)
export {getChosenType}
