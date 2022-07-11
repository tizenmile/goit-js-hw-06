const form = document.querySelector(".login-form");
const button = document.querySelector(".login-form button");
const email = document.getElementsByName("email")[0];
const password = document.getElementsByName("password")[0];

button.addEventListener("click", () => {
  if (email.value === "" || password.value === "") {
    alert("Заповніть всі поля");
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const isSubmited = {
    elements: ({ 
        login: email.value, 
        password: password.value 
    }),
  };
  console.log(isSubmited.elements);
  document.querySelector(".login-form").reset();
});
