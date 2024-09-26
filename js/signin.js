let EmailInp = document.querySelector("#exampleInputEmail1");
console.log(EmailInp);

let userNameInp = document.querySelector("#exampleInputUserName");
console.log(userNameInp);

let passwordInp = document.querySelector("#exampleInputPassword1");
console.log(passwordInp);

let signinBtn = document.querySelector(".signinBtn");

function signInValidation(e) {
  e.preventDefault();
  if (
    EmailInp.value == "" ||
    userNameInp.value == "" ||
    passwordInp.value == ""
  ) {
    alert("Please fill out all required fields.");
  } else {
    localStorage.setItem("UserName", userNameInp.value);
    localStorage.setItem("UserPassword", passwordInp.value);
    setTimeout(() => {
      window.location = "login.html";
    }, 1500);
  }
}
signinBtn.onclick = signInValidation;
