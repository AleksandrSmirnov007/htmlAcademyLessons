import { resetScale } from './scale.js';
import { resetSlider } from './slider.js';

const form = document.querySelector('.img-upload__form');
const overlay = form.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const cancelButton = form.querySelector('.img-upload__cancel');
const fileField = form.querySelector('.img-upload__input');
const hashtagField = form.querySelector('.text__hashtags');
const commentField = form.querySelector('.text__description');
const submitButton = form.querySelector('.img-upload__submit');

const photoPreview = document.querySelector('.img-upload__preview img');
const effectsPreview = document.querySelectorAll('.effects__preview');
const FILE_TYPES = ['jpg','jpeg','png'];

const MAX_HASHTAG_COUNT = 5;
const MAX_HASHTAG_LENGTH = 20;
const MIN_HASHTAG_LENGTH = 2;

// const VALID_SYMBOLS = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
// const VALID_SYMBOLS = /^[A-Za-zА-Яа-яЁё0-9]*$/;
// const UNVALID_SYMBOLS = /[^a-zA-Z0-9а-яА-ЯёЁ]/g;
const UNVALID_SYMBOLS = /[^A-Za-zА-Яа-яЁё0-9]/;

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

const hideModal = () => {
  resetScale();
  resetSlider();
  form.reset(); // в архиве проекта применен такой метод reset() к форме видимо его можно так применять; // Нужно обратить внимание, что при закрытии формы дополнительно необходимо сбрасывать значение поля выбора файла #upload-file. В принципе, всё будет работать, если при повторной попытке загрузить в поле другую фотографию. Но! Событие change не сработает, если пользователь попробует загрузить ту же фотографию, а значит окно с формой не отобразится, что будет нарушением техзадания. Значение других полей формы также нужно сбрасывать.
  pristine.reset();  // в архиве проекта применен такой метод reset() к библиотеке? видимо его можно так применять;
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeyDownForm); // в архиве проекта нет  удалений обратчиков при закрытии формы я тоже убрал строчку  form.removeEventListener('submit', blockSubmitButton);
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

const isValidType = (file) => {
  const fileName = file.name.toLowerCase();
  return FILE_TYPES.some((it) => fileName.endsWith(it));
};

const onFileInputChange = () => {
  const file = fileField.files[0];

  if (file && isValidType(file)) {
    photoPreview.src = URL.createObjectURL(file);
    effectsPreview.forEach((preview) => {
      preview.style.backgroundImage = `url('${photoPreview.src}')`;
    });
  }
  showModal();
};

const onCanselButtonClick = () => {
  hideModal();
};

// для отладки откроем форму // showModal(); // Открывая форму этим методом нужно понимать что если при стандартном открытии формы (то есть через добавление файла) в поле input c классом img-upload__input это поле будет содержать value с адресом файла для добавления, тем самым поле будет удолетворять атрибуту requared и при всех прочих валидных полях  в const isValid = pristine.validate() будет передано true, Но если воспользуемся для оотладки простым вызовом функции showModal(), то форма откроется но поле загрузки файла будет пустым и в const isValid = pristine.validate() будет передано false и так как поле загрузки не явно то будет непонятно почему форма невалидна, хотя видимые поля правильно заполнены
// проверить каждый элемент массива на соответсвие регулярному выражению // разбиваем строку на массив подстрок Методом split() // Метод split() в JavaScript делит строку на список подстрок и возвращает их в виде массива. // Синтаксис: str.split(separator, limit). // Параметры: // separator (необязательно) — шаблон (строка или регулярное выражение), описывающий, где должно происходить каждое разделение. // limit (необязательно) — неотрицательное целое число, ограничивающее количество частей, на которые нужно разделить заданную строку. // Метод trim() значений String удаляет пробелы с обоих концов этой строки и возвращает новую строку, не изменяя исходную. // в value будет передаваться строка  взятая из введенного набором текста в поле хештег


// закончил исправление ошибок пока на этом месте не все один в один но приемлемо и все работает(чуть с большим функционалом)
// далее задача переработать функцию мою функцию validateTags по аналогии с кодом проекта ее на  составляющие функции и вынести их отдельно. по спецификации pristine функция валидации должна возвращать true если поле заполнено верно и false если поле заполнено не верно

const starstWithHash = (string) => string[0] === '#';  // ВАЖНО ИЗ-ЗА этого не работал код Стрелочные функции Использование скобок. Если тело стрелочной функции состоит из нескольких выражений или требует использования блока кода, необходимо обернуть его в фигурные скобки и явно указать оператор return, если требуется вернуть значение.

