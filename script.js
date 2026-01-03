"use strict";

/* =========================
   SIDEBAR TOGGLE (Show Contacts)
========================= */
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebarBtn) {
  sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });
}

/* =========================
   NAVIGATION TABS
========================= */
const navLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navLinks.forEach((btn) => {
  btn.addEventListener("click", () => {

    // remove active class from all buttons
    navLinks.forEach((link) => link.classList.remove("active"));
    btn.classList.add("active");

    const pageName = btn.innerText.toLowerCase();

    pages.forEach((page) => {
      if (page.dataset.page === pageName) {
        page.classList.add("active");
      } else {
        page.classList.remove("active");
      }
    });

    // close sidebar on mobile
    sidebar.classList.remove("active");

    // scroll top
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

/* =========================
   DEFAULT PAGE LOAD
========================= */
window.addEventListener("DOMContentLoaded", () => {
  navLinks[0].classList.add("active");
  pages[0].classList.add("active");
});
