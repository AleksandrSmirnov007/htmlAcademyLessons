// Этот модуль нужен только для разработки в нем просходит генерация случайных данных, аналогичных приходящим с сервера. Оставлю его на случай если сервер перестанет работать

import { getRandomPositiveFloat, getRandomPostiveInteger, getRandomArrayElement, } from "./util.js";

const TITLE = [
  'Маленькая квартирка рядом с парком',
  'Чёткая хата',
  'Небольшая лавочка в парке',
  'Уютное гнездышко для молодоженов',
  'Тихая квартирка недалеко от метро',
  'Чёткая хата',
  'Стандартная квартира в центре',
  'Квартира студия в престижном районе',
  'Милое гнездышко для фанатов Анимэ',
  'Стандартная квартира в центре',
  'Императорский дворец в центре Токио',
  'Уютное гнездышко для молодоженов',
  'Загородный дом для спокойного отдыха',
  'Милейший чердачок',
  'Хостел «Для друзей»',
  'Маленькая квартирка рядом с парком',
  'Стандартная квартира в центре',
  'Чёткая хата',
  'Маленькая квартирка рядом с парком',
  'Императорский дворец в центре Токио',
  'Маленькая квартирка рядом с парком',
  'Тихая квартирка недалеко от метро',
  'Маленькая квартирка рядом с парком',
  'Небольшая лавочка в парке',
  'Маленькая квартирка рядом с парком',
  'Отель-музей',
  'Хостел «Для друзей»',
  'Отель-музей',
  'Тихая квартирка недалеко от метро',
  'Небольшая лавочка в парке',
  'Милейший чердачок',
  'Императорский дворец в центре Токио',
  'Милое гнездышко для фанатов Анимэ',
  'Загородный дом для спокойного отдыха',
  'Чёткая хата',
  'Небольшая бюджетная комната для студентов',
  'Хостел «Для друзей»',
  'Милейший чердачок',
  'Тихая квартирка недалеко от метро',
  'Загородный дом для спокойного отдыха',
  'Небольшая бюджетная комната для студентов',
  'Чёткая хата',
  'Стандартная квартира в центре',
  'Милое гнездышко для фанатов Анимэ',
  'Квартира студия в престижном районе',
  'Загородный дом для спокойного отдыха',
  'Небольшая лавочка в парке',
  'Чёткая хата',
  'Уютное гнездышко для молодоженов',
  'Отель-музей'
];


// location
const LAT_MIN = 35.65000;
const LAT_MAX = 35.70000;

const LNG_MIN = 139.70000;
const LNG_MAX = 139.80000;

const DESCRIPTION = [
  'Хейтеров просьба не беспокоить.',
  'Комната в трёхкомнатной квартире',
  'подойдёт молодым путешественникам.',
  'Квартира на первом этаже. Соседи тихие. Для всех, кто терпеть не может шума и суеты.',
  'Великолепная лавочка прямо в центре парка. Подходит для всех кто любит спать на свежем воздухе.',
  'Маленькая квартирка на чердаке. Для самых не требовательных.',
  'Замечательный дворец в старинном центре города. То…рец. Лакеев и прочих жокеев просим не беспокоить.',
  'Отель для ценителей истории. Почуствуй себя героем из прошлого.',
  'У нас тут все ништяк. Ларек за углом. Шава 24 часа. Приезжайте! Интернетов нет!',
  'Великолепная квартира-студия в центре Токио. Подхо…а полностью укомплектована и имеет свежий ремонт.',
  'Один из лучших хостелов для душевного общения. Ужи…борка, бесплатный Wi-Fi, чистое постельное белье.',
  'Тут красиво, светло и уютно. Есть где разместиться компании из 5 человек. Кофе и печеньки бесплатно.'
];

