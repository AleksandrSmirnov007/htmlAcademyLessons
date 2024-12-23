let longread = document.querySelector('.longread');
let colorSetting = document.querySelector('.color-setting');
let sizeSetting = document.querySelector('.size-setting');
let pixels = document.querySelector('.pixels');
let backgroundSetting = document.querySelector('.background-setting');

colorSetting.onchange = function () {
  longread.style.color = colorSetting.value;
};

sizeSetting.oninput = function () {
  pixels.textContent = sizeSetting.value;
  longread.style.fontSize = sizeSetting.value + 'px';
};

backgroundSetting.onchange = function () {
  longread.style.backgroundColor = backgroundSetting.value;
};
