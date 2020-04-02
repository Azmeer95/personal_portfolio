// Select DOM Items
// Selects the classes
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
// Takes all the nav items
const navItems = document.querySelectorAll(".nav-item");

// Set Initial State Of Menue
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    // Close the menu after clicking (adds close-class upon clicking automatically)
    menuBtn.classList.add("close");
    // Show the nav items
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    // Show the nav items. 'item' to represent each item
    navItems.forEach(item => item.classList.add("show"));

    // Show Menu State
    showMenu = true;
  } else {
    // Do the opposite of if-clause
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    // Set Menu State
    showMenu = false;
  }
}
