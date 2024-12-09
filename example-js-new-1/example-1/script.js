// Для создания слайдера, есть штатный элемент управления — input с типом range. Хорошая штука, но с рядом минусов. Например, ползунок может быть только один, стилизовать сложно и поддерживается стилизация не везде. Поэтому мы будем использовать стороннюю библиотеку noUiSlider для созданий слайдеров
// Первым делом нужно добавить элемент в html, в который библиотека будет отрисовывать слайдер. Заодно мы наверстаем небольшую форму.
// После подключить файл стилей и скрипт библиотеки. в низу html перед хзакрывающим тегом боду     <script src="https://unpkg.com/nouislider@14.6.3/distribute/nouislider.min.js"></script>

// global noUiSlider:readonly
const sliderElement = document.querySelector('.level-form__slider');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 80,
});
