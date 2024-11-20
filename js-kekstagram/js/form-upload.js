alert('файл form-upload подключен');

const formUpload = document.querySelector('.img-upload__form');
const imgUploadOverlay = formUpload.querySelector('.img-upload__overlay');
const imgUploadInput = formUpload.querySelector('.img-upload__input');
const uploadCancel = formUpload.querySelector('.img-upload__cancel');
const body = document.querySelector('body');


const hideUploadForm = () => {
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeyDownForm);
}

function onEscKeyDownForm(evt) {
  if(evt.key === 'Escape') {
    evt.preventDefault();
    hideUploadForm();
  }
};

const addListenerUploadCancel = () => uploadCancel.addEventListener('click', hideUploadForm);

const showUploadForm = () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  addListenerUploadCancel();
  document.addEventListener('keydown', onEscKeyDownForm);
}

const addListenerUploadInput = () => imgUploadInput.addEventListener('change', showUploadForm);


export {showUploadForm, addListenerUploadInput};
