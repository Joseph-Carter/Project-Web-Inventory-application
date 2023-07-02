// for submit button of the form to enter information
    const form = document.querySelector('#form');
    //event to handle to form 
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        // create varibles
        const className = ["gameTitle", "companyTitle", "price", "stockOptions, removeButton"];
        //grab error message
        const errorDisplay = document.querySelector("#errorMessage");
        let errMessages = [];
        const formData = {
            gameTitle: event.target.gameTitle.value,
            gameImage: event.target.imageUrl.value,
            companyTitle: event.target.companyTitle.value,
            price: event.target.price.value,
            stockOptions: event.target.stockOptions.value,
        };
        //fires off error message if any field of the form is not filled out
        for (let data in formData) {
            if (!formData[data]) {
                errMessages.push("Please fill out the entire form in order to proceed.")
                break;
            }
        }
        //checking if price is an actual number 
        if (Number(formData.price) < 0) {
            errMessages.push("Please enter a real price point.");
            event.target.price.value = 0;
        }
        // Checking to see if numbers were actually entered and not characters
        if(!/^["|']{0,1}[-]{0,1}\d{0,}(\.{0,1}\d+)["|']{0,1}$/.test(formData.price) && !/\d+/.test(formData.price)){
            errMessages.push("Character's not accepted please entre real numbers.");
            event.target.price.value = "";
        }
        errMessages.forEach((error) => {
                let errorListItem = document.createElement('li');
                errorListItem.innerText = error
                errorDisplay.append(errorListItem);
        })
        //creates listed items
        const gameList = document.querySelector('#gameHolder');
        const formListItem = document.createElement('li')
        const gameNameTitle = document.createElement('h2');
        const gameImg = document.createElement('img');
        const gameCompany = document.createElement('h3');
        const gameContainer = document.createElement('div');
        const removeButton = document.createElement('button')
        let gameStock = document.querySelector('#stockOptions')
        const priceOfGame = document.createElement('span')
        gameImg.src = event.target.imageUrl.value
        formListItem.classList.add('product')
        removeButton.type = 'remove'
        gameNameTitle.textContent = event.target.gameTitle.value;
        priceOfGame.textContent = event.target.price.value;
        gameCompany.textContent = event.target.companyTitle.value;
        gameStock = event.target.stockOptions.value;
        gameContainer.append(gameNameTitle, gameImg, priceOfGame, gameCompany, gameStock, removeButton);
        formListItem.append(gameContainer);
        gameList.append(formListItem);
    
    })