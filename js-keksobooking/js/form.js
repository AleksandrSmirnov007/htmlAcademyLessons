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

// const validateTitle = () => {
//   if(!titleField.value) {
//     return false;
//   }
//   if(titleField.value.length >= 30 && titleField.value.length <= 100) {
//     console.log('правильное содержимое');
//     return true;
//   }
//   return false;
// };


// const validateTitleTrue = (value) => {
//   if(value) {
//     return false;
//   }
//   return true
// }

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


// можно добавить еще проверок на одно поле (главное что бы суловия не пересекались)
// const validateTitleLength2 = (value) => {
//   if(value.length > 50 && value.length < 100) {
//     console.log('НЕ правильное содержимое');
//     return false;
//   }
//   return true;
// };

// pristine.addValidator(
//   titleField,
//   validateTitleLength2,
//   'Максимальная длинна 50 символов',
// );




// const validatePriceMax = (value) => {
//   if(value <= 100000) {
//     console.log('правильное содержимое');
//     slider.style.display = 'block';
//     return true;
//   }
//   slider.style.display = 'none';
//   return false;
// };



// pristine.addValidator(
//   priceField,
//   validatePriceMax,
//   'Максимально: 100000',
// );


// убрать в функцию
// при ошибке ввода (вручную) слайдер убирается что бы было место для вывода ошибки

const onErrorSliderHide = () => {
  if (priceField.value && priceField.value <= MAX_PRICE) {
    slider.style.display = 'block';
    console.log('слайдер появился')
  } else {
    slider.style.display = 'none';
    console.log('слайдер исчез');
  }
}

priceField.addEventListener('input', onErrorSliderHide);

// const validatePriceRequired = (value) => {
  //   if(value) {
  //     console.log('правильное содержимое');
  //     console.log(value);
  //     slider.style.display = 'block';
  //     return true;
  //   }
  //   if (value === ''){
  //   slider.style.display = 'none';
  //   console.log('ytправильное содержимо');
  //   return false;
  //   }
  // };

  // pristine.addValidator(
  //   priceField,
  //   validatePriceRequired,
  //   'Обязательное поле',
  // );


  // 1 комната — «для 1 гостя»;
// 2 комнаты — «для 2 гостей» или «для 1 гостя»;
// 3 комнаты — «для 3 гостей», «для 2 гостей» или «для 1 гостя»;
// 100 комнат — «не для гостей».


// const validateCapasity = () => {
//   if(roomNumberField.value == 1 && capaсityField.value != 1) {
//     return false
//   }
//   return true
// }

// pristine.addValidator(
//   capaсityField,
//   validateCapasity,
//   '1 комната — «для 1 гостя»',
// );






// let pristineMessage = '1 комната — «для 1 гостя»';

// const capacityValidate = () => {
//   if (roomNumberField.value == 1) {
//     pristineMessage = '1 комната — «для 1 гостя»';
//   }

//   if (roomNumberField.value == 2) {
//     pristineMessage = '2 комнаты — «для 2 гостей» или «для 1 гостя»';
//   }

//   if (roomNumberField.value == 3) {
//     pristineMessage = '3 комнаты — «для 3 гостей», «для 2 гостей» или «для 1 гостя»';
//   }

//   if (roomNumberField.value == 100) {
//     pristineMessage = '100 комнат — «не для гостей»';
//   }

//   console.log(pristineMessage);
// }


// form.addEventListener('change', (evt) => {
//   console.log(evt.target);
//   if (evt.target.id === 'capacity') {
//     console.log('выбрана капасити');
//     capacityValidate();
//   }

//   const validateCapasity = () => {
//     return false;
//   }

//   pristine.addValidator(
//     capaсityField,
//     validateCapasity,
//     pristineMessage,
//   );
// });

