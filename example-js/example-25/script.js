
const form = document.querySelector('.form-one');
const input = form.querySelector('.input-one');
const messageText = form.querySelector('.message__text');

const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
console.log(re.test('#Хештег'));


// создаем функцию проверки
const isValidCheck = (value) => {
  const isValid = re.test(value);

  if(isValid) {
    messageText.innerHTML = 'Правильно';

    messageText.classList.remove('red');
    messageText.classList.add('green');

  } else {
    messageText.innerHTML = 'Неправильно';

    messageText.classList.remove('green');
    messageText.classList.add('red');
  }
};



form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  console.log('Поле проверяется');
// создаем переменную в момент нажатия кнопки формы проверить и кладем туда значение поля в этот момент
  const fieldValue = input.value;
  console.log('проверка поля на правильность:');
  console.log(re.test(fieldValue));
// запускаем функцию проверки содержимого поля и вывода сообщения и его окрашивания
  isValidCheck(fieldValue);
})

