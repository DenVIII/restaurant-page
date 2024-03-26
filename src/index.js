import './styles/base.css'
import createHome from './pages/home'
import createMenu from './pages/menu'
import createInfo from './pages/info'

const homeBtn = document.querySelector('#home-btn')
const menuBtn = document.querySelector('#menu-btn')
const infoBtn = document.querySelector('#info-btn')

homeBtn.addEventListener('click', createHome)
menuBtn.addEventListener('click', createMenu)
infoBtn.addEventListener('click', createInfo)

createHome()