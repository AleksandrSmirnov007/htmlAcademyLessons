import { renderPictures } from './picture.js';
import { getData, sendData } from './api.js';
import { showAlert } from './util.js';
import { setOnFormSubmit, hideModal } from './form.js';
import { showSuccessMessage, showErrorMessage } from './message.js'
import { changeStyleActiveButton } from './filter.js';


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



const dataFilter = document.querySelector('.img-filters__form');



getData(renderPictures, showAlert);


let filter = 'filter-default';

const addListenerFilterButton = (cb) => {
  dataFilter.addEventListener('click', (evt) => {
    changeStyleActiveButton(evt);

    filter = evt.target.id;
    console.log(filter);
    cb();
    }
  );
}

addListenerFilterButton(() => getData(renderPictures, showAlert, filter));
