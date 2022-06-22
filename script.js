"use strict";
const navbar = document.querySelector(".navbar");
const collapseBtn = document.querySelector(".collapse");
collapseBtn.addEventListener("click", function () {
  navbar.classList.toggle("show-menu");
  console.log(navbar);
});
