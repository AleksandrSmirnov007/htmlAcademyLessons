console.log('form-upload.js is working');

const formUpload = document.querySelector('.img-upload__form');
const imgUploadOverlay = formUpload.querySelector('.img-upload__overlay');
const imgUploadInput = formUpload.querySelector('.img-upload__input');
const uploadCancel = formUpload.querySelector('.img-upload__cancel');
const body = document.querySelector('body');

const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;


const addSubmitDisabled = () => {
  const submit = formUpload.querySelector("input[type=submit], button[type=submit]");
  submit.disabled = true;
}

const hideUploadForm = () => {
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeyDownForm);
  formUpload.removeEventListener('submit', addSubmitDisabled);

  imgUploadInput.value = ''; // Обратите внимание, что при закрытии формы дополнительно необходимо сбрасывать значение поля выбора файла #upload-file. В принципе, всё будет работать, если при повторной попытке загрузить в поле другую фотографию. Но! Событие change не сработает, если пользователь попробует загрузить ту же фотографию, а значит окно с формой не отобразится, что будет нарушением техзадания. Значение других полей формы также нужно сбрасывать.
}

function onEscKeyDownForm(evt) {
  if(evt.key === 'Escape') {
    evt.preventDefault();
    hideUploadForm();
  }
};

const addListenerUploadCancel = () => uploadCancel.addEventListener('click', hideUploadForm);


formUpload.addEventListener('submit', addSubmitDisabled);


const showUploadForm = () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  addListenerUploadCancel();
  document.addEventListener('keydown', onEscKeyDownForm);
  formUpload.addEventListener('submit', addSubmitDisabled);
}

showUploadForm(); // для отладки откроем форму

const addListenerUploadInput = () => imgUploadInput.addEventListener('change', showUploadForm);


// const pristine = new Pristine(formUpload, {
//   classTo: 'text__description-label',
//   errorTextParrent: 'text__description-label',
//   errorTextClass: 'text__error-text',
// });



// Работа оператора new с конструктором:

// При встрече оператора new интерпретатор создаёт новый пустой объект. 1
// Затем он вызывает конструктор и передаёт ему новый созданный объект в качестве значения ключевого слова this. 1
// Внутри конструктора происходит инициализация свойств вновь созданного объекта. 1
// После того, как объект создан и инициализирован, оператор new возвращает созданный объект. 1
// Чтобы отличать в коде обычные функции от конструкторов, имена конструкторов обычно начинают с заглавной буквы. 1


// убираю атрибут pattern у поля для хештега потому, что ломается валидация черезе pristine нужно это сделать перед парсингом по html  pristinne
formUpload.querySelector('#hashtags').removeAttribute('pattern');

const pristine = new Pristine(formUpload, {
  // class of the parent element where the error/success class is added
  classTo: 'form__item',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  // class of the parent element where error text element is appended
  errorTextParent: 'form__item',
  // type of element to create for the error text
  errorTextTag: 'div',
  // class of the error text element
  errorTextClass: 'form__error'
});

function validateHashtags (value) {
  // поле Хештег не обязательное в случае пустой строки вернем true
  if (value === '') {
    return true;
  }

  const hashtagsArray = value.split(' ');

  // проверяем на соответствие value регуляроному выражению
  return re.test(hashtagsArray[0]); // костыль старвнивает тоько первый элемент массива а нужно что б сравнивало каждый и выносило folse если хотя бы оин не соответсвует

  // проверить каждый элемент массива на соответсвие регулярному выражению

  // разбиваем строку массив подстрок Методом split()
  // Метод split() в JavaScript делит строку на список подстрок и возвращает их в виде массива. // Синтаксис: str.split(separator, limit). // Параметры: // separator (необязательно) — шаблон (строка или регулярное выражение), описывающий, где должно происходить каждое разделение. // limit (необязательно) — неотрицательное целое число, ограничивающее количество частей, на которые нужно разделить заданную строку.
  // const hashtags = value.split(' ');
};


// Чтобы описать валидации в JavaScript, нужно вызвать метод .addValidator().
// Метод принимает несколько аргументов. Первый — элемент формы, который мы хотим валидировать.
// Давайте реализуем ту же валидацию поля ввода имени питомца, но уже через JavaScript. Для этого найдём поле через .querySelector() и передадим Pristine.

// Вторым аргументом в .addValidator() нужно передать функцию проверки. Можно передавать по месту, но удобнее объявить функцию выше и передать по ссылке. Назовём её validateNickname.
// Функция проверки обязательно должна возвращать true или false, в зависимости от того, валидно ли поле.
// Pristine будет вызывать функцию проверки каждый раз, когда потребуется провалидировать форму. Первым параметром будет передано актуальное значение поля.


// Третьим аргументом нужно передать сообщение об ошибке.
// Попробуйте теперь отправить форму, нажав кнопку «Заказать».
// Если поле с именем пустое, или имя короче двух символов, или длиннее 50 символов — мы увидим ошибку.

// добавляем валидатор к полю
pristine.addValidator(
  formUpload.querySelector('#hashtags'),
  validateHashtags,
  'Неправильно введены данные в поле Хештег'
);


formUpload.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    console.log('Можно отправлять');
  } else {
    console.log('Форма невалидна');
  }
});






export {addListenerUploadInput};
