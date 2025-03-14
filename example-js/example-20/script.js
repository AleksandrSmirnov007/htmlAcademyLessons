const userEmotions = [
  'smile',
  'crying',
];

// И, наконец-то, переходим к варианту № 3. Задача прежняя.

// В этот раз мы тоже попробуем использовать уже существующую разметку, только ничего никуда перекладывать не будем. Суть проста: мы переберём в цикле каждый пункт списка и проверим, есть ли такая эмоция в массиве userEmotions. Если эмоция есть — пункт остаётся в разметке, нет — удаляется.

// Для перебора по-прежнему будем использовать метод .forEach(), только теперь на коллекции emojiList.

// Для проверки будем использовать метод массивов .some(), который вызовем на массиве userEmotions.

// В качестве колбэка для метода мы описали функцию, которая превращает эмоцию из массива в модификатор emoji-- и дальше с помощью метода .classList.contains() проверяет, есть ли такой модификатор у текущего пункта списка.


// Метод массива some() позволяет узнать, есть ли в массиве хотя бы один элемент, удовлетворяющий условию в функции-колбэке. Колбэк-функция будет вызываться для каждого элемента массива до тех пор, пока не вернётся true, либо пока не закончатся элементы массива.

// Результатом вызова метода some() будет boolean-значение true или false. Если ни один элемент в массиве не удовлетворит условию, то результат будет false.

const emojiContainer = document.querySelector('.emojis');

const emojiList = emojiContainer.querySelectorAll('.emoji');

// Метод some() в JavaScript возвращает boolean-значение true или false.

// Он позволяет узнать, есть ли в массиве хотя бы один элемент, удовлетворяющий условию в функции-колбэке.

// Колбэк-функция будет вызываться для каждого элемента массива до тех пор, пока не вернётся true, либо пока не закончатся элементы массива.

// Если ни один элемент в массиве не удовлетворяет условию, то результат будет false.

// переберем  коллекцию emojiList как массив по каждому элементу с помощью forEach
// внутри каждого перебора создадим переменную в которую передадим значение полученное из метода some (true или false)
// Метод some в нашем случае вернет ИСТИНУ если название класса перебираемого элемента из коллекции emojiList будет равен какому либо элементу из массива userEmotion с приставкой 'emoji--'
emojiList.forEach((emojiListItem) => {
  console.log('форич рабртает')
  const isNecessary = userEmotions.some(
    (userEmotion) => emojiListItem.classList.contains('emoji--' + userEmotion),
  );

  // Если ни один модификатор на основе массива эмоций не совпал, то пункт списка можно удалять из разметки. Для этого вызываем у него метод .remove(), задача решена.

  if(!isNecessary) {
    emojiListItem.remove();
  }
});

// сделаем еще один файл скрипта и расмотрим еще способ
