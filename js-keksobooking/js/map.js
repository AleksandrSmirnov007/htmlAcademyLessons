import {onActiveForm} from './form.js'; // приходится сюда импортировать из-за того что я не смог импортировать отсюда обработчик по load
import { createCard } from './card.js'; // импортирую только сюда отдельным модулем отрисовку попапа,  что юы не загромождать код, темболее этот модуль был написан до этого для тестирования рендеринга данных

// пока лучший вариант, но все равно требует ипорта onActiveForm()
// Одна из основных проблем настольных компьютеров — случайная прокрутка карты при попытке перемещаться по странице. Чтобы решить эту проблему, я изменяю код, в котором я объявлял карту на этапе настройки. Я добавлю атрибут scrollWheelZoom и установлю его значение false, чтобы карту можно было масштабировать только с помощью кнопок масштабирования. Я также использую другой способ установки центра и уровня масштабирования, который работает эффективнее и более удобен для чтения источник: https://www.sitepoint.com/leaflet-create-map-beginner-guide/
  const map = L.map('map', {scrollWheelZoom:false})
  .on('load', () => {
    // console.log('Карта инициализирована');
    onActiveForm(); // форма активируется при загрузке карты // не могу вытащить в main.js эту задачу и приходится сюда импортировать import {onActiveForm} from './form.js';
  })
  .setView({
    lat: 35.6895,
    lng: 139.692,
  }, 12);


// // не работает
// const map = L.map('map');
// const onMapLoad = (cb) => {
//   map.on('load', () => {
//     console.log('сработал обработчик load');
//     cb();
//   });
// };
// map.setView([51.505, -0.09], 13);
// export {onMapLoad};


// const onMapClick = (e) => {
//   console.log("You clicked the map at " + e.latlng);
// }
// map.on('click', onMapClick);

// Кажется, что карта появилась… но не загрузилась, что за серый квадрат? // Дело в том, что Leaflet предоставляет только JavaScript API, а изображения карт нужно брать у других «поставщиков». Вот она разница между open source и коммерческим продуктом — гибкость и свобода, но лишние телодвижения. Воспользуемся open source изображениями карт от OpenStreetMap, добавив их как слой на нашу созданную карту. Для этого снова по цепочке: создаём нужный слой командой L.tileLayer(), а затем добавляем его на карту методом addTo(). Откуда мы это узнали? Всё из того же раздела «Быстрый старт». Кстати, блоки из фигурных скобок в адресе — это так задумано, чтобы подключать все нужные слои.

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

// Если нужно, можно отказаться от штатной иконки и заменить её на свою. Всё по уже знакомой схеме. Сначала создаём L.icon() то, что нужно добавить на карту. Обратите внимание, мы указали относительный путь к иконке — ./img/main-pin.svg. Потом добавляем icon: mainPinIcon в параметры маркера. Самое сложное здесь, это управиться с размерами новой иконки. Если с iconSize понятно, это размеры картинки, то с iconAnchor будет посложнее — это координаты кончика хвоста метки. Они высчитываются от левого верхнего угла иконки. У нас метка с хвостом вниз, симметричная по горизонтали, поэтому мы укажем 26 и 52, это же ширина метки/2 и высота метки, это же x и y кончика хвоста соответственно.
// Параметр iconAnchor может показаться незначительным, однако он играет важную роль на больших масштабах. Посмотрите, мы указали 0, 0 и метка с правильного адреса перепрыгнула на соседний берег. Включите «Различия» и убедитесь, что мы никак не меняли координаты метки, а значит адрес такой же, как на прошлом шаге.
const mainPinIcon = L.icon ({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52 , 52],
  iconAnchor: [26, 52],
});


// Другой самой частой задачей при работе с картой является добавление или удаления чего-либо с карты, чаще — меток. Принцип в этом случае схож с добавлением слоя. Сперва создаём то, что хотим добавить, метку L.marker()...
// Кроме расположения маркеру можно задать различные параметры, например draggable, который означает, что метку можно передвигать по карте. Попробуйте!
const mainPinMarker = L.marker (
  {
    lat: 35.6895,
    lng: 139.692,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  }
);

