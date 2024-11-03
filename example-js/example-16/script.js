const heroNameElement = document.querySelector('b');

heroNameElement.innerHTML = 'Кощей бессмертный';

heroNameElement.textContent = 'Гарри Поттер';

heroNameElement.innerHTML = '<a href="javascript:alert(\' эта ссылка провоцирует Вывод сообщения в диалоговом окне\')" >Кощей Бесметрный<a/>'; // Разница между этими двумя способами в том, каким образом браузер интерпретирует строку, записанную в каждое из них. В случае с innerHTML браузер будет рисовать текст как HTML-разметку.

heroNameElement.textContent = '<a href="javascript:alert(\' эта ссылка провоцирует Вывод сообщения в диалоговом окне\')" >Кощей Бесметрный<a/>'; //В то время как textContent вставляет текст, как есть. Даже если в тексте HTML-разметка.

// При помощи innerHTML мы можем создавать новые элементы на странице. textContent нам не позволяет этого сделать.

document.body.innerHTML = document.body.innerHTML + '<button type="button">Начать игру</button>';
// кодом выше переписали весь DOM и еще плюсои добавили разметку кнопки "начать игру"

// У innerHTML есть ряд проблем, так как все элементы удаляются и создаются вновь каждый раз, когда мы вставляем новую разметку.

heroNameElement.textContent = 'Баба-Яга'; // вывод в браузере останется без изменений,  так как разметка уже полностью переписана и найденные ранее элементы не имеют к новым никакого отношения. Не актуальный DOM хранится где то в памяти

// Для того что бы вновь изменить текстовое содержимое необходимо найти элемент по новой

const heroNameElement2 = document.querySelector('b');
heroNameElement2.textContent = 'Баба-Яга'; // браузер примет изменения при отображении

// шаг 7 Чтобы избежать ненужных обновлений страницы, существуют специальные методы, которые позволяют вставить текст или разметку точечно — insertAdjacentHTML, insertAdjacentText.

document.body.insertAdjacentHTML('beforeend', '<button type="button">Еще одна кнопка добавленная через insertAdjacentHTML</button>');
