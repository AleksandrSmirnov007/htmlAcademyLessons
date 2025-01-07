import { renderPictures } from './picture.js';
import { getData, sendData } from './api.js';
import { showAlert } from './util.js';
import { setOnFormSubmit, hideModal } from './form.js';
import { showSuccessMessage, showErrorMessage } from './message.js'
import { filterPictures, turnFilterOn, setOnFilterClick } from './filter.js';

const onGetDataSuccess = (data) => {
  turnFilterOn(data);
  renderPictures(filterPictures());
  setOnFilterClick(renderPictures);
}

const onSendDataSuccess = () => {
  showSuccessMessage();
  hideModal();
};

const onSendDataError = () => {
  showErrorMessage();
}

setOnFormSubmit( async (data) => { // код из архива проекта // вроде бы понятно что в параметрах передается функция (сb - каллбек) с параметром дата в котрорый придет "new FormData(form)" в модуле (из модуля) form.js // при все недоконца понятно....
  await sendData(onSendDataSuccess, onSendDataError, data);
});

getData(onGetDataSuccess, showAlert);

