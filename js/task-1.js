`use strict`;

const allCategories = document.querySelectorAll(`h2`);
const result = `Number of categories: ${allCategories.length}`;
console.log(result);

const categoryList = document.querySelectorAll(`li.item`);
categoryList.forEach((item) => {
  const titles = item.querySelector(`h2`).textContent;
  const lists = item.querySelectorAll(`ul li`).length;
  console.log(`Category: ${titles}
    Elements: ${lists}`);
});
