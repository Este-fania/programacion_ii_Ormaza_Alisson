console.log(document);

const titulo = document.getElementById("titulo");
console.log(titulo);

titulo.textContent = "Centro de Dietética y Nutrición";

const estado = document.getElementById("estado");
const boton = document.getElementById("botonportal");

boton.addEventListener("click", function() {
    console.log("Ejecutando click...");

    estado.textContent = "SERVICIO DE CONSULTAS ACTIVADO";

    console.log("Estado del servicio actualizado");

    alert("El servicio de dietética está activado");
});

const boton1 = document.getElementById("listo");

boton1.addEventListener("click", function() {
    estado.textContent = "CONSULTA NUTRICIONAL LISTA";

    alert("¡Bienvenido! Tu consulta nutricional está lista");
});

let consultas = 0;

const contador = document.getElementById("contador");
const nuevoViaje = document.getElementById("nuevoViaje");

nuevoViaje.addEventListener("click", function() {
    consultas += 1;

    contador.textContent = consultas;

    alert("Nueva consulta registrada");
});
