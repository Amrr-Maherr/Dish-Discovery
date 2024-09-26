
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
let NewRecipe = document.querySelector(".NewRecipe");
function loadDataInPage() {
  let LocalData = JSON.parse(localStorage.getItem("Recipes"));
  LocalData.forEach((recipe) => {
    let cartHtml = `<div class='col-md-6 col-12 my-4'>
          <div class="card mb-3 mx-auto" id='recipe${recipe.id}'>
  <img src="${recipe.image}" class="card-img-top" alt="...">
 <div class="card-body">
  <h5 class="card-title">${recipe.name}</h5>
  
  <p class="card-text"><strong>Meal Type: </strong>${recipe.mealType}</p>
  <p class="card-text"><strong>Preparation Time: </strong>${
    recipe.prepTimeMinutes
  } minutes</p>
  <p class="card-text"><strong>Servings: </strong>${recipe.servings}</p>
  <p class="card-text"><strong>Rating: </strong>${recipe.rating}</p>
  
  <hr>
  
  <p class="card-text"><strong>Ingredients: </strong>${recipe.ingredients.join(
    ", "
  )}</p>
  
  <hr>
  
  <p class="card-text"><strong>Instructions: </strong>${recipe.instructions}</p>
  <hr>
  <button onclick=DeleteRecipe(${recipe.id}) class='btn btn-danger'>Delete Recipe</button>
</div>
</div>
    </div>`;
    NewRecipe.innerHTML += cartHtml;
  });
}


function DeleteRecipe(id) {
    let warning = confirm(
      "Are you sure you want to delete this recipe? This action cannot be undone."
    );
    if (warning) {
      let deletedRecipe = document.querySelector(`#recipe${id}`);
      deletedRecipe.remove();
      let LocalData = JSON.stringify(localStorage.getItem("Recipes")) || []
    }
}

window.onload = function () {
  loadDataInPage();
}
