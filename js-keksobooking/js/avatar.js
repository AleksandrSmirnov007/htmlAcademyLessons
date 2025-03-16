const fileChooserAvatar = document.querySelector('#avatar');
const previewAvatar = document.querySelector('.ad-form-header__avatar');
const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const DEFAULT_SRC = 'img/muffin-grey.svg';
const loadPreviewAvatar = () => {
  const file = fileChooserAvatar.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((type) => fileName.endsWith(type));

  if (matches) {
    previewAvatar.src = URL.createObjectURL(file);
  }
}

const previewAvatarDefault = () => {
  previewAvatar.src = DEFAULT_SRC;
}

export {loadPreviewAvatar, previewAvatarDefault};
