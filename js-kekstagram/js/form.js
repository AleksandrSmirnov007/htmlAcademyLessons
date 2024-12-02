console.log('form.js is working');

const form = document.querySelector('.img-upload__form');
const overlay = form.querySelector('.img-upload__overlay');
const fileField = form.querySelector('.img-upload__input');
const cancelButton = form.querySelector('.img-upload__cancel');
const body = document.querySelector('body');

const hashtagField = form.querySelector('.text__hashtags');
const commentField = form.querySelector('.text__description');


const MAX_HASHTAG_COUNT = 5;
const MAX_HASHTAG_LENGTH = 20;
const MIN_HASHTAG_LENGTH = 2;

// regex101.com - лучший сайт для проверки регулярных выражений
// const VALID_SYMBOLS = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/; // это регулярное выражение было предложено на лайве, и оно работает и не дает инверсии, но вцелях общего развития я отрежу от него часть отвечающую за количество символов а в коде добавлю дополнительную проверку, но еще както влияет $ (конец строки) его я тоже убрал
const VALID_SYMBOLS = /^[A-Za-zА-Яа-яЁё0-9]$/;

// const UNVALID_SYMBOLS = /[^a-zA-Z0-9а-яА-ЯёЁ]/g; // в коде проекта используется такое выражение, но как я понял оно инвертирует соответвие сравниваемых т е возвращает true когда срроа не содержится в регулрновм выражении // мои " исследования" привели к тому что если знак степени  ^ (начало строки)

// убираю атрибут pattern у поля для хештега потому, что ломается валидация через pristine нужно это сделать перед тем как pristine пройдет по form и сделает правила по атрибутам в разметке
form.querySelector('#hashtags').removeAttribute('pattern');

// Работа оператора new с конструктором: // При встрече оператора new интерпретатор создаёт новый пустой объект. // Затем он вызывает конструктор и передаёт ему новый созданный объект в качестве значения ключевого слова this. // Внутри конструктора происходит инициализация свойств вновь созданного объекта. // После того, как объект создан и инициализирован, оператор new возвращает созданный объект. // Чтобы отличать в коде обычные функции от конструкторов, имена конструкторов обычно начинают с заглавной буквы. 1

const pristine = new Pristine(form, {
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

const showModal = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onEscKeyDownForm);
}

const addSubmitDisabled = () => {
  const submit = form.querySelector("input[type=submit], button[type=submit]");
  submit.disabled = true;
}

const hideModal = () => {
  form.reset(); // в архиве проекта применен такой метод reset() к форме видимо его можно так применять; // Нужно обратить внимание, что при закрытии формы дополнительно необходимо сбрасывать значение поля выбора файла #upload-file. В принципе, всё будет работать, если при повторной попытке загрузить в поле другую фотографию. Но! Событие change не сработает, если пользователь попробует загрузить ту же фотографию, а значит окно с формой не отобразится, что будет нарушением техзадания. Значение других полей формы также нужно сбрасывать.
  pristine.reset();  // в архиве проекта применен такой метод reset() к библиотеке? видимо его можно так применять;
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeyDownForm); // в архиве проекта нет  удалений обратчиков при закрытии формы я тоже убрал строчку  form.removeEventListener('submit', addSubmitDisabled);
}

// document.activeElement это способ определить како элемент находится в фокусе в данный момент
const isTextFieldFocused = () => {
  document.activeElement === hashtagField ||
  document.activeElement === commentField; // фунция вернет true если какой-либо из текстовых полей хештег или коментарий будет в фокусе
}

function onEscKeyDownForm(evt) {
  // следующие условие выполнится если будет нажата клавиша esc (это даст первому условию при выполнении true) и при вызове функции isTextFieldFocused() функция вернет false если фокус будет не на инпутах указанных в теле этой функции, но оператор НЕ переделает это в true (! — Оператор НЕ. Инверсия элемента: при false — вернёт true.) итого имеем true && true и условие выполнится (смотри ТЗ при каких условиях отменять действия при нажатии esc нужно отменить) Кстати не смотря на явный намек использовать  метод  evt.stopPropagation() в архиве проекта этот метод не применен  далее оставил свой коментарий// "в этой строке может ничего и не быть, то есть тут работает пустая строка как инструкция ничего не делать, но в условии сказано применить этот метод evt.stopPropagation() вобщем сомнительно"
  if(evt.key === 'Escape' && !isTextFieldFocused()) {
    evt.preventDefault();
    hideModal();
    }
};

const onFileInputChange = () => {
  showModal();
};

const onCanselButtonClick = () => {
  hideModal();
};

// для отладки откроем форму // showModal(); // Открывая форму этим методом нужно понимать что если при стандартном открытии формы (то есть через добавление файла) в поле input c классом img-upload__input это поле будет содержать value с адресом файла для добавления, тем самым поле будет удолетворять атрибуту requared и при всех прочих валидных полях  в const isValid = pristine.validate() будет передано true, Но если воспользуемся для оотладки простым вызовом функции showModal(), то форма откроется но поле загрузки файла будет пустым и в const isValid = pristine.validate() будет передано false и так как поле загрузки не явно то будет непонятно почему форма невалидна, хотя видимые поля правильно заполнены
// проверить каждый элемент массива на соответсвие регулярному выражению // разбиваем строку на массив подстрок Методом split() // Метод split() в JavaScript делит строку на список подстрок и возвращает их в виде массива. // Синтаксис: str.split(separator, limit). // Параметры: // separator (необязательно) — шаблон (строка или регулярное выражение), описывающий, где должно происходить каждое разделение. // limit (необязательно) — неотрицательное целое число, ограничивающее количество частей, на которые нужно разделить заданную строку. // Метод trim() значений String удаляет пробелы с обоих концов этой строки и возвращает новую строку, не изменяя исходную. // в value будет передаваться строка  взятая из введенного набором текста в поле хештег


