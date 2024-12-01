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

  imgUploadInput.value = ''; // Нужно обратить внимание, что при закрытии формы дополнительно необходимо сбрасывать значение поля выбора файла #upload-file. В принципе, всё будет работать, если при повторной попытке загрузить в поле другую фотографию. Но! Событие change не сработает, если пользователь попробует загрузить ту же фотографию, а значит окно с формой не отобразится, что будет нарушением техзадания. Значение других полей формы также нужно сбрасывать.
}

function onEscKeyDownForm(evt) {
  if(evt.key === 'Escape') {
    evt.preventDefault();
// добавил в разметку.not-respond-esc класс для элементов если на них находится фокус то клавиша ескейп не должна закрывать форму
    if (document.activeElement.classList.contains('not-respond-esc')) {
      evt.stopPropagation() // в этой строке может ничего и не быть, то есть тут работает пустая строка как инструкция ничего не делать, но в условии сказано применить этот метод evt.stopPropagation() вобщем сомнительно
    } else {
      hideUploadForm();
    }
  }
};

const addListenerUploadCancel = () => uploadCancel.addEventListener('click', hideUploadForm);

const showUploadForm = () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  addListenerUploadCancel();
  document.addEventListener('keydown', onEscKeyDownForm);
  // formUpload.addEventListener('submit', addSubmitDisabled); //
  formUpload.addEventListener('submit', addSubmitformInstruction);
}


// для отладки откроем форму
// showUploadForm();
// Открывая форму этим методом нужно понимать что если при стандартном открытии формы (то есть через добавление файла) в поле input c классом img-upload__input это поле будет содержать value с адресом файла для добавления, тем самым поле будет удолетворять атрибуту requared и при всех прочих валидных полях  в const isValid = pristine.validate() будет передано true, Но если воспользуемся для оотладки простым вызовом функции showUploadForm(), то форма откроется но поле загрузки файла будет пустым и в const isValid = pristine.validate() будет передано false и так как поле загрузки не явно то будет непонятно почему форма невалидна, хотя видимые поля правильно заполнены

const addListenerUploadInput = () => imgUploadInput.addEventListener('change', showUploadForm);

// Работа оператора new с конструктором:
// При встрече оператора new интерпретатор создаёт новый пустой объект. 1
// Затем он вызывает конструктор и передаёт ему новый созданный объект в качестве значения ключевого слова this. 1
// Внутри конструктора происходит инициализация свойств вновь созданного объекта. 1
// После того, как объект создан и инициализирован, оператор new возвращает созданный объект. 1
// Чтобы отличать в коде обычные функции от конструкторов, имена конструкторов обычно начинают с заглавной буквы. 1


// убираю атрибут pattern у поля для хештега потому, что ломается валидация через pristine нужно это сделать перед тем как pristine пройдет по formUpload и сделает правила по атрибутам в разметке
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


// проверить каждый элемент массива на соответсвие регулярному выражению

// разбиваем строку массив подстрок Методом split()
// Метод split() в JavaScript делит строку на список подстрок и возвращает их в виде массива. // Синтаксис: str.split(separator, limit). // Параметры: // separator (необязательно) — шаблон (строка или регулярное выражение), описывающий, где должно происходить каждое разделение. // limit (необязательно) — неотрицательное целое число, ограничивающее количество частей, на которые нужно разделить заданную строку.

// в value будет передаваться строка  взятая из введенного набором текста в поле хештег


// function validateHashtags (value) {
//   return true;
// };



function validateHashtags (value) {
  // поле Хештег не обязательное в случае передачи в value пустой строки вернем true
  let isValidHashtags = true; // создадим переменную в которой будет храниться валидность зададим true если при проверке массива не будет  (так для pristine для определения валидности нужны булевы значения), а далее напишем код при котором если элемнт массива не соответсвует регулярному выражению то вписываем в isValidHashtags = false, а если элемент соответсвует регулярному выражению то ничего не делаем

  if (value === '') {
    return true;
  }

  const hashtagsArray = value.split(' '); // разбиваем строку на массив элементов

  if( hashtagsArray.length > 5) {
    return false;
  }
  hashtagsArray.forEach((element) => {
    // проверяем каждый  элемент на соответствие  регуляроному выражению
    if(re.test(element) === false) {
      // если элемент не соответсвует регулярному выражению то присвоим isValidHashtags = false
      isValidHashtags = false;
    }
  });
  console.log(isValidHashtags);
  return isValidHashtags;
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


function addSubmitformInstruction (evt) {
  const isValid = pristine.validate();
  if (isValid) {
    console.log('Можно отправлять данные');
    console.log('Отправляю');
    addSubmitDisabled(); // если использовать сдесь formUpload.addEventListener('submit', addSubmitDisabled); то кнопка submit отключается только по второму клику по ней, так как событие на первый клик уже будет добавлено при запуске функциии showUploadForm (функции показа формы)
  } else {
    evt.preventDefault();
    console.log(isValid);
    console.log('Форма невалидна');
  }
};


// formUpload.addEventListener('submit', (evt) => {

//   const isValid = pristine.validate();
//   if (isValid) {
//     console.log('Можно отправлять');
//     formUpload.addEventListener('submit', addSubmitDisabled);
//   } else {
//     evt.preventDefault();
//     console.log(isValid);
//     console.log('Форма невалидна');
//   }
// });


// formUpload.addEventListener('submit', addSubmitformInstruction);


export {addListenerUploadInput };
