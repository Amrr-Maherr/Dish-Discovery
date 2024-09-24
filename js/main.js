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
  localStorage.clear()
  window.location = "login.html";
};

function GetData() {
  let xml = new XMLHttpRequest();
  xml.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let recipes = JSON.parse(this.responseText);
      ShowData(recipes.recipes);
    }
  };
  xml.open("GET", "https://dummyjson.com/recipes", true);
  xml.send();
}

window.onload = function () {
  GetData();
  upDateBadge();
};

let recipesRow = document.querySelector(".recipesRow");
let AllRecipes = []; // all recipes array
function ShowData(recipes) {
  AllRecipes = recipes;
  console.log(AllRecipes);
  let recipesHtml = AllRecipes.map(function (recipe) {
    return `<div class='col-md-4 col-12 my-4'>
                <div class="card mx-auto" style="width: 18rem;">
          <img src="${recipe.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${recipe.name}</h5>
            <p class="card-text">tags: ${recipe.tags}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>`;
  }).join("");
  recipesRow.innerHTML = recipesHtml;
}


function upDateBadge() {
  let badge = document.querySelector(".badge");
  let recipesCartLength = document.querySelectorAll(".recipesCart .col-12");
  badge.innerHTML = recipesCartLength.length;
}




