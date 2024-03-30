const categories = document.getElementById('categories');

const categoryItems = categories.querySelectorAll('.item');
console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(category => {
  const headerText = category.querySelector('h2').textContent;
  const elementsCount = category.querySelectorAll('ul li').length;

  console.log(`\nCategory: ${headerText}`);
  console.log(`Elements: ${elementsCount}`);
});
