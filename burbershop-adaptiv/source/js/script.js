var navMain = document.querySelector('.main-nav');            // cоздаем переменную navMain и помещаем в нее обьект с классом .main-nav // уделить особое внимание тому, что перед наименованием класса стоит точка так как querySelector выбирает элемент по классу.
      var navToggle = document.querySelector('.main-nav__toggle');              // cоздаем переменную navToggle и помещаем в нее обьект с классом .main-nav__toggle

      navMain.classList.remove('main-nav--nojs');     // из переменной navMain выделить с помощью метода .classList перечень классов удалить с помощью метода remove класс nav-main--nojs (тем самым имееи логику если джаваскрипт включен то он сам удалит намеинование класса который предназначен для работы без скрипта ) //случайно поставил перед найменованием класса точку ".main-nav--nojs" и скрипт не работал так как  метод .classList работает не с самими классами а с их наименованиями

      navToggle.addEventListener('click', function() {                     //  по обьекту в переменной применить метод addEventListener опрелелить произошло ли событие клик, если да то применить фукцию далее излагается функция
        if(navMain.classList.contains('main-nav--closed')) {               // если, к переменной navMain применить метод для определения перечня классов из этого перечня проверить методом на содержание класса main-nav--closed и в этом перечне правда содержиться данный класс то сделать что в фигурных скобках
          navMain.classList.remove('main-nav--closed');                    // по переменой navMain применить метод classlist (определить перечень классов) по перечню применить метод удалить класс с именем main-nav--closed
          navMain.classList.add('main-nav--opened');                       // по переменой navMain применить метод classlist (определить перечень классов) по перечню применить метод добавить класс с именем main-nav--opened
        } else {                                                   // в противном случае если верхнее условие не выполнилось то сделать следущее (указываем что нужно сделать в фигурных скобках)
          navMain.classList.add('main-nav--closed');                 // добавить в перечень классов обьекта в переменной navMain класс .main-nav--closed
          navMain.classList.remove('main-nav--opened');              // удалить в перечне классов обьекта в переменной navMain класс .main-nav--opened
        }
      });
