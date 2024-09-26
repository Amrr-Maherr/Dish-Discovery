let userNameInp = document.querySelector("#exampleInputUserName");
console.log(userNameInp);

let passwordInp = document.querySelector("#exampleInputPassword1");
console.log(passwordInp);

let LoginBtn = document.querySelector(".LoginBtn");

let userName = localStorage.getItem("UserName");
let userPassword = localStorage.getItem("UserPassword");

function logInVallation(e) {
  e.preventDefault();
  if (
    userNameInp.value.trim() != userName ||
    passwordInp.value.trim() != userPassword
  ) {
    alert("The email or password you entered is incorrect. Please try again.");
  } else {
    setTimeout(() => {
      window.location = "index.html";
    }, 1500);
  }
}

LoginBtn.onclick = logInVallation;
