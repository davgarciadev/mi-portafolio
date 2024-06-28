// Importamos modulos (vite)
import './sass/app.scss'
// Referenciamos a los elementos del body
const menuIconElement = document.querySelector(".header__menu-icon");
const menuElement = document.querySelector(".main-nav");
const menuItemsElement = document.querySelectorAll(".main-nav__item");

// Cuando hacemos click en el icono del menu lo desplegamos
menuIconElement.addEventListener("click", function(e){
    menuElement.classList.toggle("selected")
})

// Si el menu esta desplegado y hacemos click en cualquier enlace plegamos el menu
menuItemsElement.forEach(item => {
    item.addEventListener("click", () => {
        console.log("hola")
        if(menuElement.classList.contains("selected")){
            menuElement.classList.remove("selected")
        }
    })
})




