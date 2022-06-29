// Form and input selector
const form = document.querySelector(".form");
const firstName = document.querySelector(".firstame");
const lastName = document.querySelector(".lastname");
const email = document.querySelector(".email");
const pass = document.querySelector(".password");

// Text error selectors
const firstnameError = document.querySelector(".firstname-error");
const lastnameError = document.querySelector(".lastname-error");
const emailError = document.querySelector(".email-error");
const passwordError = document.querySelector(".password-error");

// Icon errror selectors
const fnameErrorIcon = document.querySelector(".fname-image");
const lnameErrorIcon = document.querySelector(".lname-image");
const emailErrorIcon = document.querySelector(".email-image");
const passwordErrorIcon = document.querySelector(".pass-image");

// Email valid format
const emailValidFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// Function to execute error
const executeError = function (error, input, image) {
  error.classList.add("show");
  input.classList.add("error");
  image.classList.add("show");
  setTimeout(() => {
    error.classList.remove("show");
    input.classList.remove("error");
    image.classList.remove("show");
  }, 3000);
};

// Event Listener on Form
form.addEventListener("submit", function (e) {
  if (firstName.value === "" || firstName.value == null) {
    executeError(firstnameError, firstName, fnameErrorIcon);
    e.preventDefault();
  }

  if (lastName.value === "" || lastName.value == null) {
    executeError(lastnameError, lastName, lnameErrorIcon);
    e.preventDefault();
  }

  if (
    email.value === "" ||
    email.value == null ||
    !email.value.match(emailValidFormat)
  ) {
    email.placeholder = "email@example.com";
    setTimeout(() => {
      email.placeholder = "Email Address";
    }, 3000);
    executeError(emailError, email, emailErrorIcon);
    e.preventDefault();
  }

  if (pass.value === "" || pass.value == null) {
    executeError(passwordError, pass, passwordErrorIcon);
    e.preventDefault();
  }
});
