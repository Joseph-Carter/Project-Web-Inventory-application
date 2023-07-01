// for submit button of the form to enter information
function submitGame() {
    const form = document.querySelector('.wrapper');
    //event to handle to form 
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        // create varibles
        const classname = ["gameTitle", "companyTitle", "price", "stockOptions"];
        //grab error message
        const error = document.querySelector("#errorMessage");
        let errmessages = [];
        const allData = [];
        allData.push(event.target.game_title.value);
        allData.push(event.target.company_title.value);
        allData.push(event.target.price.value);
        allData.push(event.target.stock_options.value);
        //fires off error message if any field of the form is not filled out
        for (let data of allData) {
            if (!data) {
                errmessages.push("Please fill out the entire form in order to proceed.")
                ping = false
                break;
            }
        }
        //checking if price is an actual number 
        if (Number(allData[2]) < 0) {
            errmessages.push("Please enter a real price point.");
            event.target.price.value = 0;
        }
        // Checking to see if numbers were actually entered and not characters
        if(!/^["|']{0,1}[-]{0,1}\d{0,}(\.{0,1}\d+)["|']{0,1}$/.test(arrData[2]) && !/\d+/.test(arrData[2])){
            errMsg.push("Character's not accpted please entre real numbers.");
            event.target.price.value = "";
        }
        if(flag) {
            // erase error msg block 
            errmessages.textContent = "";
            errmessages.setAttribute("style","display:none;")
        }
    })
}