
let userName = localStorage.getItem("UserName");
let buttons = document.querySelector(".buttons");
let userInfo = document.querySelector(".userInfo");
let userN = document.querySelector(".userN");

function redirectBasedOnLoginStatus() {
    if (userName) {
    buttons.classList.add("d-none");
    userInfo.classList.remove("d-none");
    userN.innerHTML = userName;
    } else {
    alert("please login to see the Recipes");
    userInfo.classList.add("d-none");
    buttons.classList.remove("d-none");
    window.location = "login.html";
    }
}
redirectBasedOnLoginStatus();
let arrow = document.querySelector(".fa-arrow-right-from-bracket");

arrow.onclick = function () {
  localStorage.clear();
  window.location = "login.html";
};
