const form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const className = [
    "gameTitle",
    "companyTitle",
    "price",
    "stockOptions, removeButton",
  ];

  const errorDisplay = document.querySelector("#errorMessage");
  errorDisplay.style.background = "transparent";
  errorDisplay.innerText = "";
  let errMessages = [];
  const formData = {
    gameTitle: event.target.gameTitle.value,
    gameImage: event.target.imageUrl.value,
    companyTitle: event.target.companyTitle.value,
    price: event.target.price.value,
    stockOptions: event.target.stockOptions.value,
  };
 
  for (let data in formData) {
    if (!formData[data]) {
      errMessages.push("Please fill out the entire form in order to proceed.");
      break;
    }
  }

  if (Number(formData.price) < 0) {
    errMessages.push("Please enter a real price point.");
    event.target.price.value = 0;
  }

  if (
    !/^["|']{0,1}[-]{0,1}\d{0,}(\.{0,1}\d+)["|']{0,1}$/.test(formData.price) &&
    !/\d+/.test(formData.price)
  ) {
    errMessages.push("Character's not accepted please entre real numbers.");
    event.target.price.value = "";
  }
  if (errMessages.length) {
    errorDisplay.style.background = "rgba(236, 95, 95, 0.192)";
    errMessages.forEach((error) => {
      let errorListItem = document.createElement("li");
      errorListItem.innerText = error;
      errorDisplay.append(errorListItem);
    });
  } else {

    const gameList = document.querySelector("#gameHolder");
    const formListItem = document.createElement("li");
    const gameNameTitle = document.createElement("h2");
    const gameImg = document.createElement("img");
    const gameCompany = document.createElement("h3");
    const gameContainer = document.createElement("div");
    const removeButton = document.createElement("button");
    let gameStock = document.createElement("p");
    const priceOfGame = document.createElement("p");
    gameImg.src = event.target.imageUrl.value;
    formListItem.classList.add("product");
    removeButton.classList.add("removeButton");
    removeButton.innerText = "Remove Game";
    removeButton.addEventListener("click", (event) => {
      formListItem.remove();
    });
    gameNameTitle.textContent = event.target.gameTitle.value;
    priceOfGame.textContent = event.target.price.value;
    gameCompany.textContent = event.target.companyTitle.value;
    gameStock.innerText = event.target.stockOptions.value;
    gameContainer.append(
      gameNameTitle,
      gameImg,
      priceOfGame,
      gameCompany,
      gameStock,
      removeButton
    );
    formListItem.append(gameContainer);
    gameList.append(formListItem);
  }
});

let inStock = true;
let stockHolder = document.querySelector(".stockHolder");
let stockButton = document.getElementById("changeStock");
stockButton.addEventListener("click", (event) => {
  inStock = !inStock;
  if (inStock) {
    stockHolder.innerText = "In Stock";
  } else {
    stockHolder.innerText = "Out Of Stock";
  }
});
