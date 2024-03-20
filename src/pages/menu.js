import menuData from './menu-positions.js'

function createMenu() {
    const content = document.querySelector('#content')

    const menu = document.createElement('div')
    const title = document.createElement('h2')

    menu.classList.add('menu')
    title.classList.add('title')

    title.textContent = "Our Menu:"

    menuData.forEach(position => {
        menu.appendChild(createMenuPosition(position.title, position.text, position.price))
    })

    content.appendChild(menu)
}

function createMenuPosition(title, text, price) {
    const position = document.createElement('div')
    const dishImg = document.createElement('img')
    const description = document.createElement('div')
    const positionTitle = document.createElement('h3')
    const positionText = document.createElement('p')
    const positionPrice = document.createElement('p')

    position.classList.add('menu-position')

    dishImg.src = `./images/menu/${title.toLowerCase()}.jpg`
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

