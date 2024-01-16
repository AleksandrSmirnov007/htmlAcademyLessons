
// main-nav

var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');
navToggle.addEventListener('click', function(){
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.remove('main-nav--opened');
    navMain.classList.add('main-nav--closed');
  }

});


// example__switcher

var exampleSwitcher = document.querySelector('.example__switcher');
var buttonBefore = document.querySelector('.switcher__button--before');
var buttonAfter = document.querySelector('.switcher__button--after'); // забыл точку искал 30 минут

var imageBefore = document.querySelector('.example__image--before');
var imageAfter = document.querySelector('.example__image--after');



buttonBefore.addEventListener('click', function(){
  if (exampleSwitcher.classList.contains('switcher--after')) {
    exampleSwitcher.classList.remove('switcher--after');
    exampleSwitcher.classList.add('switcher--before');

    imageAfter.classList.remove('example__image--active');
    imageBefore.classList.add('example__image--active');
  }
});

buttonAfter.addEventListener('click', function(){
  if (exampleSwitcher.classList.contains('switcher--before')) {
    exampleSwitcher.classList.remove('switcher--before');
    exampleSwitcher.classList.add('switcher--after');

    imageBefore.classList.remove('example__image--active');
    imageAfter.classList.add('example__image--active');
  }
});
