
// Если логика с методом .some() в колбэке вам кажется сложной, один из плюсов этого подхода, что логику можно заменить.

// Например, мы можем заранее создать массив модификаторов modifiers на основе массива эмоций userEmotions.

const userEmotions = [
  'smile',
  'crying',
];

const emojiContainer = document.querySelector('.emojis');
console.log(emojiContainer.children);

const emojiList = emojiContainer.querySelectorAll('.emoji');

// создадим модифицированный массив
const modifiers = userEmotions.map((userEmotion) => 'emoji--' + userEmotion);

console.log(userEmotions);
// консоль выведет
// ['smile', 'crying']

console.log(modifiers);
// консоль выведет:
// ['emoji--smile', 'emoji--crying']

// Тем самым мы создали модифицировали массив элементы которого равны классам некотррых элементов в HTML

// Метод includes() Этот метод определён у массивов и строк.

// Для массивов: проверяет, есть ли искомый элемент в массиве.

// Для строк: проверяет, есть ли искомая подстрока в строке.

// Возвращает true, если искомый элемент нашёлся, и false — если нет 😎


// Затем в колбэке .forEach() с помощью метода .classList.item() получить модификатор текущего пункта списка.

// А дальше с помощью метода .includes() проверить, есть ли такой модификатор в массиве модификаторов modifiers. Если нет, то пункт списка можно удалять из разметки, задача решена.


// переберем список с эиоциями из html
emojiList.forEach((emojiListItem) => {
  // для каждго элемента emojiList создадим переменную которая будет хранить его второй класс полученный с помощь classList[1] (нулевой индекс естественно для первого класса, но он нам не нужен) (модификатор по БЭМ)

  const modifier = emojiListItem.classList[1];
  // 1 - это индекс нужного класса в атрибуте class

  // применим условия чтобы удалить те элементы из emojiList для которых значение переменной modifier не содержится в модифицированном массиве с данными пользователя (в масиве modifiers)

  if (!modifiers.includes(modifier)) {
    emojiListItem.remove();
  }
});



// Ещё раз о минусах:

// сложно.
// Плюсы:

// нет минусов, кроме сложности кода;

// не завязываемся на разметку в JavaScript-коде.

// В любом случае, какой бы вы вариант ни выбрали, задача будет решена. Не забывайте об этом.
