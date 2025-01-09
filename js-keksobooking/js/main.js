import {getRandomPositiveFloat} from './util.js';
import './objects-data.js';
const TITLE = [

];


const LAT_MIN = 35.65000;
const LAT_MAX = 35.70000;

const LNG_MIN = 139.70000;
const LNG_MAX = 139.80000;

const DIGITS = 5;

const createLocation = () => {
  return {
    lat: getRandomPositiveFloat(LAT_MIN, LAT_MAX, DIGITS),
    lng: getRandomPositiveFloat(LNG_MIN, LNG_MAX, DIGITS),
  }
};

const createRental = () => {
  const location = createLocation();
  console.log(location);

  return {
    author: {
      avatar: 'img/avatars/user{{xx}}.png' // строка — адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} — это число от 1 до 10. Перед однозначными числами ставится 0. Например, 01, 02...10. Адреса изображений не повторяются.
    },

    offer: {
      title: 'title', //  title, строка — заголовок предложения. Придумайте самостоятельно.
      addres: `${location.lat}, ${location.lng}`, //  address, строка — адрес предложения. Для простоты пусть пока составляется из географических координат по маске {{location.lat}}, {{location.lng}}.
      price: 5000, // price, число — стоимость. Случайное целое положительное число.
      type: 'palace', // type, строка — одно из пяти фиксированных значений: palace, flat, house, bungalow или hotel.
      rooms: 5, // rooms, число — количество комнат. Случайное целое положительное число.
      guests: 3, // guests, число — количество гостей, которое можно разместить. Случайное целое положительное число.
      checkin: '12:00', // checkin, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.
      checkout: '12:00', // checkout, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.
      features: ['wifi', 'dishwasher', 'parking'],// features, массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner. Значения не должны повторяться.
      description: '', // description, строка — описание помещения. Придумайте самостоятельно.
      photos: [], // photos, массив строк — массив случайной длины из значений: https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg.
    },
    location: location,
  }
};

console.log(createRental());










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
