import { getPictures } from './data.js';
import { renderPictures} from './picture.js';

// import './form-upload.js';
import {showUploadForm, addListenerUploadInput} from './form-upload.js';


renderPictures(getPictures());

addListenerUploadInput();
