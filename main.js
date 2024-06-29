// Importamos modulos (vite)
import './sass/app.scss'

// -- RESPONSIVE MENU -----
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


// ---- SKILLS TAB-BUTTON ANIMATION ----
// Referenciamos a los elementos del body
const tabBtnElements = document.querySelectorAll(".tab-buttons__tab-btn")
const stackContainer = document.querySelector(".about__stacks")
const lineElement = document.querySelector(".tab-buttons__line")

// Cada vez que clickemos en un botón mostramos el "stack" correspondiente
tabBtnElements.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        
        // Limpiamos y actualizamos los estilos para el boton activo
        tabBtnElements.forEach(btn => btn.classList.remove("tab-buttons__tab-btn--active"))
        e.target.classList.add("tab-buttons__tab-btn--active")


        // limpiamos todo el contenido del contenedor y mostramos aque que coincida con su data-tag
        Array.from(stackContainer.children).forEach(stack => {
        stack.classList.remove("stacks__stack--checked");
            
        let stackData = e.target.dataset.stack;
            if(stack.id === stackData){
                stack.classList.add("stacks__stack--checked")
            }

        })


        //Actualizamos la posicion y tamaño de la linea
        lineElement.style.width = e.target.offsetWidth+"px"
        lineElement.style.left = e.target.offsetLeft+"px"
        

    })
})


