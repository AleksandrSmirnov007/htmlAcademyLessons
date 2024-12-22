// Первым делом создадим файл, в котором будем решать нашу задачу. Назовём его popup.js. Импортируем этот файл в точку входа. Затем найдём и покажем окно настроек пользователя, удалив у него скрывающий класс.

const userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden')

// тем самым открыли блок который изначально скрыт через css (исходного файла css нет поэтому буду импровизировать)

console.log ('файл popup.js подключен');

// Таким же образом покажем блок с похожими персонажами внутри окна.

// Обратите внимание, что дочерние элементы не обязательно искать в document.
userDialog.querySelector('.setup-similar').classList.remove('hidden'); // открываем меню схожие персонажи


// найдем в документе контейнер для похожих персонажей
// И найдём в окне список, в который мы будем вставлять похожих магов.
const similarListElement = userDialog.querySelector('.setup-similar-list');


// Найдём в документе шаблон, который мы будем копировать.
const similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

console.log(similarWizardTemplate);

// Склонируем шаблон похожего персонажа и отрисуем. его в списке, чтобы проверить, что отрисовка работает.
//  отсебя добавил цикл что бы посмотреть заполнение если персонажей несколько 4щт
for(let i = 0; i < 4; i++) {
  const wizardElement = similarWizardTemplate.cloneNode(true);
  similarListElement.appendChild(wizardElement);
};

// Импортируем модуль для генерации данных, чтобы получить массив похожих волшебников. Отрисуем всё ещё шаблон, но уже в проходке по массиву с данными.
// импортировать нужно сверху файла но для последовательной истории импортирую здесь весь зависимый код все равно ниже

import { createWizards } from "./data.js";

// создадим данные волшебников и передадим его переменной

const similarWizards = createWizards();

// проверим через консоль
console.log('данные впеременной similarWizards: ');
console.log(similarWizards);
// работает (создалось четыре обьекта данных)

// Затем вставим данные в шаблон. Начнём с имени.

// Потом цвет глаз и мантия.
// проходимся по всем обьектам персонажей методом forEach
similarWizards.forEach((wizard) => {
  const wizardElement = similarWizardTemplate.cloneNode(true); // клонируем шаблон для каждого нового персонажа

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name; // ищем в шаблоне елемент овечающий за имя персонажа и меняяем текстовое содержимое

  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor; // ищем в клонированном шаблоне елемент отвечающий за мантию это svg  вставленный через use и меняем в стилях свойтво fill(заливка цветом)

  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor; // аналогтично с цветом глаз

  similarListElement.appendChild(wizardElement); // отправляем модифицированный клон шаблона в конец списка
});


// Напоследок приберёмся немного:

// для того что бы сохранить предыдущий способ продублируем код и вставим еще четырех волшебников по новому

// вставлять элементы будем через DocumentFragment;
// для получения данных о волшебнике используем деструктуризацию параметров. вставим в место wizard {name, coatColor, eyesColor} синтаксический сахар

const similarListFragment = document.createDocumentFragment(); // создаем фрагмент

similarWizards.forEach(({name, coatColor, eyesColor}) => {
  const wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = name;

  wizardElement.querySelector('.wizard-coat').style.fill = coatColor;

  wizardElement.querySelector('.wizard-eyes').style.fill = eyesColor;

  similarListFragment.appendChild(wizardElement); // добавляем песонажа в конец списка в фрагмент
});

similarListElement.appendChild(similarListFragment); // добавляем фрагмент из четырех персонажей в DOM

// Готово! итого за весь код: 4 + 4 + 4 = 12 сгененрированных похожих песонажей

