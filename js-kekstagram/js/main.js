import { getPictures } from './data.js';
import { renderPictures} from './picture.js';

// import './form-upload.js';
import { addListenerUploadInput} from './form-upload.js';


renderPictures(getPictures());

addListenerUploadInput();
