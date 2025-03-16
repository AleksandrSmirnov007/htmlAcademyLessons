import { createCard } from './card.js';

const POSITION_DEFAULT = {
  lat: 35.6895,
  lng: 139.692,
};

const getDefaultAddress = () => `${POSITION_DEFAULT.lat.toFixed(5)}, ${POSITION_DEFAULT.lng.toFixed(5)}`;

const onMapLoad = (...calbacks) => {
  calbacks.forEach((calback) => calback());
};

const map = L.map('map', {scrollWheelZoom:false});
map.on('load', () => onMapLoad);
map.setView(POSITION_DEFAULT, 12);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon ({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52 , 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker (
  POSITION_DEFAULT,
  {
    draggable: true,
    icon: mainPinIcon,
  }
);

mainPinMarker.addTo(map);

const mainMarkerDefault = () => {
  mainPinMarker.setLatLng(POSITION_DEFAULT);
}

const onMoveendMainPin = (cb) => {
  mainPinMarker.on('moveend', (evt) => {
    const coordinates = evt.target.getLatLng();
    cb(`${coordinates.lat.toFixed(5)}, ${coordinates.lng.toFixed(5)}`);
  });
};

const similarPinIcon = L.icon ({
  iconUrl: '../img/main-pin.svg',
  iconSize: [40 , 40],
  iconAnchor: [20, 40],
});

const markerGroup = L.layerGroup().addTo(map);

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
    .addTo(markerGroup)
    .bindPopup(createCard(data));
}

const renderMarkers = (markers) => {
  markerGroup.clearLayers();
  markers.forEach((marker) => {
    renderMarker(marker);
  });
};

const closeMapPopup = () => map.closePopup();

export {
  getDefaultAddress,
  mainMarkerDefault,
  onMapLoad,
  onMoveendMainPin,
  renderMarkers,
  closeMapPopup
};
