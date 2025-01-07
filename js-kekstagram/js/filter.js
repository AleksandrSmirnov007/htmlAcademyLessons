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

const discussedSort = (pictureA, pictureB) =>
  pictureB.comments.length - pictureA.comments.length;

const filterPictures = () => {
  switch (currentFilter) {
    case filter.RANDOM:
      return [...pictures].sort(randomSort).slice(0, PICTURES_COUNT); // [...pictures] таким образом происходит запись содержимого массива в безымянный массив по месту и тем самым копирование массива во избежание изменения начального массива
    case filter.DISCUSSED:
      return [...pictures].sort(discussedSort);
    default:
      return [...pictures];
  }
};

const turnFilterOn = (loadedPictures) => {
  filtersElement.classList.remove('img-filters--inactive');
  pictures = [...loadedPictures]; // копирование массива загруженных картинок в пустой массив
  currentFilter = filter.DEFAULT;
};

const setOnFilterClick = (cb) => {
  const debouncedCallback = debounce(cb);

  filtersElement.addEventListener('click', (evt) => {
    if(!evt.target.classList.contains('img-filters__button')) {
      return;
    }

    const clickedButton = evt.target;
    if (clickedButton.id === currentFilter) {
      return;
    }
    filtersElement
    .querySelector('.img-filters__button--active')
    .classList.remove('img-filters__button--active');

    clickedButton.classList.add('img-filters__button--active');

    currentFilter = clickedButton.id;
    debouncedCallback(filterPictures());
  });
};

export { filterPictures, turnFilterOn, setOnFilterClick };
