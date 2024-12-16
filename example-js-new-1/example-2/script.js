console.log('демонстративная консоль');

// Давайте познакомимся с исключениями. Это мощный инструмент, который в случае возникновения незапланированной (исключительной) ситуации, прерывает выполнение кода, так как это считается небезопасным.
// //Внутри функции мы самостоятельно «бросаем» (throw — бросить, англ.) исключение, поэтому второе сообщение мы не увидим никогда.
// exception - АНГЛ "ИСКЛЮЧЕНИЕ"

console.log('шаг 1');

// const codeWithException = () => {
//   console.log('Before Exception');

//   throw Error('My exception');

//   console.log('код который никогда не будет выполнен так как он после throw');
// };

// codeWithException();

console.log('шаг 2');
// Мы вызываем функцию с исключением внутри другой функции, и её код так же прерывается.
// catch переводится "ловить"


// const catchException = () => {
//   console.log('Before call function');

//   codeWithException();

//   console.log('After call function'); // строка не выполнится
// };


console.log('шаг 3');
// Чтобы обработать исключение, нужно потенциально небезопасный код или код, в котором мы сами при некоторых условиях бросаем исключения, обернуть конструкцией try...catch. Теперь код функции catchException в безопасности и выполнен полностью.


// const catchException = () => {
//   console.log('Before call function');

//   try {
//     codeWithException();
//   } catch (err) {
//     console.log('Error:', err.message, err.stack); // не вывелось в консоль содержимое как в демонстрации log: "Error:"	"My exception"	"Error: My exception // at codeWithException (:4:9) //at catchException (:11:5) //at :19:1"
//   }

//   console.log('After call function');
// };

// catchException();



console.log('шаг 4');

// Вернёмся к последнему шагу демонстрации про switch...case.

const seasons = ['Лето','Осень','Весна','Зима','Дождь'];

const getCloth = (season) => {
  switch (season) {
    case 'Осень':
      return 'Зонт';
    case 'Зима':
      return 'Варежки';
    case 'Лето':
      return 'Майку';
    case 'Весна':
      return 'Плащ';
    default:
      return 'Непонятно :-(';
  }
}

const questionsContainer = document.querySelector('.questions');
console.log(questionsContainer);
seasons.forEach((season) => {
  questionsContainer.insertAdjacentHTML('beforeend', `— Что надеть, если сейчас ${season}?<br>`);
  questionsContainer.insertAdjacentHTML('beforeend', `— ${getCloth(season)}<br>`);
});
