const resetButton = document.querySelector('#reset');
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


// Сейчас создание метки описано прямо внутри forEach, но что, если нам нужно отобразить на карте не одну группу меток, а несколько? Или показать точки из списка частями — сначала первую половину, потом вторую? Придётся каждый раз дублировать код создания метки? Нет!
// Вспомним принцип DRY и вынесем код создания метки в отдельную функцию createMarker.

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
    .addTo(map)
    .bindPopup(createCustomPopup(point));

  return marker;
};

// points.forEach((point) => createMarker(point));
//  Теперь нам нужно решить, а как удалять метки? Можно, конечно, заменить forEach на map, а из функции createMarker возвращать ссылку на объект метки, чтобы после можно было у каждой вызвать уже знакомый нам метод remove(). Не самый оптимальный способ, потому что нам нужно руками написать то, что Leaflet умеет «из коробки».
// собираем все маркеры в оин массив маркеров
const markers = points.map((point) => {
  return createMarker(point);
});

console.log(markers);


// перебираем массив и уддаляем каждый маркер методом remove // маркеры исчезают с карты
markers.forEach((marker) => {
  marker.remove();
});

