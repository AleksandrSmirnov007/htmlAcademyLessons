import { debounce } from './util.js';
import { getData } from './api.js'
import { getRentals } from './data.js';
import { renderMarkers } from './map.js';

const mapFilters = document.querySelector('.map__filters');
const featuresCheckbox = mapFilters.querySelectorAll('[name="features"]');

const MARKER_COUNT = 10; // сделать countFulter для MARKER_COUNT

// применю промежутки массив из двух чисел (минимальное и максимальное), что бы потом просто подставитть их в условие
const PRICE_MAP = {
  any: [0, Infinity],
  middle: [10000, 50000],
  low: [0, 10000],
  high: [50000, Infinity],
};

let markers = [];

// const getMarkers = async () => {
//   const data = await getData(console.log, console.log);
//   return data;
// };

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

const rentals = getRentals();
console.log(rentals);

// функции сортировки
const sortType = (array) => {
  if (type === 'any') {
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

// функция сравнения двух массивов для sortfeatures (вне зависимости последовательности элементов)

const compareFeatures = (arrayA, arrayB) => {
  if(arrayA.length !== arrayB.length) {
    return false; // если по длинне массивы не совпадают то сразу не равны можно дальше не проверять
  }
  let match = true; // после проверки по длинне, предположим массивы равны

  for (let itemA of arrayA) {
    const isInclude = arrayB.includes(itemA);   // для каждого элемента  массива (А) в другом массиве (B) должен содержаться его близнец
    if(!isInclude) {
      match = false;  // если есть случай "не содержится" значит в масивах есть разные элементы
      break; // Цикл for...of в JavaScript может быть прерван с использованием инструкции break. Если уже есть несовпадения нет смысла перебирать другие элементы массива и тратить ресурс поэтому не ипользую forEach
    }
  }
  return match;
}

const sortFeatures = (array) => {
  return array.filter((element) => {
    const elementFeatures = element.offer.features; // массив

    if (compareFeatures(elementFeatures, currentFeatures)) {
      return true;
    }
    return false;
  });
};

// приминение всех фильтров сразу
const sortAllFilters = (array) => sortFeatures(sortPrice(sortGuests(sortRooms(sortType(array))))); // последовательность исходя и сложности функций, сначала сортируеся простыми функциями что бы на долю сложным в массиве было меньше элементов

// один обработчик на все поля фильра (делегирование)
const onMapFilters = (evt) => {
  console.log('в работе---------------------');

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
  console.log(currentType, currentPrice, currentRooms, currentGuests, currentFeatures);

  // const filterType = sortType(rentals);
  // console.log(filterType);

  // const filterPrice = sortPrice(rentals);
  // console.log(filterPrice);

  // const filterRooms = sortRooms(rentals);
  // console.log(filterRooms);

  // const filterGuests = sortGuests(rentals);
  // console.log(filterGuests);

  // const filterFeatures = sortFeatures(rentals);
  // console.log(filterFeatures);



  const filteredRentals = sortAllFilters(rentals);
  console.log(filteredRentals);
};

Последовательный вызов функций в JavaScript
// Можно результат работы одной функции передать параметром в другую. В следующем примере мы сначала найдем квадрат числа 2, а затем квадрат результата: https://code.mu/ru/javascript/book/prime/functions/basis/sequential-calling/
functon

function all (fn, ...rest) {


}

mapFilters.addEventListener('change', onMapFilters)
