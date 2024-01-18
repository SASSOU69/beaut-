const menuBurger =document.queryselector(".menu-burger")
const navLinks =
document.querySelector(".nav-links")

menuBurger .addEventListener("click", ()=>{
    navLinks.classLight.toggle("menu-mobile")
})