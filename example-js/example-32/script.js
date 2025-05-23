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

// Усложняем задачу. Содержимым балуна должен быть наш HTML, а не просто текст. Сперва заведём <template> с разметкой.
// Затем опишем функцию createCustomPopup по получению DOM-элемента из разметки.
const createCustomPopup = (point) => {
  const balloonTemplate = document.querySelector('#balloon')
    .content.querySelector('.balloon');

  const popupElement = balloonTemplate.cloneNode(true);

  popupElement.querySelector('.balloon__title').textContent = point.title;
  popupElement.querySelector('.balloon__lat-lng').textContent = `Координаты: ${point.lat}, ${point.lng}`;

  return popupElement;
};


// Кстати, можно было обойтись без <template>, используя шаблонные строки. Тоже будет работать, потому что метод bindPopup() написан так, что может принимать строки, валидную разметку в виде строки и DOM-элемент.
// const createCustomPopup = ({lat, lng, title}) => `<section class="balloon">
//   <h3 class="balloon__title">${title}</h3>
//   <p class="balloon__lat-lng">Координаты: ${lat}, ${lng}</p>
// </section>`;

console.log(createCustomPopup(points[0]));

points.forEach((point) => {
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
    .bindPopup(createCustomPopup(point));   // И передадим результат  работы в createCustomPopup bindPopup(). Готово. Попробуйте кликнуть на метку.
});

