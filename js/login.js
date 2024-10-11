// Select the input field for the username using its ID and log it to the console
let userNameInp = document.querySelector("#exampleInputUserName");
console.log(userNameInp);

// Select the input field for the password using its ID and log it to the console
let passwordInp = document.querySelector("#exampleInputPassword1");
console.log(passwordInp);

// Select the login button using its class name
let LoginBtn = document.querySelector(".LoginBtn");

// Retrieve stored username and password from local storage
let userName = localStorage.getItem("UserName");
let userPassword = localStorage.getItem("UserPassword");

// Define a function to validate the login credentials
function logInVallation(e) {
  // Prevent the default form submission behavior
  e.preventDefault();
  
  // Check if the entered username and password match the stored values
  if (
    userNameInp.value.trim() != userName ||
    passwordInp.value.trim() != userPassword
  ) {
    // Show an alert if the credentials are incorrect
    alert("The email or password you entered is incorrect. Please try again.");
  } else {
    // If the credentials are correct, redirect to the index page after a delay
    setTimeout(() => {
      window.location = "index.html";
    }, 1500);
  }
}

// Attach the validation function to the click event of the login button
LoginBtn.onclick = logInVallation;
