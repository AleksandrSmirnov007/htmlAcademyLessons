// consoleMoment()
const consoleMoment = () => {
  console.log('вызов консоли работает consoleMoment();'); // файл console.js подклчен отдельно к странице не как модуль и тогда прописанных сдесь функций работает в консоли
  // если установить фокус в поле инпута с классом text__description и вызвать в консоле функцию consoleMoment(); то выведется сообщение: 'да так можно найти элемент в фокусе'
  // использовал эту функцию для отладки функции игнорирования закрытия формы при нажатии ескейп при при фокусе на поле ввода
  if(document.activeElement.classList.contains('text__description')) {
    console.log('да так можно найти элемент в фокусе');
  }
}
// document.activeElement найдет элемент в фокусе
