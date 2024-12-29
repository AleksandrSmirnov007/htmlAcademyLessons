import { renderPictures } from './picture.js';
import { getData, sendData } from './api.js';
import { showAlert } from './util.js';
import {setOnFormSubmit, hideModal} from './form.js';
import {showSuccessMessage, showErrorMessage} from './message.js'




// import { getPictures } from './data.js';
// renderPictures(getPictures()); // на случай если сервер не ответит

const onSendDataSuccess = () => {
  showSuccessMessage();
  hideModal();
};

const onSendDataError = () => {
  showErrorMessage();
}

setOnFormSubmit( async (data) => {
  await sendData(onSendDataSuccess, onSendDataError, data);
});

getData(renderPictures, showAlert);



