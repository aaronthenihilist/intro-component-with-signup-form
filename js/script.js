let firstNameInput = document.querySelector('#first-name');
let lastNameInput = document.querySelector('#last-name');
let emailInput = document.querySelector('#email');
let passwordInput = document.querySelector('#password');
let submitBtn = document.querySelector('#submit-btn');
let atSignCheck = "@";

let form = document.querySelector('#form');

// Error icons
let firstNameErrorIcon = document.querySelector('#first-name-error-icon');
let lastNameErrorIcon = document.querySelector('#last-name-error-icon');
let emailErrorIcon = document.querySelector('#email-error-icon');
let passwordErrorIcon = document.querySelector('#password-error-icon');

// Error messages
let firstNameErrorMsg = document.querySelector('#first-name-error-msg');
let lastNameErrorMsg = document.querySelector('#last-name-error-msg');
let emailErrorMsg = document.querySelector('#email-error-msg');
let passwordErrorMsg = document.querySelector('#password-error-msg');

submitBtn.addEventListener("click", function (e) {
    // if ( || lastNameInput.value == "" || emailInput.value == "" || emailInput.value.includes(atSignCheck) == false || passwordInput.value == "") {
    //     console.log("Error!");
    // }

    if (firstNameInput.value == "") {
        firstNameInput.style.border = "2px solid hsl(0, 100%, 74%)";
        firstNameErrorIcon.style.display = "flex";
        firstNameErrorMsg.style.display = "block";
    }

    if (lastNameInput.value == "") {
        lastNameInput.style.border = "2px solid hsl(0, 100%, 74%)";
        lastNameErrorIcon.style.display = "flex";
        lastNameErrorMsg.style.display = "block";
    }

    if (emailInput.value == "" || emailInput.value.includes(atSignCheck) == false) {
        emailInput.style.border = "2px solid hsl(0, 100%, 74%)";
        emailErrorIcon.style.display = "flex";
        emailErrorMsg.style.display = "block";
    }

    if (passwordInput.value == "") {
        passwordInput.style.border = "2px solid hsl(0, 100%, 74%)";
        passwordErrorIcon.style.display = "flex";
        passwordErrorMsg.style.display = "block";
    }

    e.preventDefault();
    form.reset();
});