
import { getData, sendData } from './api.js';
import {updateAddress, setOnFormSubmit, showSuccessMessage, showFailMessage, onFormReset} from './form.js';
import {onMoveendMainPin, renderMarkers} from './map.js';
import { filterMarkers, turnFilterOn, setOnFilterChange } from './filter.js';

onMoveendMainPin(updateAddress);  // передаем колбак функцию обновить данные в поле адресс в функции которая содержит обработчик событий

const onGetDataError = (message) => {
  showFailMessage(message); // передатся сообщение из тела getData()
};

const onGetDataSuccess = (data) => {
  turnFilterOn(data);
  renderMarkers(filterMarkers());
  setOnFilterChange(renderMarkers);
};

getData(onGetDataSuccess, onGetDataError);


const onSendDataSuccess = () => {
  showSuccessMessage();   //Решил не передавать сообщение из sendData(). Было: const onSendDataSuccess = (message) => {showSuccessMessage(message);} передача сообщения из внутри sendData работает! дважды передаем текст сообщения (один раз внутри sendData при вызове onSuccess в функцию onSendDataSuccess, а потом уже во второй раз из функции onSendDataSuccess в  функцию showSuccessMessage ). Хотя и в шаблоне тоже подходящий текст и если сообщение не будет передано условная конструкция не изменит его в шаблоне
  onFormReset();
};

const onSendDataError = (message) => {
  showFailMessage(message); // передатся сообщение из тела sendData()
};

setOnFormSubmit( async (data) => {
  await sendData(onSendDataSuccess, onSendDataError, data);
});
