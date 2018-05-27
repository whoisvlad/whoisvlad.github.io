/* Menu button */
var mainMenu = document.querySelector('.header-navigation');
var mobileMenuButton = document.querySelector('.menu-button');

mobileMenuButton.addEventListener('click', function(){
	mobileMenuButton.classList.toggle('close');
	mainMenu.classList.toggle('nav-open');
})


//W3 Scroll function
var navbar = document.getElementById("header");
var logo = document.getElementById("logo");
var sticky = logo.offsetTop;

function offsetTop() {
	if (window.pageYOffset >= sticky+50) {
		navbar.classList.add("sticky")
	} else {
		navbar.classList.remove("sticky");
	}
}