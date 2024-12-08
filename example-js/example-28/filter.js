let articles = document.querySelectorAll('.news-block');
let filter = document.querySelector('.filter');

filter.onchange = function () {
  for (let article of articles) {
    if (article.dataset.category !== filter.value && filter.value !== 'all') {
      article.classList.add('hidden');
    } else {
      article.classList.remove('hidden');
    }
  }
};
