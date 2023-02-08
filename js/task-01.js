const listOfCategories = document.querySelector('#categories');
const arrayOfCategories = listOfCategories.children;

console.log(`Number of categories: ${arrayOfCategories.length}`);

[...arrayOfCategories].forEach(category => {
  console.log(`Category: ${category.firstElementChild.textContent}`);
  console.log(`Elements:${category.lastElementChild.children.length}`);
  return;
});
