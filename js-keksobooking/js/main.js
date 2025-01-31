import {getRentals} from'./data.js';
import {renderCards} from './cards.js';

// import'./form.js';
import {updateAddress} from './form.js';
// import './map.js';
import {onMoveendMainPin} from './map.js';


onMoveendMainPin(updateAddress);  // передаем колбак функцию обновить данные в поле адресс в функции которая содержит обработчик событий



// renderCards(getRentals());
