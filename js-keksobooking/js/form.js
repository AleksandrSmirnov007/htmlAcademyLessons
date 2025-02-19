// 1.1. Неактивное состояние. При открытии страница находится в неактивном состоянии:
// На месте карты отображается серый прямоугольник.
// Форма заполнения информации об объявлении .ad-form содержит класс ad-form--disabled;
// Все интерактивные элементы формы .ad-form должны быть заблокированы с помощью атрибута disabled, добавленного на них или на их родительские блоки fieldset. Слайдер также должен быть заблокирован;
// Форма с фильтрами .map__filters заблокирована так же, как и форма .ad-form — на форму добавлен специальный класс, а на её интерактивные элементы атрибуты disabled.

import { sliderChosenTypeUpdate } from './slider.js';
import { showFailMessage } from './message.js'
import { loadPreviewAvatar, previewAvatarDefault } from './avatar.js';
import { loadPreviewPhoto,  previewPhotoClear } from './load-photo.js';

const form = document.querySelector('.ad-form');
const fileChooserAvatar = form.querySelector('#avatar');
const titleField = form.querySelector('#title');
const priceField = form.querySelector('#price');
const slider = form.querySelector('.ad-form__slider');
const typeField = form.querySelector('#type');
const roomsField = form.querySelector('#room_number');
const capacityField = form.querySelector('#capacity');
const timeinField = form.querySelector('#timein');
const timeoutField = form.querySelector('#timeout');
const addressField = form.querySelector('#address');
const activeFormElements = document.querySelectorAll('.ad-form__element');

const fileChooserPhoto = document.querySelector('#images');

const submitButton = form.querySelector('.ad-form__submit');
const resetButton = form.querySelector('.ad-form__reset');


// titleField.value = 'ghhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh';
// addressField.value = 'dddddddddddddddddfjjjjjjjjjjjj'
// capacityField.value = '1';

// активность и неактивность формы
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

onInactiveForm(); // форма станет неактивна сразу при загрузке страницы
// onActiveForm(); // активной форма станет почле загрузки карты

// валидация
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

const validateTitleLength = (value) => value.length < 100;

// Чтобы описать валидации в JavaScript, нужно вызвать метод .addValidator(). // Метод принимает несколько аргументов. Первый — элемент формы, который мы хотим валидировать. // Давайте реализуем ту же валидацию поля ввода имени питомца, но уже через JavaScript. Для этого найдём поле через .querySelector() и передадим Pristine. // Вторым аргументом в .addValidator() нужно передать функцию проверки. Можно передавать по месту, но удобнее объявить функцию выше и передать по ссылке. Назовём её validateNickname. // Функция проверки обязательно должна возвращать true или false, в зависимости от того, валидно ли поле. // Pristine будет вызывать функцию проверки каждый раз, когда потребуется провалидировать форму. Первым параметром будет передано актуальное значение поля. // Третьим аргументом нужно передать сообщение об ошибке. // Попробуйте теперь отправить форму, нажав кнопку «Заказать». // Если поле с именем пустое, или имя короче двух символов, или длиннее 50 символов — мы увидим ошибку. // добавляем валидатор к полю // // pristine.addValidator(nameOrElem, handler, errorMessage, priority, halt); priority - Приоритет функции валидации. Чем выше значение, тем раньше она вызывается при наличии нескольких валидаторов для одного поля. по умолчанию 1. halt - Останавливать ли проверку текущего поля после этой проверки. Если true после проверки текущего валидатора остальные валидаторы игнорируются для текущего поля. по умолчанию false

// валидация поля заголовок обьявления
pristine.addValidator(
  titleField,
  validateTitleLength,
  'Максимальная длинна 100 символов',
);
//даные атрибута из  html ( data-pristine-maxlength-message="Максимальная длина 100 символов" ) не показываются при достижении длинны строки в 100 символов, так как дальнейший ввод ограничен атрибутом тега в html поэтому я добавил к этому полю валидатор в JS

// // валидация поля цена
const MIN_PRICE_TYPE = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};

