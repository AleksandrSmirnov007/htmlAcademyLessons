import { getPictures } from "./data.js";
import { renderPictures} from './picture.js';
import { renderComments} from './big-pictures.js';

renderPictures(getPictures());

renderComments();
