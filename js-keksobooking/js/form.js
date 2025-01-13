// 1.1. Неактивное состояние. При открытии страница находится в неактивном состоянии:

// На месте карты отображается серый прямоугольник.
// Форма заполнения информации об объявлении .ad-form содержит класс ad-form--disabled;
// Все интерактивные элементы формы .ad-form должны быть заблокированы с помощью атрибута disabled, добавленного на них или на их родительские блоки fieldset. Слайдер также должен быть заблокирован;
// Форма с фильтрами .map__filters заблокирована так же, как и форма .ad-form — на форму добавлен специальный класс, а на её интерактивные элементы атрибуты disabled.

const adForm = document.querySelector('.ad-form');

const activeFormElements = document.querySelectorAll('.ad-form__element');
console.log(adForm);

const onInactiveForm  = () => {
  adForm.classList.add('ad-form--disabled');
  activeFormElements.forEach((element) => {
    element.disabled = true;
  });
}

const onActiveForm = () => {
  adForm.classList.remove('ad-form--disabled');
  activeFormElements.forEach((element) => {
    element.disabled = false;
  });
}

onInactiveForm();
onActiveForm();
