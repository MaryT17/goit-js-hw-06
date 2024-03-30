const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.getElementById('ingredients');
const items = [];

ingredients.forEach(ingredient => {
  const item = document.createElement('li');
  item.textContent = ingredient;
  item.classList.add('item');
  items.push(item);
});

items.forEach(item => ingredientsList.appendChild(item));
