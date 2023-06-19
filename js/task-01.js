// Policzy i wprowadzi do wiersza poleceń liczbę kategorii w ul#categories, czyli elementy li.item.

const categoriesList = document.getElementById("categories");
const categories = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${categories.length}`);


categories.forEach((category) => {
  const header = category.querySelector("h2").textContent;
  const listElement = category.querySelectorAll("li").length;

  console.log(`Category: ${header} 
  Elements: ${listElement} `);
});










