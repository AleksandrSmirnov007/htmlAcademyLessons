const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const addDetailSrc = (card, selector, value) => {
  if(value) {
    card.querySelector(selector).src = value;
  } else {
    card.querySelector(selector).classList.add('hidden');
  }
};

const addDetailTextContent = (card, selector, value) => {
  if(value) {
    card.querySelector(selector).textContent = value;
  } else {
    card.querySelector(selector).classList.add('hidden');
  }
};

const getTypeOffer = (value) => {
  switch(value) {
    case 'palace':
      return 'Дворец'
    case 'flat':
      return 'Квартира'
    case 'hotel':
      return 'Отель'
    case 'house':
      return 'Дом'
    case 'bungalow':
      return'Бунгало'
  }
}

const capasityContent = (amountRooms, amountGuests) => {
  let rooms;
  let guests;

  if (amountRooms == 1) {
    rooms = '1 комната ';
  } else if ( amountRooms > 1 || amountRooms < 5) {
    rooms = `${amountRooms} комнаты `;
  } else if ( amountRooms > 5) {
    rooms = `${amountRooms} комнат `;
  } else {
    rooms = '';
  }

  if (amountGuests == 1) {
    guests = 'для 1 гостя';
  } else if (amountGuests > 1 || amountGuests < 5) {
    guests = `для ${amountGuests} гостей`;
  } else {
    guests = '';
  }

  return `${rooms}${guests}`;
}

const timeContent = (checkin, checkout) => `Заезд после ${checkin}, выезд до ${checkout}`;

const isElementContainsFeature = (element, features) => {
  if (!features) {
    return;
  }

  features.forEach((feature) => {
    if (element.classList.contains(`popup__feature--${feature}`)) {
      element.classList.remove('hidden');
    }
  })
};

const renderFeature = (card, features) => {
  const elements = card.querySelectorAll('.popup__feature');

  elements.forEach((element) => {
    element.classList.add('hidden');
    isElementContainsFeature(element, features);
  });
}

const renderPhoto = (card, photos) => {
  const fragment = document.createDocumentFragment();
  const photoTemplate = card.querySelector('.popup__photo');
  const container = card.querySelector('.popup__photos');
  container.innerHTML = '';

  if(!photos) {
    return;
  }

  photos.forEach((photo) => {
    const photoImg = photoTemplate.cloneNode(true);
    photoImg.src = photo;
    fragment.appendChild(photoImg);
  });
  container.appendChild(fragment);
}

const createCard = (data) => {

  const {author, offer, location} = data;
  const card = cardTemplate.cloneNode(true);

  addDetailSrc(card, '.popup__avatar', author.avatar);
  addDetailTextContent(card, '.popup__title', offer.title);
  addDetailTextContent(card, '.popup__text--address', offer.address);
  addDetailTextContent(card, '.popup__text--price', offer.price);
  addDetailTextContent(card, '.popup__type', getTypeOffer(offer.type));
  addDetailTextContent(card, '.popup__text--capacity', capasityContent(offer.rooms, offer.guests));
  addDetailTextContent(card, '.popup__text--time', timeContent(offer.checkin, offer.checkout));

  renderFeature(card, offer.features);
  addDetailTextContent(card, '.popup__description', offer.description);
  renderPhoto(card, offer.photos);

  return card;
}

export { createCard };
