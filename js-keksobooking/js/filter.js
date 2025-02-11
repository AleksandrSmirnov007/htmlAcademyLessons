import { debounce } from './util.js';







const filtersForm = document.querySelector('.map__filters');
const featuresCheckbox = filtersForm.querySelectorAll('[name="features"]');
const filters = filtersForm.querySelectorAll('.map__filter');

// деактивация / активация

const onInactiveFilters = () => {
  filtersForm.classList.add('map__filters--disabled');
  filters.forEach((filter) => filter.disabled = true);
  featuresCheckbox.forEach((feature) => feature.disabled = true);
};

const onActiveFilters = () => {
  filtersForm.classList.remove('map__filters--disabled');
  filters.forEach((filter) => filter.disabled = false);
  featuresCheckbox.forEach((feature) => feature.disabled = false);
};

onInactiveFilters(); // деактивация, фильтры активизизуются после загрузки карты
// onActiveFilters();

// фильтрация
let markers = []; // в эту переменную будут копироваться  данные которые пришли с сервера
const MARKERS_COUNT = 10; // количество маркеров отображаемое единовременно на карте сделать countFulter для MARKER_COUNT

// промежутки массив из двух чисел (минимальное и максимальное), что бы потом просто подставитть их в условие
const PRICE_MAP = {
  any: [0, Infinity],
  middle: [10000, 50000],
  low: [0, 10000],
  high: [50000, Infinity],
};

// переменные данных фильра
let currentType = 'any';
let currentPrice = 'any'; // варианты: any, middle, low, high
let currentRooms = 'any';
let currentGuests = 'any';
let currentFeatures = [];

// функции обновления переменных данных фильтра
const updateCurrentType = (value) => currentType = value;
const updatecurrentPrice = (value) => currentPrice = value;
const updateCurrentRooms = (value) => currentRooms = value;
const updateCurrentGuests = (value) => currentGuests = value;

const updateCurrentFeatures = () => {
  currentFeatures = [];
  featuresCheckbox.forEach((element) => {
    if(element.checked) {
      currentFeatures.push(element.value);
    }
  });
};

// функции сортировки
const sortType = (array) => {
  if (currentType === 'any') {
    return array;
  }
  return array.filter((element) => element.offer.type === currentType);
};

const sortPrice = (array) => {
  if (currentPrice === 'any') {
    return array;
  }
  // const [min , max] = PRICE_MAP[currentPrice]; // деструктуризация, создание сразу двух переменных на основе массива // const [min, ] = PRICE_MAP[currentPrice];   // тоже что и   // const min = PRICE_MAP[currentPrice][0]; деструктруризация : возмет за переменную min первый элемент массива нацденного по ключу currentPrice в объекте PRICE_MAP |||||||||||  // const [ , max] = PRICE_MAP[currentPrice];  // тоже что и // const max = PRICE_MAP[currentPrice][1]; деструктруризация : возмет за переменную max второй элемент массива нацденного по ключу currentPrice в объекте PRICE_MAP
  const min = PRICE_MAP[currentPrice][0];
  const max = PRICE_MAP[currentPrice][1];
  return array.filter((element) => element.offer.price >= min && element.offer.price <= max);
};

const sortRooms = (array) => {
  if (currentRooms === 'any') {
    return array;
  }
  return array.filter((element) => element.offer.rooms === Number(currentRooms));
}

const sortGuests = (array) => {
  if (currentGuests === 'any') {
    return array;
  }
  return array.filter((element) => element.offer.guests === Number(currentGuests));
};

// // функция сравнения двух массивов для sortfeatures (вне зависимости последовательности элементов)
// // каждому элементу одного массива должен быть равный элемент в другом массиве (при порядок элементов в обоих массивах не важен на всякий
// // но эта функция слишком жестко фильтрует, так как например пользователю нужен вайфай, а стиральная машинка не принципиально он нажмет на заначек вайфай и ему покжет только обьявления где есть только вайфай, а таких мало, возможно есть смысл сделать функцию которая выбирала обявления обязалено указанные варианты удобств и плюс дополнительные удобства, то есть длинна массива из обьявления может быть и больше
// const compareFeatures = (arrayElement, arrayFilter) => {
//   if(arrayElement.length !== arrayFilter.length) {
//     return false; // если по длинне массивы не совпадают то сразу не равны можно дальше не проверять
//   }
//   let match = true; // после проверки по длинне, предположим массивы равны

//   for (let item of arrayFilter) {
//     const isInclude = arrayElement.includes(item);   // для каждого элемента  массива (А) в другом массиве (B) должен содержаться его близнец
//     if(!isInclude) {
//       match = false;  // если есть случай "не содержится" значит в масивах есть разные элементы
//       break; // Цикл for...of в JavaScript может быть прерван с использованием инструкции break. Если уже есть несовпадения нет смысла перебирать другие элементы массива и тратить ресурс поэтому не ипользую forEach
//     }
//   }
//   return match;
// };


