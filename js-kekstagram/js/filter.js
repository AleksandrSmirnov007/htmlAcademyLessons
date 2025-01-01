import { getData } from "./api.js";
import { renderPictures } from "./picture.js";
import { getRandomElements } from './util.js';

const COUNT_RANDOM_PICTURES = 10;

const dataFilter = document.querySelector('.img-filters');
dataFilter.classList.remove('img-filters--inactive');

const compareOnDecrease = (a, b) => {
  if (a.comments.length > b.comments.length) {
    return -1;
  }
  if (a.comments.length < b.comments.length) {
    return 1;
  }
  return 0;
};

const filteringPictures = (pictures, filter) => {
  let filteredPictures;

  if (filter === 'filter-default') {
    return filteredPictures = pictures.slice();
  }

  if (filter === 'filter-random') {
    console.log(filteredPictures);
    return filteredPictures = getRandomElements(pictures.slice(), COUNT_RANDOM_PICTURES);
  }

  if (filter === 'filter-discussed') {
    return filteredPictures = pictures.slice().sort(compareOnDecrease);
  }
};

const changeStyleActiveButton = (evt) => {
  if (evt.target.classList.contains('img-filters__button')) {
    const buttons = dataFilter.querySelectorAll('.img-filters__button');
    buttons.forEach ((button) => {
      button.classList.remove('img-filters__button--active')
    });

    evt.target.classList.add('img-filters__button--active');
  }
};

export { filteringPictures, changeStyleActiveButton };
