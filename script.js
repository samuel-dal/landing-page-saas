const menuBtn = document.querySelector('.menu');
const mobileNav = document.querySelector('.hide-on-desktop');
const navBar =  document.querySelectorAll('nav li');

const openMenu = () => {
 mobileNav.style.top = 'var(--header-height)';
 menuBtn.textContent = '✖';
}

const closeMenu = () => {
 mobileNav.style.top = '-100%';
 menuBtn.textContent = '☰';

}

const toggleMenu = () => {
 menuBtn.textContent === '☰' ? openMenu() : closeMenu();
}

navBar.forEach(nav => {
 nav.addEventListener('click', (e) => {
  closeMenu();
 })
});

menuBtn.addEventListener('click', () => {
 toggleMenu();
});

