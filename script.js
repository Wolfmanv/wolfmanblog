const bar = document.querySelector('.hamburger');

const navbar = document.querySelector('ul');

const navbar2 = document.querySelector('.active');

const shadow = document.querySelector('.shadowBar');

const button = document.querySelector('i');

const menuItem = document.querySelectorAll('.link');

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
// function dropShadow() {
// 	navbar.classList.toggle('shadowBar');
// }

// const date = new Date();
// var current_date = date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear();

// document.getElementById('date-time').innerHTML = current_date;

bar.addEventListener('click', dropNavbar);
button.addEventListener('click', rotateBurger);
