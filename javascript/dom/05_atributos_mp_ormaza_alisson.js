const personaje = document.getElementById("personaje");
const cambiar = document.getElementById("cambiar");
const verDimension = document.getElementById("verDimension");
const dimension = document.getElementById("dimension");

cambiar.addEventListener("click", function(){

    if(personaje.getAttribute("title") == "manzana"){

        personaje.setAttribute("src", "zanahoria.webp");
        personaje.setAttribute("title", "zanahoria");
        personaje.dataset.dimension = "Verduras";

    } else {

        personaje.setAttribute("src", "manzana.webp");
        personaje.setAttribute("title", "manzana");
        personaje.dataset.dimension = "Frutas";

    }

});

verDimension.addEventListener("click", function(){

    dimension.textContent = personaje.dataset.dimension;

});

const portal = document.getElementById("portal");
const activarPortal = document.getElementById("activarPortal");


activarPortal.addEventListener("click", function() {

    if (portal.textContent == "Consulta Nutricional Inactiva"){

        portal.style.backgroundColor = "green";
        portal.style.color = "white";
        portal.textContent = "Consulta Nutricional Activada";

    } else {

        portal.style.backgroundColor = "red";
        portal.style.color = "white";
        portal.textContent = "Consulta Nutricional Inactiva";

    }

});
