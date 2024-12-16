

// шаг 4

// Вернёмся к последнему шагу демонстрации про switch...case.

// const seasons = ['Лето','Осень','Весна','Зима','Дождь'];

// const getCloth = (season) => {
//   switch (season) {
//     case 'Осень':
//       return 'Зонт';
//     case 'Зима':
//       return 'Варежки';
//     case 'Лето':
//       return 'Майку';
//     case 'Весна':
//       return 'Плащ';
//     default:
//       return 'Непонятно :-(';
//   }
// }

// const questionsContainer = document.querySelector('.questions');

// seasons.forEach((season) => {
//   questionsContainer.insertAdjacentHTML('beforeend', `- Что надеть, если сейчас ${season}? <br>`);

//   questionsContainer.insertAdjacentHTML('beforeend', `- ${getCloth(season)} <br>`);
// });

// ШАГ 5

// Бросим исключение в случае передачи неизвестного времени года.

// const seasons = ['Лето','Осень','Весна','Зима','Дождь'];

// const getCloth = (season) => {
//   switch (season) {
//     case 'Осень':
//       return 'Зонт';
//     case 'Зима':
//       return 'Варежки';
//     case 'Лето':
//       return 'Майку';
//     case 'Весна':
//       return 'Плащ';
//     default:
//       throw new Error (`Неизвестное время года: "${season}"`);
//   }
// }

// const questionsContainer = document.querySelector('.questions');

// seasons.forEach((season) => {
//   questionsContainer.insertAdjacentHTML('beforeend', `- Что надеть, если сейчас ${season}? <br>`);

//   questionsContainer.insertAdjacentHTML('beforeend', `- ${getCloth(season)} <br>`);
// });

// questionsContainer.insertAdjacentHTML('beforeend', '— А что в Муссон? <br>');

// questionsContainer.insertAdjacentHTML('beforeend', `- ${getCloth('Муссон')}`);

// ШАГ 6

const seasons = ['Лето','Осень','Весна','Зима', 'Дождь'];

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
      throw new Error(`Неизвестное время года: «${season}»`);
  }
};

const questionsContainer = document.querySelector('.questions');

seasons.forEach((season) => {
  questionsContainer.insertAdjacentHTML('beforeend', `- Что надеть, если сейчас ${season}? <br>`);

  try {
    questionsContainer.insertAdjacentHTML('beforeend', `- ${getCloth(season)} <br>`);
  } catch (error) {
    questionsContainer.insertAdjacentHTML('beforeend', '- Непонятно :-( <br>')
  }
});

questionsContainer.insertAdjacentHTML('beforeend', '— А что в Муссон?<br>');
// questionsContainer.insertAdjacentHTML('beforeend', `${getCloth('Муссон')}<br>`); // закоментируем для следущего шага


// ШАГ 7
// Обработаем исключение при вызове функции getCloth для неизвестного значения «Муссон».


try {
  questionsContainer.insertAdjacentHTML('beforeend', `${getCloth('Муссон')}`);
} catch (error) {
  questionsContainer.insertAdjacentHTML('beforeend', '— Не понятно :-( <br>');
}


// ВЫвод:

// Чтобы обработать исключение, нужно потенциально небезопасный код или код, в котором мы сами при некоторых условиях бросаем исключения, обернуть конструкцией try...catch:

// Что если имя не будет введено?
// const names = ['Keks', 'Bob', 'Marley', '', 'Jack'];

// function getName (name) {
//   if (!name) {
//     throw new Error('Имя неизвестно');
//   }
//   return `Привет, ${name}!`;
// };

// names.forEach((name) => {
//   try {
//     console.log(getName(name));
//   } catch (error) {
//     console.log('Введите имя') // В случае ошибки, попросим ввести имя
//   }
// })
