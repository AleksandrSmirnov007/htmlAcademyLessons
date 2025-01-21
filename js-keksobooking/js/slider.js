const sliderElement = document.querySelector('.ad-form__slider');
const valueElement = document.querySelector('.ad-form__value');
const form = document.querySelector('.ad-form');
const selectType = form.querySelector('#type');
console.log(selectType);

sliderElement.style.marginTop = '3px';

// Начальное значение в поле ввода нужно будет записать самостоятельно. //   непонятно зачем ведь метод valueElement.value = sliderElement.noUiSlider.get(); возвращает значение сразу и даже если будет присвоено другое зщансчение изначально, метод его исправит
valueElement.value = 4000;

const specialElement = document.querySelector('.level-form__special');


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

let currentType = 'any';

selectType.addEventListener('change', () => {
  currentType = selectType.value;
  console.log(currentType);
});



noUiSlider.create(sliderElement, {
  range: {
    min: 100,
    max: 100000,
  },
  step: 100,
  start: 5000,
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
