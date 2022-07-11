const input = document.querySelector("#name-input");
const value = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  value.textContent = event.currentTarget.value;
  if (value.textContent === "") {
    value.textContent = "Anonymous";
    return;
  }
});
