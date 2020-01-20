const mainNav = document.querySelector('.main-nav');
const menuBtn = document.querySelector('.menu-btn');

let menuBg = document.querySelector('.open-bg');

// Open/Close full menu
menuBtn.addEventListener('click', function () {
    mainNav.classList.toggle('main-nav--open');
    menuBtn.classList.toggle('menu-btn--open');
})


// Close full menu if click transparent part
menuBg.addEventListener('click', function () {
    mainNav.classList.remove('main-nav--open');
    menuBtn.classList.remove('menu-btn--open');
})

// Close full menu with ESC-button
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (mainNav.classList.contains("main-nav--open")) {
            mainNav.classList.remove("main-nav--open");
            menuBtn.classList.remove('menu-btn--open');
        }
    }
})





// Scroll to top
let goTopBtn = document.querySelector('.page-up');

goTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})


// Add/Remove class on scroll
let scrollPosition = window.scrollY;
let offsetSize = 100;

window.addEventListener('scroll', function() {

    scrollPosition = window.scrollY;

    if (scrollPosition >= offsetSize) {
        goTopBtn.classList.add('page-up--visible');
    } else {
        goTopBtn.classList.remove('page-up--visible');
    }

});