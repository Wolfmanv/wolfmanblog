

const bar = document.querySelector('.hamburger')

const navbar = document.querySelector('ul')

const navbar2 = document.querySelector('.active')

const shadow = document.querySelector('.shadowBar')

const button = document.querySelector('i')


function dropNavbar () {
    navbar.classList.toggle('active')
    
}




function rotateBurger () {
    if (navbar.classList.contains('active')) 
        button.style.rotate = '0deg'
    else {
        button.style.rotate = '180deg'
    }
     
    }

function dropShadow() {
    navbar.classList.toggle('shadowBar')
}



bar.addEventListener('click', dropNavbar)
button.addEventListener('click', rotateBurger)
bar.addEventListener('click', dropShadow)