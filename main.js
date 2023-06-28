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

const button = document.createElement('button')
button.textContent = 'Remove'
button.style.backgroundColor = 'Red'
button.style.color = 'White'
button.type = 'Remove'

// form.appendChild(button)
form.append(input)
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