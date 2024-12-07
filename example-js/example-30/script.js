// Создадим карту. Для этого воспользуемся методами глобального объекта L, сокращение от Leaflet, который появился у нас после подключения скрипта библиотеки. Далее всё выполняем последовательно. Вызываем у L метод map(), чтобы создать карту. Методу передаём id элемента, в который нужно отрисовать карту. Затем по цепочке вызываем метод setView(), чтобы задать параметры отображения карты — центр и масштаб. Откуда мы это всё узнали? Из документации Leaflet, раздел «Быстрый старт». Всегда, когда начинаете работать с новой библиотекой, читайте её документацию!

const map = L.map('map')
  .setView({
    lat: 59.92749,
    lng: 30.31127,
  }, 10);

//Координаты города Тихвин: 59.6451 северной широты и 33.5294 восточной долготы.
// Кажется, что карта появилась… но не загрузилась, что за серый квадрат?
// Дело в том, что Leaflet предоставляет только JavaScript API, а изображения карт нужно брать у других «поставщиков». Вот она разница между open source и коммерческим продуктом — гибкость и свобода, но лишние телодвижения. Воспользуемся open source изображениями карт от OpenStreetMap, добавив их как слой на нашу созданную карту. Для этого снова по цепочке: создаём нужный слой командой L.tileLayer(), а затем добавляем его на карту методом addTo(). Откуда мы это узнали? Всё из того же раздела «Быстрый старт». Кстати, блоки из фигурных скобок в адресе — это так задумано, чтобы подключать все нужные слои.

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);
// демднстрация шаг 4

// Из учебника https://up.htmlacademy.ru/profession/frontender-lite/2/lite-javascript/2/book/11.1
// var map = L.map('map').setView([51.505, -0.09], 13);

// var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   maxZoom: 19,
//   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);