// сравнивает массивы не строго по длинне, поэтому могут быть дополнительные features, решил пуcть будет так по шести показателяи мало вариантов для показа или не бывает вообюще из 55 каторые возращаеются с сервера (кстати также при этом хорошо обрабатывается вариант влучае не выбранных значков в features  в фильтре)
const compareFeatures = (arrayElement, arrayFilter) => {
  if(arrayElement.length < arrayFilter.length) {
    return false;
  }
  let match = true; // после проверки по длинне, предположим массивы равны

  for (let item of arrayFilter) {
    const isInclude = arrayElement.includes(item);   // для каждого элемента  массива (А) в другом массиве (B) должен содержаться его близнец
    if(!isInclude) {
      match = false;  // если есть случай "не содержится" значит такое объявление нам не подходит
      break; // Цикл for...of в JavaScript может быть прерван с использованием инструкции break. Если уже есть несовпадения нет смысла перебирать другие элементы массива и тратить ресурс поэтому не ипользую forEach
    }
  }
  return match;
};

const sortFeatures = (array) => {
  return array.filter((element) => {
    let elementFeatures;
    if (!element.offer.features) {
      elementFeatures = []; // если сваойтва в объекте нет, то что пусть будет, потому что функция compareFeatures принимает для сравнения только массивы, кстати это свойства не всегда бывает в данных, а в тех данных которые я сам генерировал я передавал пустой массив если не было features если на этом этапе вернуть false то элемент нникогда не отразится на карте (хотя у него должны быть шансы отразиться когда когда в фильре currentFeatures пустой массив [] )
    } else {
      elementFeatures = element.offer.features; // массив features в одном обьявлении //
    }

    if (compareFeatures(elementFeatures, currentFeatures)) {
      return true;
    }
    return false;
  });
};

const sortCount = (array) => {
  if (array.length > MARKERS_COUNT) {
    return array.slice(0, MARKERS_COUNT); // если после фильровки больше десяти элементов то обрежь и верни десять нужно будет добавить рандомность как в кексограмме
  }
  return array;
}

// приминение всех фильтров сразу // const filterMarkers = (array) => sortFeatures(sortPrice(sortGuests(sortRooms(sortType(array))))); // последовательность исходя и сложности функций, сначала сортируеся простыми функциями что бы на долю сложным в массиве было меньше элементов // функция conveyor (data, function1, function2, function3, function4 ) // берет данные передает их в первую функцию, а результат ее работы передает в параметр второй функции, резульат второй функции передается в параметры третьей  .... и так далее // // Синтаксический сахар вместо глубокой вложенности функций типа sortFeatures(sortPrice(sortGuests(sortRooms(sortType(array)))))
const conveyor = (data, ...functions) => {
  functions.forEach((funct) => data = funct(data));
  return data;
};

// собираем все фильры в общую функцию с помощью функции conveyor конвеер
const filterMarkers = () => conveyor (
  [...markers], // [...rentals] (данные сгенерированные для разработки) заменить на [...markers] (данные которые приходят с сервера)
  sortType,
  sortRooms,
  sortGuests,
  sortPrice,
  sortFeatures,
  sortCount
);

const turnFilterOn = (loadedMarkers) => {
  markers = [...loadedMarkers]; // копирование массива загруженных картинок в пустой массив
};

// один обработчик на все поля фильра (делегирование)

// const onfiltersForm = (evt) => {
//   switch (evt.target.name) {
//     case 'housing-type':
//       updateCurrentType(evt.target.value);
//       break;
//     case 'housing-price':
//       updatecurrentPrice(evt.target.value);
//       break;
//     case 'housing-rooms':
//       updateCurrentRooms(evt.target.value);
//       break;
//     case 'housing-guests':
//       updateCurrentGuests(evt.target.value);
//       break;
//     case 'features':
//       updateCurrentFeatures();
//       break;
//   }
// };

const setOnFilterChange = (cb) => {
  const debouncedCallback = debounce(cb, 500);
  filtersForm.addEventListener('change', (evt) => {
    // обновление переменной в зависимоти от события
    switch (evt.target.name) {
      case 'housing-type':
        updateCurrentType(evt.target.value);
        break;
      case 'housing-price':
        updatecurrentPrice(evt.target.value);
        break;
      case 'housing-rooms':
        updateCurrentRooms(evt.target.value);
        break;
      case 'housing-guests':
        updateCurrentGuests(evt.target.value);
        break;
      case 'features':
        updateCurrentFeatures();
        break;
    }

    debouncedCallback(filterMarkers());
  });
};

export {onActiveFilters, filterMarkers, turnFilterOn, setOnFilterChange};

// // В случае если сервер не работает то раcкоментировать этот код, данные загрузятся из генератора данных из модуля data.js (0перенести в маин)
// // получение генерированных данных с обработки убрать потом но оставить возможностть загрузить данные
// import {renderMarkers} from './map.js';
// import { getRentals } from './data.js';
// const rentals = getRentals();
// console.log(rentals);
// turnFilterOn(rentals);
// renderMarkers(filterMarkers());
// setOnFilterChange(renderMarkers);
