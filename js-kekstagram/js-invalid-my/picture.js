const pictureTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture'); // ищем элемент template  тут же берем его контент и тут же ищем по классу захавтываем родителя

const container = document.querySelector('.pictures');  // сюда будем складывать картинки пользователей

// реструктуризация {comments, description, likes, url} переданный обьект раскидается на параметры


// функция для создания элемента на основе обьекта из данных
const createPicture = ({comments, description, likes, url}) => {

  const picture = pictureTemplate.cloneNode(true);  // делаем клон с шаблона

  picture.querySelector('.picture__img').src = url;  // ищем свойтсво src у элемента в клоне и добавляем в него данные из переданного в параметр обьекта
  picture.querySelector('.picture__img').alt = description;;  // ищем свойтсво alt у элемента в клоне и добавляем в него данные из переданного в параметр обьекта
  picture.querySelector('.picture__likes').textContent = likes;  // ищем другой уже класс в клоне и записываем в текстовый коетент данные из переданного обьекта
  picture.querySelector('.picture__comments').textContent = comments.length; // тоже ищем подходящий класс но в это раз передаем количество элементов в массиве коментариев

  return picture; // возращаем наш полученный элемент (модифицированный клон) Фунция проста принимает в параметр обьект в виде данных а возвращает по сути уже элемент
};


// создаем фунцию которая примет в параметр массив обьектов и отрисует его на странице
const renderPicture = (pictures) => {
  const fragment = document.createDocumentFragment(); // создаем коробку


  // перебираем последовательно каждый элемент-объект  массива с данными
  pictures.forEach((picture) => {
    const pictureElement = createPicture(picture);  // передаем объект с данными а на выходе получаем элемент и записываем его в переменную
    fragment.appendChild(pictureElement); // добавляем элемент в коробку и так со всеми элементами
  });
  container.appendChild(fragment); // добавляем накопившиеся элементы сразу и в нужное место
};

// готово можно экспортировать главную функцию
export {renderPicture};
