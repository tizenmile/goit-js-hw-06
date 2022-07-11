const inputToValid = document.querySelector("#validation-input");

inputToValid.addEventListener("blur", () => {
  if (inputToValid.value.length === parseInt(inputToValid.dataset.length)) {
    inputToValid.classList.remove("invalid");
    inputToValid.classList.add("valid");
  } else {
    inputToValid.classList.remove("valid");
    inputToValid.classList.add("invalid");
  }
});
