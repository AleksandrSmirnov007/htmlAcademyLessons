// 1.1. Неактивное состояние. При открытии страница находится в неактивном состоянии:

// На месте карты отображается серый прямоугольник.
// Форма заполнения информации об объявлении .ad-form содержит класс ad-form--disabled;
// Все интерактивные элементы формы .ad-form должны быть заблокированы с помощью атрибута disabled, добавленного на них или на их родительские блоки fieldset. Слайдер также должен быть заблокирован;
// Форма с фильтрами .map__filters заблокирована так же, как и форма .ad-form — на форму добавлен специальный класс, а на её интерактивные элементы атрибуты disabled.

import {getChosenType} from './slider.js';



const form = document.querySelector('.ad-form');
const titleField = form.querySelector('#title');
const priceField = form.querySelector('#price');
const slider = form.querySelector('.ad-form__slider');

const roomNumberField = form.querySelector('#room_number');
const capaсityField = form.querySelector('#capacity');

const MAX_PRICE = 100000;

//// проверка работы экспорта переменной

form.addEventListener('click', () => {
  console.log('экспортируемая переменная')
  console.log(getChosenType());
})

const activeFormElements = document.querySelectorAll('.ad-form__element');
console.log();


const onInactiveForm  = () => {
  form.classList.add('ad-form--disabled');
  activeFormElements.forEach((element) => {
    element.disabled = true;
  });
}

const onActiveForm = () => {
  form.classList.remove('ad-form--disabled');
  activeFormElements.forEach((element) => {
    element.disabled = false;
  });
}

onInactiveForm();
onActiveForm();

const pristine = new Pristine(form, {
  // class of the parent element where the error/success class is added
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  // class of the parent element where error text element is appended
  errorTextParent: 'ad-form__element',
  // type of element to create for the error text
  errorTextTag: 'div',
  // class of the error text element
  errorTextClass: 'ad-form__error'
});

form.addEventListener('submit', function (evt) {
  evt.preventDefault();
  console.log(titleField.value);
  // check if the form is valid
  const isValid = pristine.validate(); // returns true or false
  if (isValid) {
    console.log('форма заполнена правильно можно отправлять');
  } else {
    console.log('форма заполнена неправильно!');
  }
});

// Чтобы описать валидации в JavaScript, нужно вызвать метод .addValidator(). // Метод принимает несколько аргументов. Первый — элемент формы, который мы хотим валидировать. // Давайте реализуем ту же валидацию поля ввода имени питомца, но уже через JavaScript. Для этого найдём поле через .querySelector() и передадим Pristine. // Вторым аргументом в .addValidator() нужно передать функцию проверки. Можно передавать по месту, но удобнее объявить функцию выше и передать по ссылке. Назовём её validateNickname. // Функция проверки обязательно должна возвращать true или false, в зависимости от того, валидно ли поле. // Pristine будет вызывать функцию проверки каждый раз, когда потребуется провалидировать форму. Первым параметром будет передано актуальное значение поля. // Третьим аргументом нужно передать сообщение об ошибке. // Попробуйте теперь отправить форму, нажав кнопку «Заказать». // Если поле с именем пустое, или имя короче двух символов, или длиннее 50 символов — мы увидим ошибку. // добавляем валидатор к полю

const validateTitleLength = (value) => {
  if(value.length < 100) {
    console.log('правильное содержимое');
    return true;
  }
  return false;
};

// // pristine.addValidator(nameOrElem, handler, errorMessage, priority, halt);
// // priority - Приоритет функции валидации. Чем выше значение, тем раньше она вызывается при наличии нескольких валидаторов для одного поля. по умолчанию 1
// // halt - Останавливать ли проверку текущего поля после этой проверки. Если true после проверки текущего валидатора остальные валидаторы игнорируются для текущего поля. по умолчанию false
pristine.addValidator(
  titleField,
  validateTitleLength,
  'Максимальная длинна 100 символов',
);
//даные атрибута из  html ( data-pristine-maxlength-message="Максимальная длина 100 символов" ) почему-то не показываются при достижении длинны строки в 100 символов поэтому я добавил к этому полю валидатор в JS

const isPriceMinValid = () => {
  const chosenType = getChosenType(); // экспортируем переменную из модуля slider.js
  return priceField.value >= chosenType.min;
};

const isPriceValid = () => {
  if (
    priceField.value
    && priceField.value <= MAX_PRICE
    && isPriceMinValid()
  ) {
    return true;
  }
  return false;
}

const onErrorSliderHide = () => {
  if (isPriceValid()) {
    slider.style.display = 'block';
    console.log('слайдер появился')
  } else {
    slider.style.display = 'none';
    console.log('слайдер исчез');
  }
}

priceField.addEventListener('input', onErrorSliderHide);

pristine.addValidator(
  priceField,
  isPriceMinValid,
  'Маловато',
);
