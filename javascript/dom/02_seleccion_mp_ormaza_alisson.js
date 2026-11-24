const energia = document.getElementById("energia");
const dimension = document.getElementById("dimesion");
const portal = document.getElementById("portal");
energia.textContent = "Bienestar nutricional: 100%";
dimension.textContent = "Paciente: Alisson";
portal.textContent = "Consulta: Activada";

// Seleccion a traves del nombre de clase
const personaje = document.querySelector(".personaje");
personaje.textContent = "Alisson - Paciente";

const h2Objeto = document.querySelector("h2");
h2Objeto.textContent = "Preparando consulta nutricional";

const universo = document.querySelector("#universo");
universo.textContent = "Evaluacion nutricional lista";

const estadoMorty = document.querySelector("#morty .estado");
estadoMorty.textContent = "Estado nutricional: En evaluacion";

// Seleccion de grupos alimenticios
const planetas = document.querySelectorAll(".planetas");

console.log(planetas);
console.log(planetas.length);

console.log(planetas[0].textContent);
console.log(planetas[1].textContent);
console.log(planetas[2].textContent);
console.log(planetas[3].textContent);
console.log(planetas[4].textContent);
console.log(planetas[5].textContent);


console.log("Recorrer otra vez con for");

for (let i = 0; i < planetas.length; i++) {
    console.log(planetas[i].textContent);
}

console.log("Con forEach");

planetas.forEach(function(planeta) {
    console.log(planeta.textContent);
});

console.log("Con for of");

for (let planeta of planetas) {
    console.log(planeta.textContent);
}
