const bar = document.querySelector('.hamburger');

const navbar = document.querySelector('ul');

const navbar2 = document.querySelector('.active');

const shadow = document.querySelector('.shadowBar');

const button = document.querySelector('i');

const menuItem = document.querySelectorAll('.link');

const nav = document.querySelector('.nav')

function dropNavbar() {
	navbar.classList.toggle('active');
}

function rotateBurger() {
	if (navbar.classList.contains('active')) button.style.rotate = '0deg';
	else {
		button.style.rotate = '180deg';
	}
}

menuItem.forEach(function (menuItem) {
	menuItem.addEventListener('click', dropNavbar);
});

// const navShadow = () => {
// 	if(window.scrollY >= 1000) {
// 		nav.classList.add('navbar__color')
// } else {
// 	nav.classList.remove('navbar__color')
// }
// }

bar.addEventListener('click', dropNavbar);
button.addEventListener('click', rotateBurger);
// window.addEventListener('scroll', navShadow)
