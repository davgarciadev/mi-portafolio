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
const techIcons = document.querySelectorAll(".stacks__img")

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


//--- Icon highlight hover effect ---
techIcons.forEach(icon => {
  
    icon.addEventListener("mouseover", (e) => {
        var color = "";
        switch(e.target.dataset.tool){
            case "html":
                color = "#FF6D00";
                break;
            case "css":
                color = "#039BE5";
                break;
            case "js":
                color = "#FFD600";
                break;
            case "sass":
                color = "#F06292";
                break;
            case "node":
                color = "#4CAF50";
                break;
            case "python":
                color = "#FFC107";
                break;
            case "mysql":
                color = "#F57F17";
                break;
            case "mongo":
                color = "#4CAF50";
                break;
            case "git":
                color = "#F4511E";
                break;
            case "vscode":
                color = "#BA82F5";
                break;
            case "figma":
                color = "#29B6F6";
                break;
        }

        // Añadimos la sombra de color
        e.target.style.filter = `drop-shadow(0px 0px 10px ${color})`
        // Aumentamos la escala
        e.target.style.transform = "scale(1.1)"
    })
})

//--- Icon highlight mouseleave effect ---
techIcons.forEach(icon => {
    icon.addEventListener("mouseleave", (e) => {
        e.target.style.filter = `none`
        e.target.style.transform = "scale(1)"
    })
})
