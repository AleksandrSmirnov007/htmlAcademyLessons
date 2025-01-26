// Ранее мы разобрали, как использовать библиотеку для валидации PristineJS в простых случаях, когда достаточно расставить атрибуты в HTML. Теперь давайте рассмотрим сложные случаи, когда атрибутов недостаточно, и сперва удалим их.

const orderForm = document.querySelector('.form');


const pristine = new Pristine(orderForm, {
  classTo: 'form__item', // Элемент, на который будут добавляться классы
  errorClass: 'form__item--invalid', // Класс, обозначающий невалидное поле
  successClass: 'form__item--valid', // Класс, обозначающий валидное поле
  errorTextParent: 'form__item', // Элемент, куда будет выводиться текст с ошибкой
  errorTextTag: 'span', // Тег, который будет обрамлять текст ошибки
  errorTextClass: 'form__error' // Класс для элемента с текстом ошибки
});

orderForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
})