// закончил исправление ошибок пока на этом месте не все один в один но приемлемо и все работает(чуть с большим функционалом)
// далее задача переработать функцию мою функцию validateTags по аналогии с кодом проета ее на  составляющие функции и вынести их отдельно. по спецификации pristine функция валидации должна возвращать true если поле заполнено верно и false если поле заполнено не верно

const foo = '#jjвыывывывijf';

const starstWithHash = (string) => string[0] === '#';  // ВАЖНО ИЗ-ЗА этого не работал код Стрелочные функции Использование скобок. Если тело стрелочной функции состоит из нескольких выражений или требует использования блока кода, необходимо обернуть его в фигурные скобки и явно указать оператор return, если требуется вернуть значение.

const hasValidLength = (string) =>
  string.length >= MIN_HASHTAG_LENGTH && string.length <= MAX_HASHTAG_LENGTH;

const hasValidSymbols = (string) => VALID_SYMBOLS.test(string.slice(1));

const isValidTag = (tag) => starstWithHash(tag) && hasValidLength(tag);

console.log('hasValidSymbols(foo)');
console.log(hasValidSymbols(foo));


function validateTags (value) {
  // поле Хештег не обязательное в случае передачи в value пустой строки вернем true
  let isValidHashtags = true; // создадим переменную в которой будет храниться валидность зададим true если при проверке массива не будет  (так для pristine для определения валидности нужны булевы значения), а далее напишем код при котором если элемнт массива не соответсвует регулярному выражению то вписываем в isValidHashtags = false, а если элемент соответсвует регулярному выражению то ничего не делаем

  if (value === '') {
    return true;
  }

  const hashtagsArray = value.trim().split(' '); // разбиваем строку на массив элементов
  console.log(hashtagsArray);
  const hashtagsArrayCleanSpace = [];

  hashtagsArray.forEach((element) => {
    if (element != '') {
      hashtagsArrayCleanSpace.push(element);
    }
  })

  console.log(hashtagsArrayCleanSpace);

  if( hashtagsArrayCleanSpace.length > MAX_HASHTAG_COUNT) {
    return false;
  }
  hashtagsArrayCleanSpace.forEach((element) => {
    // проверяем каждый  элемент на соответствие  регуляроному выражению
    if(VALID_SYMBOLS.test(element) === false || hasValidLength(element) === false) {
      // если элемент не соответсвует регулярному выражению то присвоим isValidHashtags = false
      isValidHashtags = false;
    }
  });
  console.log(isValidHashtags);
  return isValidHashtags;
};

// Чтобы описать валидации в JavaScript, нужно вызвать метод .addValidator(). // Метод принимает несколько аргументов. Первый — элемент формы, который мы хотим валидировать. // Давайте реализуем ту же валидацию поля ввода имени питомца, но уже через JavaScript. Для этого найдём поле через .querySelector() и передадим Pristine. // Вторым аргументом в .addValidator() нужно передать функцию проверки. Можно передавать по месту, но удобнее объявить функцию выше и передать по ссылке. Назовём её validateNickname. // Функция проверки обязательно должна возвращать true или false, в зависимости от того, валидно ли поле. // Pristine будет вызывать функцию проверки каждый раз, когда потребуется провалидировать форму. Первым параметром будет передано актуальное значение поля. // Третьим аргументом нужно передать сообщение об ошибке. // Попробуйте теперь отправить форму, нажав кнопку «Заказать». // Если поле с именем пустое, или имя короче двух символов, или длиннее 50 символов — мы увидим ошибку. // добавляем валидатор к полю



pristine.addValidator(
  form.querySelector('#hashtags'),
  validateTags,
  'Неправильно введены данные в поле Хештег'
);


function onFormSubmit (evt) {
  const isValid = pristine.validate();
  if (isValid) {
    console.log('Можно отправлять данные');
    console.log('Отправляю');
    addSubmitDisabled(); // если использовать сдесь form.addEventListener('submit', addSubmitDisabled); то кнопка submit отключается только по второму клику по ней, так как событие на первый клик уже будет добавлено при запуске функциии showModal (функции показа формы)
  } else {
    evt.preventDefault();
    console.log(isValid);
    console.log('Форма невалидна');
  }
};


fileField.addEventListener('change', onFileInputChange); // Я делая домашнее задание вынес добавление этого обработчика в отдельную функцию и экпортировал ее в файл main.js и вызывал ее там по сути это была единственная связка между файлами form.js и main.js и все работало, но в коде архива проекта файл form.js импортирован целиком, а добавление этого обработчика снесено в низ я сделал также
form.addEventListener('submit', onFormSubmit); // я добавлял это обработчик при открытии формы (чтобы убрать его призакрытии формы) но в архиве проекта он вынесен в конце файла я тоже перенес, думаю связано с тем что бы не нагружать момент нажатия на submit
cancelButton.addEventListener('click', onCanselButtonClick); // тоже добавлял этот обработчик в тело showModal()

