//  Nav bar Scroll
const nav = document.querySelector("nav");

let lastScrollPos = 0;
window.addEventListener("scroll", function () {
  const currentScrollPos = window.scrollY;

  if (currentScrollPos > lastScrollPos) {
    // Scrolling down
    nav.style.top = "-50%";
  } else {
    // Scrolling up
    nav.style.top = "0";
  }
  lastScrollPos = currentScrollPos;
});

//  Mobile Menu
const mobileMenu = document.querySelector(".menu-overlay");
const menuButton = document.querySelector(".hamburger-menu");

let isMenuOpen = false;

function showMenu() {
  isMenuOpen = true;
  mobileMenu.style.right = "0";
  menuButton.style.backgroundImage = "url(/assets/cross-icon.png)";
}

function hideMenu() {
  isMenuOpen = false;
  mobileMenu.style.right = "-100%";
  menuButton.style.backgroundImage = "url(/assets/menu-icon.png)";
}

function toggleMenu() {
  if (!isMenuOpen) {
    showMenu();
    console.log("Showing menu");
  } else {
    hideMenu();
    console.log("Hiding menu");
  }
}

function comingSoon(a) {
  a.textContent = "Coming Soon!";
  setTimeout(() => {
    a.textContent = "Ai Counselling";
  }, 1000);
}