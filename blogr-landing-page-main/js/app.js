// Variables
const navMenus = [...document.getElementsByClassName('nav__item--title')];
const navItems = [...document.getElementsByClassName('nav__item')]
let dropped
const menuIcon = document.querySelector('.menu__icon--img')
let showed
const navWrapper = document.querySelector('.nav__wrapper')




// functions

// Dropdown function
function dropdownP() {
    let navItem = this.parentElement
    let dropdown = this.nextElementSibling
    if (!dropped) {
        navItem.classList.add('h-auto')
        dropdown.classList.add('dropped')
        this.classList.add('arrow__rotate')
        dropped = true
        console.log(dropped)
    } else if(dropped) {
        navItem.classList.remove('h-auto')
        dropdown.classList.remove('dropped')
        this.classList.remove('arrow__rotate')
        dropped = false
    }
    
    console.log(dropdown)
}

// Mobile menu 
function showMenu() {
    if (!showed) {
        showed = true
        menuIcon.setAttribute('src', 'images/icon-close.svg')
        navWrapper.classList.add('translate__0')
    } else {
        showed = false
        menuIcon.setAttribute('src', 'images/icon-hamburger.svg')
        navWrapper.classList.remove('translate__0')
    }
}




// Events Listeners
navMenus.map(navMenu => {
    navMenu.addEventListener('click', dropdownP)
})

menuIcon.addEventListener('click', showMenu)


