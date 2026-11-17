
console.log("Sistema de consultas de dietetica");
function iniciarconsulta() {
    console.log("Iniciando consulta nutricional...");
}
iniciarconsulta();

function registrarPaciente(nombre) {
    console.log(nombre + " ha sido registrado para su consulta nutricional");
}
registrarPaciente("Carlos");


function calcularHidratacion(agua, cantidad) {
    let aguatotal = agua + cantidad;
    if (aguatotal > 100) {
        aguatotal = 100;
    }
    console.log("Nivel de hidratacion registrado: " + aguatotal + "%");
    return aguatotal;
}
let hidratacion = 50;
hidratacion = calcularHidratacion(hidratacion, 30);
hidratacion = calcularHidratacion(hidratacion, 40);

console.log("Calcular descuentos en consultas");
function calcularDescuento(precio, descuento) {
    let precioFinal = precio - (precio * descuento / 100);
    return precioFinal;
}
let precioOriginal = 100;
let porcentajeDescuento = 20;
let precioConDescuento = calcularDescuento(precioOriginal, porcentajeDescuento);
console.log("Precio original: " + precioOriginal + 
    " precio con descuento: " + precioConDescuento);

function evaluarConsulta(agua, habitosSaludables, totalHabitos) {
    let porcentajeSaludable = (habitosSaludables / totalHabitos) * 100;

    if (agua < 20) {
        console.log("ADVERTENCIA: Consumo de agua bajo. Nivel actual: " + agua + "%");
    }

    if (porcentajeSaludable >= 70) {
        console.log("Evaluacion positiva. Habitos saludables: " + porcentajeSaludable + "%");
    } else {
        console.log("Se recomienda mejorar los habitos alimenticios. Porcentaje: " + porcentajeSaludable + "%");
    }
}

function objetivoCumplido(habitos) {
    let objetivo = 50;

    if (habitos >= objetivo) {
        console.log("Objetivo nutricional cumplido. Habitos registrados: " + habitos);
    } else {
        console.log("Objetivo nutricional pendiente. Habitos registrados: " + habitos);
    }
}
