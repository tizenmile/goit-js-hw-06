const countUl = document.querySelectorAll(".item");

console.log(`\nNumber of category: ${countUl.length}`);

console.log(`\nCategory: ${countUl[0].children[0].innerText}`);

console.log(`Elements: ${countUl[0].children[1].children.length}`);

console.log(`\nCategory: ${countUl[1].children[0].innerText}`);

console.log(`Elements: ${countUl[1].children[1].children.length}`);

console.log(`\nCategory: ${countUl[2].children[0].innerText}`);

console.log(`Elements: ${countUl[2].children[1].children.length}`);
