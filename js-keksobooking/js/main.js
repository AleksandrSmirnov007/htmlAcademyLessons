
import { getData } from './api.js';
import {updateAddress} from './form.js';
import {onMoveendMainPin, renderMarkers} from './map.js';


onMoveendMainPin(updateAddress);  // передаем колбак функцию обновить данные в поле адресс в функции которая содержит обработчик событий

// // код для случайной генерации маркеров
// import {getRentals} from './data.js';
// const data = getRentals();
// console.log(data);
// renderMarkers([data[0]]);
// renderMarkers(data);

getData(renderMarkers, console.log);
