
// Использование фабричной функции (function factory)

function showHelp (help) {
  document.getElementById('help').innerHTML = help;
}


function makeHelpCallback (help) {
  return function () {
    showHelp(help);
  };
}


function setupHelp () {
  var helpText = [
    {id: 'email', help: 'Ваш адрес E-mail'},
    {id: 'name', help: 'Ваше полное имя'},
    {id: 'age', help: 'Ваш возраст (Вам должно быть больше 16)'},
  ];
  for (var i = 0; i < helpText.length; i++) {
    console.log('цикл сработал');
    // d цикле мы с помощью функции фабрики клепаем функции для разных добавления разных help для всех id
    var item = helpText[i];

    document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
  }
}

setupHelp();

