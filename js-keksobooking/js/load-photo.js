const fileChooserPhoto = document.querySelector('#images');
const previewPhoto = document.querySelector('.ad-form__photo');

const FILE_TYPES = ['gif','jpeg','jpg','png'];

const loadPreviewPhoto = () => {
  const file = fileChooserPhoto.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((type) => fileName.endsWith(type));

  if (matches) {
    previewPhoto.style.backgroundImage = `url("${URL.createObjectURL(file)}")`;
  }
};

const previewPhotoClear = () => {
  previewPhoto.style.backgroundImage = 'none';
};

export { loadPreviewPhoto, previewPhotoClear };
