// for submit button of the form to enter information
function submitGame() {
    const form = document.querySelector('.wrapper');
    //event to handle to form 
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        // create varibles
        const classname = ["game_title", "company_title", "price", "stock_options"];
        //grab error message
        const error = document.querySelector("#errorMessage");
        //ping = for controller
        let ping = true
        let errmessages = [];
        const allData = [];
        allData.push(event.target.game_title.value);
        allData.push(event.target.company_title.value);
        allData.push(event.target.price.value);
        allData.push(event.target.stock_options.value);
        //fires off error message if any field of the form is not filled out
        
    })
}