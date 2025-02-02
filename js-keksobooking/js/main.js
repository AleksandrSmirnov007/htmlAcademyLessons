import {getRentals} from './data.js';


const data = getRentals();
// console.log(data);


// import'./form.js';
import {updateAddress} from './form.js';
// import './map.js';
import {onMoveendMainPin, renderMarkers} from './map.js';


onMoveendMainPin(updateAddress);  // передаем колбак функцию обновить данные в поле адресс в функции которая содержит обработчик событий

// renderMarkers([data[0]]);
renderMarkers(data);

// в задании ниже проробовать реализовать через удаление всех меток при приминении фильрации
// 5.12. При изменении фильтров открытый балун (при наличии) должен быть скрыт.
// то естьпопробовать удалить метку и постореть что библтотека слелает с балуном