const sliderHide = (boolean) => {
  if (boolean) {
    slider.style.display = 'block';
  } else {
    slider.style.display = 'none';
  }
}

const validatePrice = (value) => {
  const minPrice = MIN_PRICE_TYPE[typeField.value];
  return value && value >= minPrice; //  валидация по  value <= MAX_PRICE обеспечится за счет атрибута в html data-pristine-max-message="Максимально 100000"
};

const getTitleType = (value) => {
  let titleType;
  typeField
    .querySelectorAll('option')
    .forEach((option) => {
    if(option.value === value) {
      titleType = option.textContent;
    }
  });
  return titleType;
}

const getPriceErrorMessage = () => {
  const minPrice = MIN_PRICE_TYPE[typeField.value];
  const titleType = getTitleType(typeField.value);
  return `${titleType} от ${minPrice}`;
};

pristine.addValidator(
  priceField,
  validatePrice,
  getPriceErrorMessage,
)

const onPriceField = () => {
  const isPriceValid = pristine.validate(priceField); // это дублирует валидацию поля, но по другому результат валидации пока не получить
  sliderHide(isPriceValid); // если поле цены невалидно то слайдер скрывается
};

priceField.addEventListener('input', onPriceField);

const updatePriceAtribytes = () => {
  const minPrice = MIN_PRICE_TYPE[typeField.value];
  priceField.placeholder = minPrice;
  priceField.min = minPrice;
};

updatePriceAtribytes();

const onTypeField = () => {
  const isPriceValid = pristine.validate(priceField);
  sliderHide(isPriceValid); // если поле цены невалидно то слайдер скрывается
  updatePriceAtribytes();
};
// typeField.addEventListener('change', onTypeField);

// валидация соответсвия полей количества комнат и количество гостей // 3.6. Поле «Количество комнат» синхронизировано с полем «Количество мест» таким образом, что при выборе количества комнат вводятся ограничения на допустимые варианты выбора количества гостей: 1 комната — «для 1 гостя»; 2 комнаты — «для 2 гостей» или «для 1 гостя»; 3 комнаты — «для 3 гостей», «для 2 гостей» или «для 1 гостя»; 100 комнат — «не для гостей».
const ROOM_CAPACITY = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0'],
};

// валидация roomsField
const roomsValidate = (val) => { // в параметр val pristine передаст значение поля при использовании функции в pristine.addvalidatior(поле, функция проверки, текст ошибки )
  const currentCapacity = capacityField.value;
  const validCapacityArray = ROOM_CAPACITY[val];
  const isValid = validCapacityArray.some((validCapacity) => validCapacity === currentCapacity);
  return isValid;
};

const roomsErrorMessage = () => {
  const rooms = roomsField.value;
  let message;
  switch(rooms) {
    case '1':
      message = '1 комната для 1 гостя'
      break;
    case '2':
      message = '2 комнаты для 1, 2 гостей'
      break;
    case '3':
      message = '3 комнаты для 1, 2, 3 гостей'
      break;
    case '100':
      message = '100 комнат не для гостей'
      break;
  }
  return message;
};

pristine.addValidator(
  roomsField,
  roomsValidate,
  roomsErrorMessage
);

pristine.validate(roomsField); // запустим валидацию при загрузке страницы так как примеру у нас выбраны не соответсвующие опции в селектах

const onCapacityFieldChange = () => {
  pristine.validate(roomsField);
};
// capacityField.addEventListener('change', onCapacityFieldChange ); // проверка при обновлении поля capacity

// валидация capacityField
const capacityValidate = (val) => { // в параметр val pristine передаст значение поля при использовании функции в pristine.addvalidatior(поле, функция проверки, текст ошибки )
  const currentCapacity = val;
  const validCapasityArray = ROOM_CAPACITY[roomsField.value];
  const isValid = validCapasityArray.some((validCapacity) => validCapacity === currentCapacity);
  return isValid;
};

