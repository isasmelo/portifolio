document.querySelector("#btn").addEventListener("click", () => {
  html = document.body.classList.toggle("light")
})

const menu = document.querySelector(".mobile__menu__icon")
const navlist = document.querySelector(".nav__list")


menu.addEventListener("click", () => {
  menu.classList.toggle("active")
  navlist.classList.toggle("active")

})
