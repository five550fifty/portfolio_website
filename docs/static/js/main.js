// Footer year
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// Burger menu
const burger = document.querySelector(".burger");
const nav = document.querySelector("[data-nav]");

if (burger && nav) {
  burger.addEventListener("click", () => {
    const open = nav.classList.toggle("nav--open");
    burger.setAttribute("aria-expanded", String(open));
  });

  nav.addEventListener("click", (e) => {
    if (e.target.classList && e.target.classList.contains("nav__link")) {
      nav.classList.remove("nav--open");
      burger.setAttribute("aria-expanded", "false");
    }
  });
}

// Theme toggle (persist in localStorage)
const themeBtn = document.getElementById("themeBtn");
const root = document.documentElement;

function setTheme(t) {
  root.setAttribute("data-theme", t);
  localStorage.setItem("theme", t);
}

const saved = localStorage.getItem("theme");
if (saved === "light" || saved === "dark") setTheme(saved);

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") || "dark";
    setTheme(current === "dark" ? "light" : "dark");
  });
}
