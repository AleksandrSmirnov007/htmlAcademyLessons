
import { getData, sendData } from './api.js';
import { showSuccessMessage, showFailMessage } from './message.js'
import {onActiveForm, updateAddress, setOnFormSubmit, onFormReset} from './form.js';

import { onMapLoad, onMoveendMainPin, renderMarkers} from './map.js';
import { onActiveFilters, filterMarkers, turnFilterOn, setOnFilterChange } from './filter.js';

import './avatar.js';
import './load-photo.js';

onMoveendMainPin(updateAddress);  // передаем колбэк функцию обновить данные в поле адресс в функции которая содержит обработчик событий

onMapLoad(onActiveForm, onActiveFilters); // передаем колбэки которые выполняться при зогрузке карты  - форма и фильры активируются

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
