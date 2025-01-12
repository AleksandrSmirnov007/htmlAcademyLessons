// 1.1. Неактивное состояние. При открытии страница находится в неактивном состоянии:

// На месте карты отображается серый прямоугольник.
// Форма заполнения информации об объявлении .ad-form содержит класс ad-form--disabled;
// Все интерактивные элементы формы .ad-form должны быть заблокированы с помощью атрибута disabled, добавленного на них или на их родительские блоки fieldset. Слайдер также должен быть заблокирован;
// Форма с фильтрами .map__filters заблокирована так же, как и форма .ad-form — на форму добавлен специальный класс, а на её интерактивные элементы атрибуты disabled.

const adForm = document.querySelector('.ad-form');
console.log(adForm);
// adForm.classList.add('ad-form--disabled');

// const activeFormElements = document.querySelectorAll('.ad-form__element');

// activeFormElements.forEach((element) => {
//   element.disabled = true;
// });
