function generateCaptcha() {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let captcha = "";
  for (let i = 0; i < 6; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  document.getElementById("captchaText").innerText = captcha;
}

function validateCaptcha() {
  const userInput = document.getElementById("captchaInput").value;
  const captcha = document.getElementById("captchaText").innerText;
  if (userInput === captcha) {
    alert("CAPTCHA validated!");
  } else {
    alert("Invalid CAPTCHA, try again.");
  }
}

window.onload = function () {
  generateCaptcha();
};

function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}


// CONTACT FORM

let contactForm = document.querySelector(".contactForm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;
  let nameInput = document.getElementById("name").value;
  let emailInput = document.getElementById("email").value;
  let contactInput = document.getElementById("number").value;
  let messageInput = document.getElementById("message").value;
  let captchaInput = document.getElementById("captchaInput").value;

  let nameError = document.getElementById("name-Error");
  let emailError = document.getElementById("email-Error");
  let contactError = document.getElementById("number-Error");
  let messageError = document.getElementById("message-Error");
  let captchaError = document.getElementById("captchaError");

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!nameInput) {
    nameError.innerHTML = "Please provide Name";
    isValid = false;
  } else if (nameInput.length < 3 || nameInput.length > 15) {
    nameError.innerHTML = "Name should be between 3 to 10 characters";
    isValid = false;
  } else {
    nameError.innerHTML = "";
  }

  if (!emailInput) {
    emailError.innerHTML = "Please Provide Email";
    isValid = false;
  } else if (!emailPattern.test(emailInput)) {
    emailError.innerHTML = "Please Provide Valid Email (e.g., abc@gmail.com)";
    isValid = false;
  } else {
    emailError.innerHTML = "";
  }

  if (!contactInput) {
    contactError.innerHTML = "Please Provide Contact Number";
    isValid = false;
  } else {
    contactError.innerHTML = "";
  }

  if (!messageInput) {
    messageError.innerHTML = "Please Provide a Message";
    isValid = false;
  } else {
    messageError.innerHTML = "";
  }

  if (captchaInput === "") {
    captchaError.innerHTML = "Please Provide Captcha";
    isValid = false;
  } else {
    captchaError.innerHTML = "";
  }

  if (isValid) {
    alert("Form Submitted Successfully");

    contactForm.reset();
    generateCaptcha();
  }
});

