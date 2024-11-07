import {getRandomPositiveInteger, getRamdomArrayElement} from './util.js';

const DESCRIPTIONS = [
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

const COMMENTS_LINES  = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
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
  Array.from({length: getRandomPositiveInteger (1, 2)}, () => getRamdomArrayElement(COMMENTS_LINES)
  ).join(' ');

// Круглые скобки нужны, чтобы JavaScript отличил объявление объекта от блока кода {}
const createComment = (index) => ({
  id: index,
  avatar: `./img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
  message: createMessage(),
  name: getRamdomArrayElement(NAMES),
});

// создаем данные для одной картинки если вызвать эту фунцию например в консоли то счетчик currentId станет на 1 больше

// до этого я делал через цикл и создавал оттельную переменну для id , в цикле приращивал к ней единицу тем самым передавая создающимся в цикле обьетам последоваьельное id
function createPicture (index) {
  return {
    id: index,
    url: `./photos/${index}.jpg`,
    description: DESCRIPTIONS[index - 1],
    likes: getRandomPositiveInteger(15, 200),
    avatar: `./img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
    comments: Array.from(
      {length: getRandomPositiveInteger(1, 6)},
      (_, commentIndex) => createComment(commentIndex + 1) // непонятная конструкция. Ясно что она генерерует последовательные индексы внутри созданных обьектов можно посмотреть сдесь https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
    ),
  };
}

// создаем массив из 25 обьектов с помощью метода для массивов From. кадый обект создается фунцией указанной в аргументе метода.

const getPictures = (quantityCreatePicture = 25) =>
  Array.from(
    {length: quantityCreatePicture},
    (_, pictureIndex) => createPicture(pictureIndex + 1) // тоже аргумент функция записанный так для создания пословательных индекса в каждой генерации
  );

export { getPictures };

// const similarPictures = getPictures();
// console.log(similarPictures);

