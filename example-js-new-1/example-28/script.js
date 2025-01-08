const fileInput = document.querySelector("input[type=file]");
const output = document.querySelector(".output");

fileInput.addEventListener("change", async () => {
  const [file] = fileInput.files; // const [foo] Не удалось найти информацию о выражении const [foo]. Однако есть сведения о деструктурирующем присваивании в JavaScript. Эта техника позволяет взять объект, извлечь из него некоторые значения и поместить их в именованные переменные или константы. Например, чтобы взять объект, извлечь из него свойства firstName и age и поместить их в константы name и age соответственно, можно написать следующий код:
  // const file = fileInput.files[0]; // тоже что и строка выше

  if (file) {
    output.innerText = await file.text();
  }
});


// Пооробнее о строке:   const [file] = fileInput.files;
//В поисковике результат нейропоиска:
// const [foo] Не удалось найти информацию о выражении const [foo]. Однако есть сведения о деструктурирующем присваивании в JavaScript.
// Эта техника позволяет взять объект, извлечь из него некоторые значения и поместить их в именованные переменные или константы.
// Например, чтобы взять объект, извлечь из него свойства firstName и age и поместить их в константы name и age соответственно, можно написать следующий код:

const person = {
  firstName: 'Tom',
  lastName: 'Cruise',
  actor: true,
  age: 54,
}
const {firstName: name, age} = person;

// В этом примере из объекта извлекаются свойства firstName и age. Свойство age записывается в объявляемую тут же константу с таким же именем, а свойство firstName после извлечения попадает в константу name.

console.log(name, age);


// следующий пример тоже, но уже с массивами:

const arr = ['one', 'two', 'three'];
const [element0] = arr;
console.log(element0); // выведет: 'one'

const [ , element1 ] = arr;
console.log(element1); // выведет: 'two'
// даже так работает
const [ , , element2 ] = arr;
console.log(element2); // выведет: 'three'

// выходит что
// const [foo] = arr;
// тоже что и :
// const foo = arr[0];

// заменим вверху const [file] = fileInput.files;
// на const file = fileInput.files[0];
// и все работает
