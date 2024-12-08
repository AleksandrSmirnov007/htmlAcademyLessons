const selectedCategoryContainer = document.querySelector('#selected-category');

const form = document.querySelector('form');

function onFilterChange (evt) {
  if (evt.target.matches('input[type="radio"]')) {
    selectedCategoryContainer.textContent = evt.target.value;

    if (evt.target.closest('.discount-100')) {
      selectedCategoryContainer.classList.add('special-category');
    } else {
      selectedCategoryContainer.classList.remove('special-category');
    }
  }
}

form.addEventListener('change', onFilterChange);


// Кстати, методы .matches() или .closest() будут крайне полезны тем, кто выбрал Кекстаграм личным проектом и хочет использовать делегирование для показа полноразмерных фотографий.