const hasValidLength = (string) =>
  string.length >= MIN_HASHTAG_LENGTH && string.length <= MAX_HASHTAG_LENGTH;

const hasValidSymbols = (string) => !UNVALID_SYMBOLS.test(string.slice(1)); // здесь применяем отрицание оператор НЕ так как испозуем диапазо невалидных символов типа [^abc]

const isValidTag = (tag) => starstWithHash(tag) && hasValidLength(tag) && hasValidSymbols(tag);

const hasValidCount = (tags) => tags.length <= MAX_HASHTAG_COUNT;

const hasUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase()); // готовим элементы для сравнения на уникальность
  return lowerCaseTags.length === new Set(lowerCaseTags).size ; // При добавлении нового элемента в Set происходит проверка, добавлялся ли такой элемент ранее. Эта проверка использует специальный алгоритм сравнения значений SameValueZero. (Раньше использовался алгоритм SameValue, в котором значения 0 и -0 считаются разными. Смотрите браузерную поддержку ниже). Это означает, что NaN считается равным NaN (не смотря на то что NaN !== NaN), а все другие значения считаются равными в соответствии с семантикой оператора ===. Под итожим в коллекцию можжет собраться только уникальные элементы, при добавлении элемента равного уже примутсвующего в коллекции он не добавляется. коллекция формируется на основе массива. По этому если к примеру есть массив из четырех элемеентов в котором есть да одинаковых элемента стравнить длинну массивов (метод length даст число 4) и количество элементов в коллекции образованных из этого массива (через метод size который даст число три 3) они будут не равны
};

function validateTags (value) {
  const tags = value
    .trim()
    .split(' ')
    .filter((tag) => tag.trim().length); // дейсттвия последовательно в этой строке 1) value - берем переданную строку, 2) обрезаем пробелы cпереди и сзади методом trim(), 3) Методом split(' ') разбиваем строку на массив элементов основываясь на пробеллах (' ') внутри строки, поллучаем массив элементов при этом в нем могут присуутсвовать элементы с нулевой длинной вида '' такое случается если пробелов между тегами будет несколько именно поэтому дделаем следующее 4) фильтруем элементы масива в новый массив функцией (tag) => tag.trim().length тут в логике используется привидение типов нулевая длинна элемента '' даст 0 который приведется в false и элемент не добавиться в образовываемый массив, в ином случае луюаая длинна подстроки эллемента даст положительное целое число которое приведется как true
  return hasValidCount(tags) && tags.every(isValidTag) && hasUniqueTags(tags) ;
};

// Чтобы описать валидации в JavaScript, нужно вызвать метод .addValidator(). // Метод принимает несколько аргументов. Первый — элемент формы, который мы хотим валидировать. // Давайте реализуем ту же валидацию поля ввода имени питомца, но уже через JavaScript. Для этого найдём поле через .querySelector() и передадим Pristine. // Вторым аргументом в .addValidator() нужно передать функцию проверки. Можно передавать по месту, но удобнее объявить функцию выше и передать по ссылке. Назовём её validateNickname. // Функция проверки обязательно должна возвращать true или false, в зависимости от того, валидно ли поле. // Pristine будет вызывать функцию проверки каждый раз, когда потребуется провалидировать форму. Первым параметром будет передано актуальное значение поля. // Третьим аргументом нужно передать сообщение об ошибке. // Попробуйте теперь отправить форму, нажав кнопку «Заказать». // Если поле с именем пустое, или имя короче двух символов, или длиннее 50 символов — мы увидим ошибку. // добавляем валидатор к полю


const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Отправляю....';
};

const unBlockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

pristine.addValidator(
  hashtagField,
  validateTags,
  'Неправильно заполнены Хештеги'
);

const setOnFormSubmit = (cb) => {
  form.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();

    if (isValid) {
      blockSubmitButton(); // если использовать сдесь form.addEventListener('submit', blockSubmitButton); то кнопка submit отключается только по второму клику по ней, так как событие на первый клик уже будет добавлено при запуске функциии showModal (функции показа формы)
      await cb(new FormData(form));
      unBlockSubmitButton();
    }
  });
};

fileField.addEventListener('change', onFileInputChange); // Я делая домашнее задание вынес добавление этого обработчика в отдельную функцию и экпортировал ее в файл main.js и вызывал ее там по сути это была единственная связка между файлами form.js и main.js и все работало, но в коде архива проекта файл form.js импортирован целиком, а добавление этого обработчика снесено в низ я сделал также
cancelButton.addEventListener('click', onCanselButtonClick); // тоже добавлял этот обработчик в тело showModal()

export {setOnFormSubmit, hideModal};
