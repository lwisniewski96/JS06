
//---------DANE(MODEL)---------------

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.getElementById("ingredients");

const items = [];



ingredients.forEach((ingredient)=> {
  const newLi = document.createElement("li");
  const newText = document.createTextNode(ingredient);
  newLi.appendChild(newText);
  newLi.classList.add("item");
  items.push(newLi);

}) ;

list.append(...items);

