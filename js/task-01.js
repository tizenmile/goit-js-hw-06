const countUl = document.querySelectorAll(".item");

console.log(`Number of category: ${countUl.length}`);

const allCategoriesArray = countUl.forEach((element) => {
  console.log(`Category: ${element.querySelector("h2").textContent}`);
  console.log(`Elements: ${element.querySelectorAll("li").length}`);
});