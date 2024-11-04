// Давайте рассмотрим перечисленные методы на примере добавления элементов в контейнер.

// Добавим новый элемент перед закрывающим тегом div.

// найдем первый бассейн, метод querySElector найдет первый элемент с подходящий под селектор

const pool = document.querySelector('.pool');

const secondElementHtml = '<div class="el"><span>2</span></div>';

pool.insertAdjacentHTML('beforeend', secondElementHtml);

// Добавим новый элемент сразу за открывающим тегом div.

pool.insertAdjacentHTML('afterbegin', secondElementHtml);

// наблюдение так как было две вставки новый элемент клонировался

//  Вставим новый элемент после элемента под номером 2.

// Здесь мы слегка изменим тактику и воспользуемся коллекцией элементов вместо контейнера, чтобы показать гибкость insertAdjacentHTML.

const allElements = document.querySelectorAll('.el');

console.log(allElements);
// // наблюдение: а данный момент существует три елемента и querySelector их всех нашел (хотя изначально в html был только один элемент)

const lastElement = allElements[allElements.length - 1];

console.log(lastElement);

lastElement.insertAdjacentHTML('afterend', '<div class="el"><span>4</span></div>');

// элемент с содержанием "4" добавился после последнего элемента

// наблюдение если в параметрах заначения не обрамить кавычками то код ломается


// Ещё один способ создания элементов — document.createElement. Для этого сначала нужно создать нужный элемент, заполнить его, а потом вставлять в DOM. Причём использовать уже нужно метод для вставки элементов — appendChild.

// const pool = documnet.querySelector('.pool'); написано выше

const sixthElement = document.createElement('div'); // создаем елемент див
sixthElement.classList.add('el'); // добавляем класс
sixthElement.innerHTML = '<span>6</span>' // добавляем html элемент во внутрь нашего элемента

pool.appendChild(sixthElement);

// Иногда бывает удобно после создания сгруппировать однотипные или разнотипные элементы и вставить потом их все вместе. Для этого можно использовать специальный элемент DocumentFragment.

const fragment = document.createDocumentFragment(); // создаем "коробочку"

// используем цикл для создания новых элементов

for (let i = 0; i < 6; i++) {
  const newElement = document.createElement('div');
  newElement.classList.add('el');
  newElement.innerHTML = '<span>' + i + '</span>';

  fragment.appendChild(newElement); // Складываем все элементы в коробочку
};

pool.appendChild(fragment); // И только в конце отрисовываем всё из "коробочки" добавит в конец еще группу из шести элементов


// Зачастую, чтобы создавать элементы по образу и подобию (на основе шаблона), используют специальный элемент в вёрстке, из которого можно копировать структуру и заполнять её необходимыми данными. Для этих целей служит тег <template>.

const pools = document.querySelectorAll('.pool');
console.log(pools);

const templateFragment = document.querySelector('#element-template').content;

const template = templateFragment.querySelector('div');

const fragmentTwo = document.createDocumentFragment();

for (let i = 1; i < (20 + 1); i++) {
  const element = template.cloneNode(true); // клонируем элемент со всеми "внутренностями"
  element.classList.add('el-' + (i +1)); // // Добавляем порядковый класс, который начинается с единицы, а не с нуля, поэтому 'i + 1'
  element.children[0].textContent = i; // записываем содержимое в наш диве ребенок c индесом 0 это спан ( ведь мы сделали копию с шаблона в которм и див а в нем спан)
  fragmentTwo.appendChild(element); // дабавляем все элементы во фрагмент
};

pools[1].appendChild(fragmentTwo); // добавление фрагмента с элементами в второй бассейн
