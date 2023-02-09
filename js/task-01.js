const listOfCategories = document.querySelector('#categories');
const arrayOfCategories = listOfCategories.children;

console.log(`Number of categories: ${arrayOfCategories.length}`);

[...arrayOfCategories].forEach(category => {
  console.log(`Category: ${category.querySelector('h2').textContent}`);
  console.log(`Elements:${category.querySelectorAll('li').length}`);
  return;
});
