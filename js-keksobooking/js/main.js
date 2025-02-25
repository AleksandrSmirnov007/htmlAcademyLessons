
import { getData, sendData } from './api.js';
import { showSuccessMessage, showFailMessage } from './message.js'
import {onActiveForm, updateAddress, setOnFormSubmit, onFormReset} from './form.js';

import { getDefaultAddress, mainMarkerDefault, onMapLoad, onMoveendMainPin, renderMarkers} from './map.js';
import { onActiveFilters, filterMarkers, turnFilterOn, setOnFilterChange, filtersDefault } from './filter.js';

updateAddress(getDefaultAddress());

onMoveendMainPin(updateAddress);

onMapLoad(onActiveForm, onActiveFilters);

const onGetDataError = (message) => {
  showFailMessage(message);
};

const onGetDataSuccess = (data) => {
  turnFilterOn(data);
  renderMarkers(filterMarkers());
  setOnFilterChange(renderMarkers);
};

getData(onGetDataSuccess, onGetDataError);

const onSendDataSuccess = () => {
  showSuccessMessage();
  onFormReset();

  filtersDefault(renderMarkers);
  mainMarkerDefault();
  updateAddress(getDefaultAddress());
};

const onSendDataError = (message) => {
  showFailMessage(message);
};

setOnFormSubmit( async (data) => {
  await sendData(onSendDataSuccess, onSendDataError, data);
});
