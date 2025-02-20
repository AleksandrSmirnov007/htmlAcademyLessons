import { debounce } from './util.js';
import { closeMapPopup } from './map.js';

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

onInactiveFilters(); // деактивация с самого начала, затем фильтры активизизуются после загрузки карты
// onActiveFilters();

// фильтрация
let markers = []; // в эту переменную будут копироваться  данные которые пришли с сервера
const MARKERS_COUNT = 10; // количество маркеров отображаемое единовременно на карте

// промежутки в фильре по цене массив из двух чисел (минимальное и максимальное), что бы потом просто подставитть их в условие
const PRICE_MAP = {
  any: [0, Infinity], // думаю лишнее
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

// сравнивает массивы не строго по длинне, поэтому могут быть дополнительные features в отрендереных карточках, решил пуcть будет так по шести показателяи мало вариантов для показа или не бывает вообюще из 55 каторые возращаеются с сервера (кстати также при этом хорошо обрабатывается вариант в случае если не один из значков в features не выбран в фильтре)
const compareFeatures = (arrayElement, arrayFilter) => {
  if(arrayElement.length < arrayFilter.length) {
    return false;
  }
  let match = true; // после проверки по длинне, предположим что все features в фильтре содержатся в features элемента

  for (let item of arrayFilter) {
    const isInclude = arrayElement.includes(item);   // для каждого элемента  массива (А) в другом массиве (B) должен содержаться его элемент-близнец
    if(!isInclude) {
      match = false;  // если есть случай "не содержится" значит такое объявление нам не подходит
      break; // Цикл for...of в JavaScript может быть прерван с использованием инструкции break. Если уже есть несовпадение нет смысла перебирать другие элементы массива, поэтому не ипользую forEach
    }
  }
  return match;
};

const sortFeatures = (array) => {
  return array.filter((element) => {
    let elementFeatures;
    if (!element.offer.features) {
      elementFeatures = []; // если свойства в объекте нет, то что пусть будет, потому что функция compareFeatures принимает для сравнения только массивы, кстати это свойства не всегда бывает в данных, а в тех данных которые я сам генерировал я передавал пустой массив если не было features если на этом этапе вернуть false то элемент нникогда не отразится на карте (хотя у него должны быть шансы отразиться когда когда в фильре currentFeatures пустой массив [] )
    } else {
      elementFeatures = element.offer.features; // массив features в одном обьявлении //
    }

    if (compareFeatures(elementFeatures, currentFeatures)) {
      return true;
    }
    return false;
  });
};

const randomSort = () => Math.random() - 0.5; // вывод отрицательного и положительного числа с одинаковой вероятностью

const sortCount = (array) => {
  if (array.length > MARKERS_COUNT) {
    return [...array].sort(randomSort).slice(0, MARKERS_COUNT); // [...pictures] таким образом происходит запись содержимого массива в безымянный массив по месту и тем самым копирование массива во избежание изменения начального массива // Пример массив const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]; метод возвращает такую сортировку:  [16, 19, 34, 39, 40, 1, 6, 5, 25, 26]
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

const setOnFilterChange = (cb) => {
  closeMapPopup(); // при любом изменении форты фильра - закрыть карточку обьявления если она открыта
  const debouncedCallback = debounce(cb, 500);
  filtersForm.addEventListener('change', (evt) => {
    // обновление переменной в зависимоти от события // один обработчик на все поля фильра (делегирование)
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

// планируется запуск той функции при успешной отправке формы
const defaultMarkers = () => conveyor (
  [...markers],
  sortCount // (фильры (селекты) сбросим функцией filtersDefault) Возьмем массив сохранееных не отфильтрованных данных скопируем его и отсечем спомощью функции sortCount пусть при рендоре покажет только  const MARKERS_COUNT = 10; штук маркеров
);


// Функция сброса селектов и подготовки массива фильрованных по умолчанию (по количеству) маркеров. В main.js вместо cb подставим функцию renderMarkers из модуля map.js
const filtersDefault = (cb) => {
  const debouncedCallback = debounce(cb, 1000);
  filtersForm.reset();
  debouncedCallback(defaultMarkers());
}

export {onActiveFilters, filterMarkers, turnFilterOn, setOnFilterChange, filtersDefault};

// В случае если сервер не работает то раcкоментировать этот код, данные загрузятся из генератора данных из модуля data.js (0перенести в маин)
// получение генерированных данных с обработки убрать потом но оставить возможностть загрузить данные
import {renderMarkers} from './map.js';
import { getRentals } from './data.js';
const rentals = getRentals();
console.log(rentals);
turnFilterOn(rentals);
renderMarkers(filterMarkers());
setOnFilterChange(renderMarkers);
