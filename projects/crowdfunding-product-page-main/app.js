const menu = document.querySelector(".icon-menu");
const menu_img = document.querySelector(".icon-menu img");
const nav = document.querySelector(".header nav");
menu.addEventListener("click", () => {
  if (nav.style.transform == "translateX(0%)") {
    nav.style.transform = "translateX(-100%)";
    menu_img.setAttribute("src", "./images/icon-hamburger.svg");
  } else {
    nav.style.transform = "translateX(0%)";
    menu_img.setAttribute("src", "./images/icon-close.svg");
  }
});
const modal = document.querySelector(".modal-container");
const back_project = document.querySelector("#header-btn");

back_project.addEventListener("click", () => {
  modal.style.display = "block";
});
