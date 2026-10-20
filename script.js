const toggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("site-nav");
const overlay = document.querySelector(".overlay");

function setNav(open) {
  nav.classList.toggle("open", open);
  overlay.classList.toggle("show", open);
  toggle.setAttribute("aria-expanded", open);
}

// open / close with the button
toggle.addEventListener("click", () => setNav(!nav.classList.contains("open")));

// tap outside the menu to close
overlay.addEventListener("click", () => setNav(false));

// close after choosing a link
nav
  .querySelectorAll("a")
  .forEach((link) => link.addEventListener("click", () => setNav(false)));

// Escape closes it
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setNav(false);
});

// reset if the screen grows to desktop width while the menu is open
window.matchMedia("(min-width: 900px)").addEventListener("change", (e) => {
  if (e.matches) setNav(false);
});
