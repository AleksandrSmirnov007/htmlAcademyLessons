import { debounce } from "./util.js";

const mapFilters = document.querySelector('.map__filters');
const featuresCheckbox = mapFilters.querySelectorAll('[name="features"]');

const MARKER_COUNT = 10;
// применю промежутки массив из двух чисел (минимальное и максимальное), что бы потом просто подставитть их в условие
const PRICE_MAP = {
  any: [0, Infinity],
  middle: [10000, 50000],
  low: [0, 10000],
  high: [50000, Infinity],
};

let markers = [];

let currentType = '';
let currentPrice = [];
let currentRooms = '';
let currentGuests = '';
let currentFeatures = [];

const updateCurrentType = (value) => currentType = value;
const updateCurrentPrice = (value) => currentPrice = PRICE_MAP[value];
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

// один обработчик на все поля фильра
const onMapFilters = (evt) => {
  console.log('в работе---------------------');

  switch (evt.target.name) {
    case 'housing-type':
      updateCurrentType(evt.target.value);
      break;
    case 'housing-price':
      updateCurrentPrice(evt.target.value);
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
};

mapFilters.addEventListener('change', onMapFilters)
