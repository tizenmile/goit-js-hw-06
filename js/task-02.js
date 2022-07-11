const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const newEl = document.querySelector("#ingredients");
for (let index = 0; index < ingredients.length; index++) {
  const liEl = document.createElement("li");
  liEl.classList.add("item");
  liEl.textContent = ingredients[index];
  newEl.append(liEl);
}
console.log(newEl);

// const liEl = document.createElement("li");
// liEl.classList.add("item");
// liEl.textContent = ingredients[0];

// const liEl1 = document.createElement("li");
// liEl1.classList.add("item");
// liEl1.textContent = ingredients[1];

// const liEl2 = document.createElement("li");
// liEl2.classList.add("item");
// liEl2.textContent = ingredients[2];

// const liEl3 = document.createElement("li");
// liEl3.classList.add("item");
// liEl3.textContent = ingredients[3];

// const liEl4 = document.createElement("li");
// liEl4.classList.add("item");
// liEl4.textContent = ingredients[4];

// const liEl5 = document.createElement("li");
// liEl5.classList.add("item");
// liEl5.textContent = ingredients[5];

// newEl.append(liEl, liEl1, liEl2, liEl3, liEl4, liEl5);
// console.log(newEl);
