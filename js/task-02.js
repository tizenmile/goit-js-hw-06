const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const newEl = document.querySelector("#ingredients");

const addElement = ingredients.map((element) => {
  const liEl = document.createElement("li");
  liEl.classList.add("item");
  liEl.textContent = element;
  return liEl;
});

newEl.append(...addElement);
console.log(newEl);