// ...затем добавляем на карту addTo(). Такие продвинутые возможности карт удобнее изучать в разделе со списком всех возможностей Leaflet. https://up.htmlacademy.ru/profession/frontender-lite/2/lite-javascript/2/book/11.2
mainPinMarker.addTo(map);

//Обработчики событий метки задаются похожим образом с обработчиками карты. Для примера добавим обработчик события moveend, которое означает, что пользователь закончил передвигать метку, и выведем в консоль новые координаты метки. Обратите внимание, что как и у обычного события в JavaScript, у события Leaflet есть target, только методы у объекта события свои, нужные для карты. Например, метод getLatLng() возвращает объект с новыми координатами. // const onMoveendMainPin = (evt) => //   const coordinates = evt.target.getLatLng(); //   updateAddress(`По широте: ${coordinates.lat}, По долготе: ${coordinates.lng}`) // };

// план такой:  обернем обработчик в функцию onMoveendMainPin, тем самым кстати обработчик кстати не навесится пока не будет вызвана эта функция, навесим в другом модуле - в main.js, но это потом. В праметрах функции-обертки добавим некоторый параметр cb (колбэк функция, планируется сделать в модуле form.js функцию которая будет обновлять данные поля адрес такую const updateAddress = (data) => addressField.valie = data;, и из form.js потом импортировать ее в main.js, а отсюда (map.js) импортировать функцию onMoveendMainPin и там в main.js их соединить передав в параметр onMoveendMainPin функцию updateAddress вот так onMoveendMainPin(updateAddres); только обязательно без вызова нужно писать функцию то есть без скобок, вызов будет в коде внутри в котором кстати передатутся данные события которые будут известны только при появлении события и будут получены через параметр обработчика evt, обработвны и переданы в параметр функции колбэка) Вобщем немного запутано, но работает как надо!
const onMoveendMainPin = (cb) => {
  mainPinMarker.on('moveend', (evt) => {
    const coordinates = evt.target.getLatLng();
    cb(`По широте: ${coordinates.lat.toFixed(5)}, По долготе: ${coordinates.lng.toFixed(5)}`);
  });
};

// Обычные маркеры похожих обьявлений 5.3. Каждое из объявлений показывается на карте в виде метки. Размеры метки похожего объявления — 40 на 40, размеры специальной метки выбора адреса — 52 на 52.
const similarPinIcon = L.icon ({
  iconUrl: '../img/main-pin.svg',
  iconSize: [40 , 40],
  iconAnchor: [20, 40],
});

// data здесь -  один элемент массива данных
const renderMarker = (data) => {
  const {author, offer, location} = data;
  const similarPinMarker = L.marker (
    {
      lat: location.lat,
      lng: location.lng,
    },
    {
      icon: similarPinIcon,
    }
  );

  similarPinMarker
    .addTo(map)
    .bindPopup(createCard(data));  // Кстати, можно было обойтись без <template>, используя шаблонные строки. Тоже будет работать, потому что метод bindPopup() написан так, что может принимать строки, валидную разметку в виде строки и DOM-элемент.
}

// markers - массив данных целиком
const renderMarkers = (markers) => {
  markers.forEach((marker) => {
    renderMarker(marker);
  });
};
// при клике на маркер консоль выдает собщения предупреждения "Chrome is moving towards a new experience that allows users to choose to browse without third-party cookies"  что означает: "Chrome переходит к новому интерфейсу, который позволяет пользователям просматривать веб-страницы без использования сторонних файлов cookie."
// непонимаю почему так, но есть закономерность сообщения вылезают только когда в карточке есть фотографии в блоке popup__photos  .... нужно разобраться в этом позже

// map.closePopup(); // В вашем объекте map есть чистый метод, позволяющий закрыть все открытые всплывающие окна.
const filterForm = document.querySelector('.map__filters');

filterForm.addEventListener('click', () => { // убрать отсюда и применить при фильрации обьявлений
  map.closePopup()} // работает
);

export { onMoveendMainPin, renderMarkers };
