import {getRandomPostiveInteger, getRandomArrayElement} from '../../util.js';
console.log('data.js is working');

const descriptions = [
  'Живописный берег',
  'Указатель как проити к пляжу',
  'Бирюзовый залив',
  'Талантливая девушка фотограф',
  'Рис в джакузи',
  'Машина просто космос',
  'Клубничка, каллории под контролем',
  'Отличный компот',
  'Приветствие пилотам!',
  'Крутая полка для обуви',
  'На такой огород ходть одно удовольствие',
  'Ауди, я властелин колец',
  'Ленивые суши',
  'Которол - Сушикот',
  'Модные домашние тапочки',
  'Встреча на высоте 10000 метров',
  'Хор мальчиков-спальчиков и девочек-припевочек',
  'Автомобиль в здании',
  'Ночные тапочки для похода к ходолильнику (с подсветкой)',
  'Стройные пальмы',
  'Кушать подано',
  'Закат на море',
  'Глазастое членистоногое',
  'Крутой концерт',
  'Не тащите бегемота из болота',
];

const commentLines  = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const names = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const createMessage = () =>
  Array.from({ length: getRandomPostiveInteger(1, 2)}, () =>
    getRandomArrayElement(commentLines)
    ).join(' ');

const createComment = (index) => ({
  id: index,
  avatar: `./img/avatar-${getRandomPostiveInteger(1, 6)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(names),
});


const createPicture = (index) => ({
  id: index,
  url: `./photos/${index}.jpg`,
  description: getRandomArrayElement(descriptions),
  likes: getRandomPostiveInteger(15, 200),
  comments: Array.from(
    {length: getRandomPostiveInteger(0, 20)}, // Было {length: getRandomPostiveInteger(0, 6)} исправил 6 на 20 для домашнего задания нужен обьем коментариев
    (_, commentIndex) => createComment(commentIndex + 1)
  ),
});

const getPictures = () =>
  Array.from(
    {length: 25},
    (_, pictureIndex) => createPicture(pictureIndex + 1)
  );

export {getPictures};