const TYPE = ['palace', 'flat', 'hotel', 'house', 'bungalow'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const CHECKIN = ['12:00', '13:00', '14:00'];
const CHECKOUT = ['12:00', '13:00', '14:00'];
const MAX_ROOMS = 5;
const MAX_GUESTS = 3;
const DIGITS = 5;
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const createAvatar = (index) => {
  if (index < 10) {
    return `./img/avatars/user0${index}.png`
  } else if (index >= 10) {
    return `./img/avatars/user0${(index % 10) }.png` // аваторов в  папке img всего одиннадцать, а количесты=во генерируемых обьектов может быть больше поэтому при генерации адреса восользуемся остатком от деления на 10
  }
};

const createLocation = () => {
  return {
    lat: getRandomPositiveFloat(LAT_MIN, LAT_MAX, DIGITS),
    lng: getRandomPositiveFloat(LNG_MIN, LNG_MAX, DIGITS),
  }
};

const createFeatures = () => FEATURES.slice(0, getRandomPostiveInteger(0, FEATURES.length));

const createPhotos = () =>
  Array.from({length: getRandomPostiveInteger(0, 5)}, () =>
    getRandomArrayElement(PHOTOS));


// создаем элемент
const createRental = (index) => {
  const location = createLocation();

  return {
    author: {
      avatar:  createAvatar(index),// строка — адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} — это число от 1 до 10. Перед однозначными числами ставится 0. Например, 01, 02...10. Адреса изображений не повторяются.
    },

    offer: {
      title: TITLE[index - 1], //  title, строка — заголовок предложения. Придумайте самостоятельно.
      address: `${location.lat}, ${location.lng}`, //  address, строка — адрес предложения. Для простоты пусть пока составляется из географических координат по маске {{location.lat}}, {{location.lng}}.
      price: getRandomPostiveInteger(200, 6000) * 10, // price, число — стоимость. Случайное целое положительное число.
      type: getRandomArrayElement(TYPE), // type, строка — одно из пяти фиксированных значений: palace, flat, house, bungalow или hotel.
      rooms: getRandomPostiveInteger(1, MAX_ROOMS), // rooms, число — количество комнат. Случайное целое положительное число.
      guests: getRandomPostiveInteger(0, MAX_GUESTS), // guests, число — количество гостей, которое можно разместить. Случайное целое положительное число.
      checkin: getRandomArrayElement(CHECKIN), // checkin, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.
      checkout: getRandomArrayElement(CHECKOUT), // checkout, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.
      features: createFeatures(),// features, массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner. Значения не должны повторяться.
      description: getRandomArrayElement(DESCRIPTION), // description, строка — описание помещения. Придумайте самостоятельно.
      photos: createPhotos(), // photos, массив строк — массив случайной длины из значений: https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg.
    },
    location: location,
  }
};


// создаем массив элементов

const getRentals = () =>
  Array.from(
    {length: 55},
    (_, rentalIndex) => createRental(rentalIndex + 1)
  );

export {getRentals};


// Структура каждого объекта должна быть следующей:

// author, объект — описывает автора. Содержит одно поле:

// avatar, строка — адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} — это число от 1 до 10. Перед однозначными числами ставится 0. Например, 01, 02...10. Адреса изображений не повторяются.
// offer, объект — содержит информацию об объявлении. Состоит из полей:

// title, строка — заголовок предложения. Придумайте самостоятельно.

// address, строка — адрес предложения. Для простоты пусть пока составляется из географических координат по маске {{location.lat}}, {{location.lng}}.

// price, число — стоимость. Случайное целое положительное число.

// type, строка — одно из пяти фиксированных значений: palace, flat, house, bungalow или hotel.

// rooms, число — количество комнат. Случайное целое положительное число.

// guests, число — количество гостей, которое можно разместить. Случайное целое положительное число.

// checkin, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.

// checkout, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.

// features, массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner. Значения не должны повторяться.

// description, строка — описание помещения. Придумайте самостоятельно.

// photos, массив строк — массив случайной длины из значений: https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg.

// location, объект — местоположение в виде географических координат. Состоит из двух полей:

// lat, число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000.

// lng, число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000.