const capacityErrorMessage = () => {
  const capacity = capacityField.value;
  let message;
  switch(capacity) {
    case '1':
      message = 'для 1 гостя 1 комната'
      break;
    case '2':
      message = 'для 1, 2 гостей 2 комнаты'
      break;
    case '3':
      message = 'для 1, 2, 3 гостей 3 комнаты'
      break;
    case '0':
      message = 'не для гостей 100 комнат'
      break;
  }
  return message;
};

pristine.addValidator(
  capacityField,
  capacityValidate,
  capacityErrorMessage
);

pristine.validate(capacityField); // запустим валидацию при загрузке страницы, так как примеру у нас выбраны не соответсвующие опции в селектах

const onRoomsFieldChange = () => {
  pristine.validate(capacityField);
};
// roomsField.addEventListener('change', onRoomsFieldChange);

//  Поля «Время заезда» и «Время выезда» синхронизированы: при изменении значения одного поля во втором выделяется соответствующее ему значение. Например, если время заезда указано «после 14», то время выезда будет равно «до 14» и наоборот.

const onTimeinFieldChange = (evt) => {
  timeoutField.value = evt.target.value;
};
// timeinField.addEventListener('change', onTimeinFieldChange);

const onTimeoutFieldChange = (evt) => {
  timeinField.value = evt.target.value;
};
// timeoutField.addEventListener('change', onTimeoutFieldChange);

//  все change обработчики по полям собираем в один обработчик change  на форму (код с добавлением обработчиков закомментрируем)

form.addEventListener('change', (evt) => {
  switch (evt.target) {
    case fileChooserAvatar:
      loadPreviewAvatar();
      break;
    case typeField:
      sliderChosenTypeUpdate(); // функция из модуля slider.js (обновление переменной  содержащей выбранный типа жилья)
      onTypeField();
      break;
    case capacityField:
      onCapacityFieldChange();
      break;
    case roomsField:
      onRoomsFieldChange();
      break;
    case timeinField:
      onTimeinFieldChange(evt);
      break;
    case timeoutField:
      onTimeoutFieldChange(evt);
      break;
    case fileChooserPhoto:
      loadPreviewPhoto();
      break;
  }
});

addressField.readOnly = true; // addressField.disabled = true; нельзя использовать так как Поле с атрибутом disabled не передаст своё содержимое при отправке формы.

const updateAddress = (value) => {
  addressField.value = value;
  pristine.validate(addressField);
};

pristine.validate(addressField);

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Отправляю...';
}

const unBlockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
}

const onFormReset = () => {
  console.log('очиcтка формы');
  form.reset();
  const type = typeField.value;
  priceField.value = MIN_PRICE_TYPE[type]; // При пустом поле при отправке поверх слойдера появляется валидация поля цены потому, что поле не редактируется но содержимое поля меняется, что бы не писать лишних проверок рациональнее задать для пользователя минимально возможное значение цены для поля, а уже при его редактировании сработает валидация.
  previewPhotoClear();
  previewAvatarDefault();
};

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault(); // отменит очистку всех полей заложенную по умолчанию, если не отменять то в конечном все данные буту очищены, через функцию onFormReset мы самостоятельно очистим форму с помошбю form.reset(), а потом присвоим полю с ценой актуальное минимальное значение цены для типа жилья, При пустом поле при отправке поверх слойдера появляется валидация поля цены потому что поле не редактируется но содержимое поля меняется, что бы не писать лишних проверок рациональнее задать для пользователя минимально возможное значение цены для поля, а уже при его редактировании работает валидация.
  onFormReset();
});

const setOnFormSubmit = (cb) => {
  form.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate(); // returns true or false
    if (isValid) {
      blockSubmitButton();
      console.log('форма заполнена правильно можно отправлять');
      await cb(new FormData(form));
      unBlockSubmitButton();
    } else {
      showFailMessage('Неправильно заполнены данные объявления');
      console.log('форма заполнена неправильно!');
    }
  });
};

export {
  onActiveForm,
  updateAddress,
  setOnFormSubmit,
  onFormReset
};
