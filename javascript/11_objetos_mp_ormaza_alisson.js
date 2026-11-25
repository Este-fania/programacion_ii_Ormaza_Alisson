
let nombre = "Carlos Perez";
let edad = 25;
let objetivo = "Mejorar alimentacion";
let hidratacion = 100;
let seguimiento = false;

let paciente = {
    nombre: "Carlos Perez",
    edad: 25,
    objetivo: "Mejorar alimentacion",
    hidratacion: 100,
    seguimiento: false
}

console.log("Informacion del paciente:");
console.log("Nombre del paciente: " + paciente.nombre);
console.log("Edad del paciente: " + paciente["edad"]);
console.log("Objetivo nutricional: " + paciente["objetivo"]);
console.log("Nivel de hidratacion: " + paciente["hidratacion"] + "%");
console.log("Estado del seguimiento: " + paciente["seguimiento"]);
console.log("Datos del paciente", paciente);


console.log("Agregar nuevas propiedades al paciente");
paciente.dieta = "Alimentacion equilibrada";
console.log("Tipo de dieta: " + paciente.dieta);

paciente["consultasRealizadas"] = 3;
console.log("Consultas realizadas: " + paciente["consultasRealizadas"]);

console.log("Datos del paciente", paciente);


console.log("Actualizar informacion del paciente");
paciente.hidratacion = 80;
console.log("Nuevo nivel de hidratacion: " + paciente.hidratacion + "%");

paciente["seguimiento"] = true;
console.log("Estado del seguimiento: " + (paciente.seguimiento ? "Activo" : "Inactivo"));

console.log("Datos del paciente", paciente);


console.log("Eliminar propiedades del paciente");
delete paciente.consultasRealizadas;
console.log("Propiedad 'consultasRealizadas' eliminada");

console.log("Datos del paciente", paciente);


console.log("Recorrer las propiedades del paciente");
for (let propiedad in paciente) {
    console.log(propiedad + ": " + paciente[propiedad]);
}

console.log("Datos del paciente", paciente);

let productos = {
    avena: 15,
    frutas: 20,
    verduras: 30
}

console.log("Calculo de unidades de productos en el consultorio");

for (let totalunidades in productos) {
    console.log(totalunidades + ": " + productos[totalunidades]);
}

let total = productos.avena + productos.frutas + productos.verduras;

console.log("Total de productos disponibles: " + total);
