import { getRandomElements } from './util.js';
import { debounce } from './util.js';

const PICTURES_COUNT = 10;
const filter = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

const filtersElement = document.querySelector('.img-filters');

let currentFilter = '';
let pictures = [];

const randomSort = () => Math.random() - 0.5; // вывод отрицательного и положительного числа с одинаковой вероятностью

filtersElement.classList.remove('img-filters--inactive');

const discussedSort = (pictureA, pictureB) =>
  pictureB.comments.length - pictureA.comments.length;

const filteringPictures = (pictures, filter) => {
  let filteredPictures;

  if (filter === 'filter-default') {
    return filteredPictures = pictures.slice();
  }

  if (filter === 'filter-random') {
    return filteredPictures = getRandomElements(pictures.slice(), PICTURES_COUNT);
  }

  if (filter === 'filter-discussed') {
    return filteredPictures = pictures.slice().sort(discussedSort);
  }
};

const changeStyleActiveButton = (evt) => {
  if (evt.target.classList.contains('img-filters__button')) {
    const buttons = filtersElement.querySelectorAll('.img-filters__button');
    buttons.forEach ((button) => {
      button.classList.remove('img-filters__button--active')
    });

    evt.target.classList.add('img-filters__button--active');
  }
};

export { filteringPictures, changeStyleActiveButton };
