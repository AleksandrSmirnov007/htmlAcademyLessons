import { debounce } from './util.js';
import { closeMapPopup } from './map.js';

const filtersForm = document.querySelector('.map__filters');
const featuresCheckbox = filtersForm.querySelectorAll('[name="features"]');
const filters = filtersForm.querySelectorAll('.map__filter');

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

onInactiveFilters();

let markers = [];
const MARKERS_COUNT = 10;

const PRICE_MAP = {
  any: [0, Infinity],
  middle: [10000, 50000],
  low: [0, 10000],
  high: [50000, Infinity],
};

let currentType = 'any';
let currentPrice = 'any';
let currentRooms = 'any';
let currentGuests = 'any';
let currentFeatures = [];

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

const compareFeatures = (arrayElement, arrayFilter) => {
  if(arrayElement.length < arrayFilter.length) {
    return false;
  }
  let match = true;

  for (let item of arrayFilter) {
    const isInclude = arrayElement.includes(item);
    if(!isInclude) {
      match = false;
      break;
    }
  }
  return match;
};

const sortFeatures = (array) => {
  return array.filter((element) => {
    let elementFeatures;
    if (!element.offer.features) {
      elementFeatures = [];
    } else {
      elementFeatures = element.offer.features;
    }

    if (compareFeatures(elementFeatures, currentFeatures)) {
      return true;
    }
    return false;
  });
};

const randomSort = () => Math.random() - 0.5;

const sortCount = (array) => {
  if (array.length > MARKERS_COUNT) {
    return [...array].sort(randomSort).slice(0, MARKERS_COUNT);
  }
  return array;
}

const conveyor = (data, ...functions) => {
  functions.forEach((funct) => data = funct(data));
  return data;
};

const filterMarkers = () => conveyor (
  [...markers],
  sortType,
  sortRooms,
  sortGuests,
  sortPrice,
  sortFeatures,
  sortCount
);

const turnFilterOn = (loadedMarkers) => {
  markers = [...loadedMarkers];
};

const setOnFilterChange = (cb) => {
  closeMapPopup();
  const debouncedCallback = debounce(cb, 500);
  filtersForm.addEventListener('change', (evt) => {

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

const defaultMarkers = () => conveyor (
  [...markers],
  sortCount
);

const filtersDefault = (cb) => {
  const debouncedCallback = debounce(cb, 1000);
  filtersForm.reset();
  debouncedCallback(defaultMarkers());
}

export {onActiveFilters, filterMarkers, turnFilterOn, setOnFilterChange, filtersDefault};
