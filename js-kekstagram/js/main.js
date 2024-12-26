import { getData } from './api.js';
import { getPictures } from './data.js';
import './message.js'
import { renderPictures } from './picture.js';
import { showAlert } from './util.js';
import './form.js';


// renderPictures(getPictures()); // на случай если сервер не ответит
getData(renderPictures, showAlert);



