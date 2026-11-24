const mensaje = document.getElementById("mensaje");
const saludo = document.getElementById("saludo");

mensaje.textContent = "Bienvenido a nuestro centro de dietetica";

saludo.innerHTML = "<h1>Tu salud es nuestra prioridad</h1>";


const ficha = document.getElementById("ficha");

ficha.innerHTML = `
<h1>FICHA DEL PACIENTE</h1>
<p>Nombre: Alisson Ormaza</p>
<p>Especialidad: Nutricion</p>
<p>Servicio: Consulta dietetica</p>
<p>Estado: Activo</p>
`;


const nombre = document.getElementById("nombre");
const saludar = document.getElementById("saludar");
const registrar = document.getElementById("registrar");

registrar.addEventListener("click", function() {

    console.log("Ejecutando click", nombre.value);

    saludar.textContent = "Bienvenido/a a tu consulta nutricional, " + nombre.value;

});
