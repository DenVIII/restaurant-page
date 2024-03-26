import '../styles/menu.css'
import turkeyImg from '../img/menu/turkey.jpg'
import fruitSaladImg from '../img/menu/fruit-salad.jpg'
import chefsSpecialImg from '../img/menu/chef\'s-special.jpg'
import menuData from '../data/menu-positions.js'

const imgArray = [turkeyImg, fruitSaladImg, chefsSpecialImg]

function createMenu() {
    console.log(12)
    const content = document.querySelector('#content')
    content.textContent = ''

    const menu = document.createElement('div')
    const title = document.createElement('h2')

    menu.classList.add('menu')
    title.classList.add('title')

    title.textContent = "Our Menu:"

    menuData.forEach((position, index) => {
        menu.appendChild(createMenuPosition(position.title, position.text, position.price, index))
    })

    content.appendChild(menu)
}

function createMenuPosition(title, text, price, i) {
    const position = document.createElement('div')
    const dishImg = document.createElement('img')
    const description = document.createElement('div')
    const positionTitle = document.createElement('h3')
    const positionText = document.createElement('p')
    const positionPrice = document.createElement('p')

    position.classList.add('menu-position')

    if (i % 2 === 0) {
        position.classList.add('left')
    } else {
        position.classList.add('right')
    }

    dishImg.src = imgArray[i]
    dishImg.alt = `Image of ${title}`
    dishImg.classList.add ('menu-position-img')

    positionTitle.textContent = title
    positionText.textContent = text
    positionPrice.textContent = price

    description.classList.add('menu-position-descr')
    positionTitle.classList.add('menu-position-title')
    positionText.classList.add('menu-position-text')
    positionPrice.classList.add('menu-position-price')

    description.append(positionTitle, positionText, positionPrice)
    position.append(dishImg, description)

    return position
}

export default createMenu

