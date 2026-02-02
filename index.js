const btnMenuMobile = document.querySelector(".fa-bars")
const menu = document.querySelector(".menu")

btnMenuMobile.addEventListener("click", ()=>{
  menu.classList.toggle("hidden")
  btnMenuMobile.classList.toggle("fa-bars")
  btnMenuMobile.classList.toggle("fa-xmark")
})