// задача написать функцию конвеер которая будет выполнять код к примеру funFour(funThree(funTwo(funOne(1))));
// но запись будет такая functon conveyor (какиетоДанные, функция1, функция2, функция3, функция4, .....функцияN )

const funOne = (param) => {
  console.log('Моя функция + 1');
  const result = param + 1;
  console.log(result);
  return result
};

const funTwo = (param) => {
  console.log('Моя функция + 10');
  const result = param + 10;
  console.log(result);
  return result;
};

const funThree = (param) => {
  console.log('Моя функция + 100');
  const result = param + 100;
  console.log(result);
  return result;
};

const funFour = (param) => {
  console.log('Моя функция + 1000');
  const result = param + 1000;
  console.log(result);
  return result;
};

// работает но криво
// let buffer;
// function conveyor (...rest) {

//   for (let i = 0; i < rest.length - 1; i++ ) {
//     const cb = rest[i + 1];
//     console.log(cb);
//     const fun = () => cb.apply(this, rest);
//     buffer = fun(buffer);

//     console.log(buffer);
//   }
// }




// работает нормально!!!!
// function conveyor (variab, ...functions) {
//   let buffer;
//   buffer = variab;

//   for (let i = 0; i < functions.length; i++ ) {
//     const cb = functions[i];
//     console.log(cb);
//     const fun = (...rest) => cb.apply(this, rest); /// можно так не извращатся так как     buffer = cb(buffer) работает напрямую
//     console.log(buffer);
//     buffer = fun(buffer);
//     console.log(buffer);
//   }
// };


// // убрал все лишнее
// function conveyor (data, ...functions) {
//   let buffer = data;
//   for (let i = 0; i < functions.length; i++ ) {
//     const cb = functions[i];
//     buffer = cb(buffer);
//     console.log(buffer);
//   }
//   return buffer;
// };

// попробую само но через  еще и через forEach
// работает нормально

// function conveyor (data, ...functions) {
//   let buffer = data;
//   functions.forEach ((funct) => {
//     const cb = funct;
//     buffer = cb(buffer);
//     console.log(buffer);
//   });
//   return buffer;
// };


// // через forEach и сокращаю макисимально
// function conveyor (data, ...functions) {
//   let buffer = data;
//   functions.forEach((funct) => buffer = funct(buffer));
//   console.log(buffer);
//   return buffer;
// };


// через forEach и сокращаю макисимально, еще сокращаю
// берет данные передает их в первую функцию, а результат ее работы передает в параметр второй функции, резульат второй функции передается в параметры третьей  .... и так далее

// function conveyor (data, ...functions) {
//   functions.forEach((funct) => data = funct(data));
//   return data;
// };


// стрелочная нотация работает
const conveyor = (data, ...functions) => {
  functions.forEach((funct) => data = funct(data));
  return data;
};



// conveyor(1, funOne, funTwo, funThree, funFour);

// Вот такая запись будет нагляднее
conveyor(
  1,
  funOne, // берет данные их первого параметра, обрабатывает и передает в параметры функции ниже
  funTwo, // берет результат от funOne обрабатывает и передает в параметры функции ниже
  funThree, // берет результат от funTwo обрабатывает и передает в параметры функции ниже
  funFour // берет результат от funThree обрабатывает и передает в переменную далее код возвращает обработанные всеми функциями данные
);

// funFour(funThree(funTwo(funOne(1))));



// берет данные передает их в первую функцию, а результат ее работы передает в параметр второй функции, резульат второй функции передается в параметры третьей  .... и так далее
// // Синтаксический сахар вместо глубокой вложенности функций типа sortFeatures(sortPrice(sortGuests(sortRooms(sortType(array)))))
// const conveyor = (data, ...functions) => {
//   functions.forEach((funct) => data = funct(data));
//   return data;
// };


// собираем все фильры в общую функцию с помощью функции конвеер
// const sortAllFilters = (array) => conveyor ( array, sortType, sortRooms, sortGuests, sortPrice, sortFeatures);
