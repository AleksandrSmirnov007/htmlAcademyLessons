console.log('form-upload.js is working');

const formUpload = document.querySelector('.img-upload__form');
const imgUploadOverlay = formUpload.querySelector('.img-upload__overlay');
const imgUploadInput = formUpload.querySelector('.img-upload__input');
const uploadCancel = formUpload.querySelector('.img-upload__cancel');
const body = document.querySelector('body');


const addSubmitDisabled = () => {
  const submit = formUpload.querySelector("input[type=submit], button[type=submit]");
  submit.disabled = true;
}

const hideUploadForm = () => {
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeyDownForm);
  formUpload.removeEventListener('submit', addSubmitDisabled);
}

function onEscKeyDownForm(evt) {
  if(evt.key === 'Escape') {
    evt.preventDefault();
    hideUploadForm();
  }
};

const addListenerUploadCancel = () => uploadCancel.addEventListener('click', hideUploadForm);


formUpload.addEventListener('submit', addSubmitDisabled);


const showUploadForm = () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  addListenerUploadCancel();
  document.addEventListener('keydown', onEscKeyDownForm);
  formUpload.addEventListener('submit', addSubmitDisabled);
}

showUploadForm(); // для отладки откроем форму

const addListenerUploadInput = () => imgUploadInput.addEventListener('change', showUploadForm);


const pristine = new Pristine(formUpload, {
  classTo: 'text__description-label',
  errorTextParrent: 'text__description-label',
  errorTextClass: 'text__error-text',
});


// const pristine = new Pristine(formUpload, {
//   // class of the parent element where the error/success class is added
//   classTo: 'text__description-label',
//   errorClass: 'has-danger',
//   successClass: 'has-success',
//   // class of the parent element where error text element is appended
//   errorTextParent: 'ftext__description-label',
//   // type of element to create for the error text
//   errorTextTag: 'div',
//   // class of the error text element
//   errorTextClass: 'text__error-text'
// });



formUpload.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    console.log('Можно отправлять');
  } else {
    console.log('Форма невалидна');
  }
});


export {addListenerUploadInput};
