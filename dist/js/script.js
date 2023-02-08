// Navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header')
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed')
    } else {
        header.classList.remove('navbar-fixed')
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
})

// klik diluar sidebar untuk menghilangkan nav
const hamburgeLine = document.querySelector
('.hamburger-line');

document.addEventListener('click', function(e) {
    if(!hamburgeLine.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active')
    }
})