
async function f() {
  return 1;
}

// асинхронная фунция вернет промис
// а промис можно обработать через then
f().then((data) => {console.log(data)}); // выведет 1

// продолжть разбор
// https://learn.javascript.ru/async-await

