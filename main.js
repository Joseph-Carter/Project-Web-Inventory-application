// for submit button of the form to enter information
    const form = document.querySelector('#form');
    //event to handle to form 
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        // create varibles
        const className = ["gameTitle", "companyTitle", "price", "stockOptions"];
        //grab error message
        const errorDisplay = document.querySelector("#errorMessage");
        let errMessages = [];
        const formData = {
            gameTitle: event.target.gameTitle.value,
            companyTitle: event.target.companyTitle.value,
            price: event.target.price.value,
            stockOptions: event.target.stockOptions.value,
        };
        console.log(formData)
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
            errMessages.push("Character's not accpted please entre real numbers.");
            event.target.price.value = "";
        }
        console.log(errorDisplay, errMessages)
        errMessages.forEach((error) => {
            console.log('creating error')
            let errorListItem = document.createElement('li');
            errorListItem.innerText = error
            errorDisplay.append(errorListItem);
        })
    })