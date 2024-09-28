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

function GetData() {
  let xml = new XMLHttpRequest();
  xml.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let recipes = JSON.parse(this.responseText);
      ShowData(recipes.recipes);
      console.log(recipes);
    }
  };
  xml.open("GET", "https://dummyjson.com/recipes", true);
  xml.send();
}

let recipesRow = document.querySelector(".recipesRow");
let AllRecipes = []; // all recipes array
function ShowData(recipes) {
  AllRecipes = recipes;
  let recipesHtml = AllRecipes.map(function (recipe) {
    return `<div class='col-md-4 col-12 my-4'>
    <div class="card mx-auto" style="width: 18rem;">
        <img src="${recipe.image}" class="card-img-top" alt="${recipe.name}">
        <div class="card-body">
            <h5 class="card-title">${recipe.name}</h5>
            <p class="card-text"><strong>Tags:</strong> ${recipe.tags}</p>
            <p class="card-text"><strong>Prep Time:</strong> ${recipe.prepTimeMinutes} minutes</p>
            <p class="card-text"><strong>Servings:</strong> ${recipe.servings}</p>
            <a href="#" onclick="addToCart(event, ${recipe.id})" class="btn btn-primary">View Recipe Details</a>
        </div>
    </div>
</div>
`;
  }).join("");
  recipesRow.innerHTML = recipesHtml;
}

function addToCart(event, id) {
  event.preventDefault();
  let localStoRecipe = JSON.parse(localStorage.getItem("Recipes")) || [];
  let chosenRecipe = AllRecipes.find((recipe) => recipe.id == id);
  let cartHtml = `<div class='col-md-4 col-12 my-4'>
                <div class="card mx-auto" style="width: 18rem;">
          <img src="${chosenRecipe.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${chosenRecipe.name}</h5>
            <p class="card-text">tags: ${chosenRecipe.tags}</p>
          </div>
        </div>
      </div>`;
  recipesCart.innerHTML += cartHtml;
  localStoRecipe.push(chosenRecipe);
  localStorage.setItem("Recipes", JSON.stringify(localStoRecipe));
  upDateBadge();
}

let recipesCart = document.querySelector(".recipesCart");
function loadDataInCart() {
  let localStoRecipe = JSON.parse(localStorage.getItem("Recipes")) || [];
  localStoRecipe.forEach((recipe) => {
    let cartHtml = `<div class='col-md-4 col-12 my-4'>
          <div class="card mx-auto" style="width: 18rem;">
              <img src="${recipe.image}" class="card-img-top" alt="...">
              <div class="card-body">
                  <h5 class="card-title">${recipe.name}</h5>
                  <p class="card-text">tags: ${recipe.tags}</p>
              </div>
          </div>
      </div>`;
    recipesCart.innerHTML += cartHtml;
  });
  upDateBadge();
}

let deleteAllBtn = document.querySelector(".deleteAllBtn");
function upDateBadge() {
  let badge = document.querySelector(".badge");
  let recipesCartLength = document.querySelectorAll(".recipesCart .col-12");
  badge.innerHTML = recipesCartLength.length;
  if (recipesCartLength.length > 0) {
    deleteAllBtn.classList.remove("d-none");
  } else {
    deleteAllBtn.classList.remove("d-block");
  }
}

deleteAllBtn.onclick = function () {
  DeleteAll();
};

function DeleteAll() {
  recipesCart.innerHTML = "";
  localStorage.removeItem("Recipes");
  upDateBadge();
}

window.onload = function () {
  GetData();
  upDateBadge();
  loadDataInCart();
};
