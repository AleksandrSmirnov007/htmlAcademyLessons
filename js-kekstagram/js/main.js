import { renderPictures } from './picture.js';
import { getData, sendData } from './api.js';
import { showAlert } from './util.js';
import { setOnFormSubmit, hideModal } from './form.js';
import { showSuccessMessage, showErrorMessage } from './message.js'
import { changeStyleActiveButton } from './filter.js';
import { debounce } from './util.js';

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

  const cbDebounced = debounce(cb, 500); // работает только так, но уже хорошо если написать эту строку внутри обработчика то каждый раз будет созаваться новая функция debounce для которой timeoutId еще не определен, зарежка будет но каждый клик породит новую функцию котороя также выполниться после задержки мы увидем при многократном клике задержку а потом серию выполнения каждого клика позже задержки. Возможно нужно применить просто debounce(cb, 1000)() - - попробовал задержка есть но только если на прямую писать  debounce(cb, 1000)(); не определен timeoutId в начале выполнения  с прошлого клика поэтому оставляю как было внутри функции присвоения обработчика:  const cbDebounced = debounce(cb, 1000), а вот внутри addEventListener('click', (evt) => {.......  cbDebounced(); .......} // Кстати сработает и const cbDebounced = debounce(cb) так как в function debounce параметр задержки установлен по умолчанию (callback, timeoutDelay = 500) {......}, но пропишу параметр что бы мне было проще перечитывать код

  dataFilter.addEventListener('click', (evt) => {
    changeStyleActiveButton(evt);

    filter = evt.target.id;
    console.log(`КЛИК на ${filter}`);

    cbDebounced(); // заработало!

    console.log(cb);
    }
  );
};

addListenerFilterButton(() => getData(renderPictures, showAlert, filter));

