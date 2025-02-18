const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

// для добавления avatar
const addDetailSrc = (card, selector, value) => {
  if(value) {
    card.querySelector(selector).src = value;
  } else {
    card.querySelector(selector).classList.add('hidden');
  }
};

// для добавления title, address, price, type, вместимость(rooms, guests)
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

// renderfeatures
const isElementContainsFeature = (element, features) => {
  if (!features) {
    return; // если а данных нет features, то завершить функцию // при получении данных выдавало ошибку в обработке (так как я упустил из виду когда генерировал свои данные для проверки что features сожет и не быть)
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
//////////

const renderPhoto = (card, photos) => {
  const fragment = document.createDocumentFragment();
  const photoTemplate = card.querySelector('.popup__photo');
  const container = card.querySelector('.popup__photos');
  container.innerHTML = '';

  // напишем проверку на присутсвие фото после очистки контейнера, так как контейнер с фото нужно очистить в любом случае
  if(!photos) {
    return; // по тойже причине что и features я упустил и виду что данные могут отсутствовать в объекте
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



// На основе временных данных для разработки и шаблона #card создайте DOM-элементы, соответствующие объявлениям, и заполните их данными:

// Выведите заголовок объявления offer.title в заголовок .popup__title.
// Выведите адрес offer.address в блок .popup__text--address.
// Выведите цену offer.price в блок .popup__text--price строкой вида {{offer.price}} ₽/ночь. Например, «5200 ₽/ночь».
// В блок .popup__type выведите тип жилья offer.type, сопоставив с подписями:
// Квартира для flat
// Бунгало для bungalow
// Дом для house
// Дворец для palace
// Отель для hotel
// Выведите количество гостей и комнат offer.rooms и offer.guests в блок .popup__text--capacity строкой вида {{offer.rooms}} комнаты для {{offer.guests}} гостей. Например, «2 комнаты для 3 гостей».
// Время заезда и выезда offer.checkin и offer.checkout в блок .popup__text--time строкой вида Заезд после {{offer.checkin}}, выезд до {{offer.checkout}}. Например, «Заезд после 14:00, выезд до 14:00».
// В список .popup__features выведите все доступные удобства в объявлении.
// В блок .popup__description выведите описание объекта недвижимости offer.description.
// В блок .popup__photos выведите все фотографии из списка offer.photos. Каждая из строк массива photos должна записываться как атрибут src соответствующего изображения.
// Замените значение атрибута src у аватарки пользователя .popup__avatar на значение поля author.avatar.
// Предусмотрите ситуацию, когда данных для заполнения не хватает. Например, отсутствует описание. В этом случае соответствующий блок в карточке скрывается

