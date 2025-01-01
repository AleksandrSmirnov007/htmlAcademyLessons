const changeButton = document.querySelector('.changeColorButton');
const element = document.querySelector('.element');
const delayField = document.querySelector('.delay-count');

let delay = delayField.value *1000;

delayField.addEventListener('change', () => {
  delay = delayField.value *1000;
});

const allColor = [
  'blue',
  'red',
  'yellow',
  'green',
];

let colorIndex = 0;
element.style.backgroundColor = allColor[0];

const funcColorChange = (colorIndex) => {
  console.log(`начало выполнения функции funcColorChange`);
  setTimeout(() => {
    element.style.backgroundColor = allColor[colorIndex];
    console.log(`конец выполнения функции funcColorChange ${delay / 1000} секунд`);
  }, delay);
};

changeButton.addEventListener('click', () => {

  if (colorIndex < allColor.length - 1) {
    colorIndex++;
  } else {
    colorIndex = 0;
  }
  console.log(colorIndex);
  funcColorChange(colorIndex);

});
