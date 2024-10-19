
function showHelp (help) {
  document.getElementById('help').innerHTML = help;
}

function setupHelp () {
  var helpText = [
    {id: 'email', help: 'Ваш адрес E-mail'},
    {id: 'name', help: 'Ваше полное имя'},
    {id: 'age', help: 'Ваш возраст (Вам должно быть больше 16)'},
  ];
  for (var i = 0; i < helpText.length; i++) {

    // функция пока непонятным для меня образом работает корретно с let и некорретно с var(при var показывает последнее значение присвоееное в цикле что в принципе ожидаемо)
    // var item = helpText[i];
    let item = helpText[i];

    document.getElementById(item.id).onfocus = function  () {
      showHelp(item.help);
    }
  }
}

// document.getElementById('email').onfocus = function  () {
//   showHelp('Ваш адрес E-mail Эту строку добавила функция showHelp()');
// }

// document.getElementById('name').onfocus = function  () {
//   showHelp('Ваше полное имя Эту строку добавила функция showHelp()');
// }

// document.getElementById('age').onfocus = function  () {
//   showHelp('Ваш возраст (Вам должно быть больше 16) Эту строку добавила функция showHelp()');
// }

setupHelp();

