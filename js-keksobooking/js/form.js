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

const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'div',
  errorTextClass: 'ad-form__error'
});

const validateTitleLength = (value) => value.length < 100;

pristine.addValidator(
  titleField,
  validateTitleLength,
  'Максимальная длинна 100 символов',
);

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
  return value && value >= minPrice;
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
  const isPriceValid = pristine.validate(priceField);
  sliderHide(isPriceValid);
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
  sliderHide(isPriceValid);
  updatePriceAtribytes();
};

const ROOM_CAPACITY = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0'],
};

const roomsValidate = (val) => {
  const currentCapacity = capacityField.value;
  const validCapacityArray = ROOM_CAPACITY[val];
  const isValid = validCapacityArray.some((validCapacity) => validCapacity === currentCapacity);
  return isValid;
};

const ROOMS_ERROR_MESSAGE_MAP = {
  '1': '1 комната для 1 гостя',
  '2': '2 комнаты для 1, 2 гостей',
  '3': '3 комнаты для 1, 2, 3 гостей',
  '100': '100 комнат не для гостей',
}

const roomsErrorMessage = () => {
  const rooms = roomsField.value;
  return ROOMS_ERROR_MESSAGE_MAP[rooms];
}

pristine.addValidator(
  roomsField,
  roomsValidate,
  roomsErrorMessage
);

pristine.validate(roomsField);

const onCapacityFieldChange = () => {
  pristine.validate(roomsField);
};

const capacityValidate = (val) => {
  const currentCapacity = val;
  const validCapasityArray = ROOM_CAPACITY[roomsField.value];
  const isValid = validCapasityArray.some((validCapacity) => validCapacity === currentCapacity);
  return isValid;
};

const CAPACITY_ERROR_MESSAGE_MAP = {
  '1': 'для 1 гостя 1 комната',
  '2': 'для 1, 2 гостей 2 комнаты',
  '3': 'для 1, 2, 3 гостей 3 комнаты',
  '0': 'не для гостей 100 комнат',
}

const capacityErrorMessage = () => {
  const capacity = capacityField.value;
  return CAPACITY_ERROR_MESSAGE_MAP[capacity];
}

pristine.addValidator(
  capacityField,
  capacityValidate,
  capacityErrorMessage
);

pristine.validate(capacityField);

const onRoomsFieldChange = () => {
  pristine.validate(capacityField);
};

const onTimeinFieldChange = (evt) => {
  timeoutField.value = evt.target.value;
};

const onTimeoutFieldChange = (evt) => {
  timeinField.value = evt.target.value;
};

form.addEventListener('change', (evt) => {
  switch (evt.target) {
    case fileChooserAvatar:
      loadPreviewAvatar();
      break;
    case typeField:
      sliderChosenTypeUpdate();
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

addressField.readOnly = true;

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
  form.reset();
  const type = typeField.value;
  priceField.value = MIN_PRICE_TYPE[type];
  previewPhotoClear();
  previewAvatarDefault();
};

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  onFormReset();
});

const setOnFormSubmit = (cb) => {
  form.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      await cb(new FormData(form));
      unBlockSubmitButton();
      pristine.validate();
    } else {
      showFailMessage('Неправильно заполнены данные объявления');
    }
  });
};

export {
  onActiveForm,
  updateAddress,
  setOnFormSubmit,
  onFormReset
};
