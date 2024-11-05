// Точка входа, основной модуль
import { getPictures } from './data.js' // импортироуем функцию создания данных объектов
import {renderPicture} from './picture.js' // импортируем функцию превращения данных в элементы и добавление на страницу

renderPicture(getPictures()); // читаем изнутри: создаем данные объектов картинок, а далее их превращаем в элементы и отрисовываем
