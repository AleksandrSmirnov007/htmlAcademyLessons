
import { getData, sendData } from './api.js';
import { showSuccessMessage, showFailMessage } from './message.js'
import {onActiveForm, updateAddress, setOnFormSubmit, onFormReset} from './form.js';

import { getDefaultAddress, mainMarkerDefault, onMapLoad, onMoveendMainPin, renderMarkers} from './map.js';
import { onActiveFilters, filterMarkers, turnFilterOn, setOnFilterChange, filtersDefault } from './filter.js';

import './avatar.js';
import './load-photo.js';

updateAddress(getDefaultAddress()); // передаст в поле Адрес значения главной метки по умолчанию

onMoveendMainPin(updateAddress);  // передаем колбэк функцию "обновить данные в поле адресс" в функцию, которая содержит обработчик событий

onMapLoad(onActiveForm, onActiveFilters); // передаем колбэки которые выполняться при заргрузке карты  - форма для заполнения и форма с фильтрами активируются

const onGetDataError = (message) => {
  showFailMessage(message); // получит сообщение из тела функции getData()
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

  filtersDefault(renderMarkers);
  mainMarkerDefault(); // Установит главную метку в начальную позицию
  updateAddress(getDefaultAddress()); // напишет в поле Адрес значения главной метки по умолчанию
};

const onSendDataError = (message) => {
  showFailMessage(message); // передатся сообщение из тела sendData()
};

setOnFormSubmit( async (data) => {
  await sendData(onSendDataSuccess, onSendDataError, data);
});
