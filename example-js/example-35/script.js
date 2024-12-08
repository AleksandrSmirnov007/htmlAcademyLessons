// А теперь давайте под это поведение (создание слоя для меток и его очищения от них) подберём бизнес-задачу. Предположим, что нам нужно отобразить на карте сначала первую половину точек, а потом, по нажатию на кнопку, вторую. При этом предыдущие метки должны удалиться. Похожее поведение в личных проектах вам нужно будет реализовать в момент фильтрации.

// Для демонстрации мы добавили кнопку «Показать оставшиеся точки на карте и скрыть кнопку». По умолчанию на карте будут первые две точки из списка, по нажатию на кнопку они удалятся, а две оставшиеся займут их место.

const nextButton = document.querySelector('#next');
const map = L.map('map')
  .on('load', () => {
    console.log('Карта инициализирована');
  })
  .setView({
    lat: 59.96831,
    lng: 30.31748,
  }, 13);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const points = [
  {
    title: 'Футура',
    lat: 59.96925,
    lng: 30.31730,
  },

  {
    title: 'Шаверма',
    lat: 59.96783,
    lng: 30.31258,
  },

  {
    title: 'Франк',
    lat: 59.95958,
    lng: 30.30228,
  },

  {
    title: 'Ginza',
    lat: 59.97292,
    lng: 30.31982,
  },
];

const icon = L.icon({
  iconUrl: './location-icon.png',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const createCustomPopup = (point) => {
  const balloonTemplate = document.querySelector('#balloon')
    .content.querySelector('.balloon');

  const popupElement = balloonTemplate.cloneNode(true);

  popupElement.querySelector('.balloon__title').textContent = point.title;
  popupElement.querySelector('.balloon__lat-lng').textContent = `Координаты: ${point.lat}, ${point.lng}`;

  return popupElement;
};

// С помощь метода layerGroup() создадим отдельный слой на карте, куда будем добавлять наши метки. Затем в функции createMarker новосозданные метки всё тем же методом addTo будем добавлять уже не на карту, а в слой на карте.

const markerGroup = L.layerGroup().addTo(map);

console.log(markerGroup);

const createMarker = (point) => {
  const {lat, lng} = point;
  const marker = L.marker (
    {
      lat,
      lng,
    },
    {
      icon,
    },
  );

  marker
    .addTo(markerGroup) // было .addTo(map)
    .bindPopup(createCustomPopup(point));
};

points.slice(0, points.length / 2).forEach((point) => createMarker(point));
// тут отсечем от массива на половину элементов и сделаем с помошью функции метки
//  на карте создадутся две метки

// добавим обработчик на новую кнопку Для демонстрации мы добавили кнопку «Показать оставшиеся точки на карте и скрыть кнопку». По умолчанию на карте будут первые две точки из списка, по нажатию на кнопку они удалятся, а две оставшиеся займут их место. кнопка тоже удалится
nextButton.addEventListener('click', () => {
  markerGroup.clearLayers();
  points.slice(points.length / 2).forEach((point) => createMarker(point));

  nextButton.remove();
});

