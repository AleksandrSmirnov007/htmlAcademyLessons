const fileChooserPhoto = document.querySelector('#images');
const previewPhoto = document.querySelector('.ad-form__photo');

const FILE_TYPES = ['gif','jpeg','jpg','png'];

const loadPreviewPhoto = () => {
  const file = fileChooserPhoto.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((type) => {
    return fileName.endsWith(type);
  });
  if (matches) {
    previewPhoto.style.backgroundImage = `url("${URL.createObjectURL(file)}")`; // работать с background-image проще, при этом не надо добавлять элемент через createElement или innerHtml создавать <img> и присваивать ему prewiewPhoto.src = URL.createObjectURL(file);, центровка background-image:   background-position: center; background-size: cover; (добавляю напрямую в css)
  }
}
// fileChooserPhoto.addEventListener('change', loadPreviewPhoto); //экспортируем фкнкцию loadPreviewPhoto м через делеирование обработчиков событий на форму задать действия при этом событии через switch в модуле form.js вместе со всеми обработчиками

const previewPhotoClear = () => {
  previewPhoto.style.backgroundImage = 'none';
}

export { loadPreviewPhoto, previewPhotoClear };
