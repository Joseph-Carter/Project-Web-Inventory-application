const wrapper = document.getElementById('wrapper')
const Img = wrapper.querySelector('.bethesda')
const money = wrapper.querySelector('.money')
let input = document.createElement('input')
let body = document.querySelector('body')

Image.src = 'https://exputer.com/wp-content/uploads/2023/06/Starfield_Premium_VanityImage_mobile.jpg'

money.textContent = '$99.99'

let errorMessage = document.createElement('p')
errorMessage.style.backgroundColor = 'Red'
errorMessage.style.color = 'White'

const form = wrapper.querySelector('form')
form.classList.add('form')
const priceForm = document.createElement('form')
const dropDown = document.createElement('button')
dropDown.classList.add('dropbtn')
dropDown.textContent = 'Dropdown'
const forDropdown = document.createElement('div')
forDropdown.classList.add('dropdown-content')
dropDown.append(forDropdown)
//maybe loop here for anchor tag for dropdown options
const description = document.createElement('form')


const button = document.createElement('button')
button.textContent = 'Submit'
button.style.backgroundColor = 'Red'
button.style.color = 'White'
button.type = 'button'

form.append(input)
form.append(button)
input.classList.add('input')
input.type = 'text'
input.placeholder = 'Name of game'
input.name = 'Game'


body.appendChild(errorMessage)

let ul = document.createElement('ul')

function generateGame(game) {
    let li = document.createElement('li');
    li.style.cursor = 'pointer';
    li.innerText = game;

}

// button.addEventListener('click' (event) => {

// })