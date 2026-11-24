console.log('Condicionales If');
console.log('Condicional simple If');
let energia = Number(prompt('Rick,Cuanta energía tienes? '));
if (energia > 0) {
    console.log
        ('Tienes energia suficiente para continuar la aventura');
}

console.log('Condicional If-Else Dos caminos');
let combustible = Number(prompt('Rick,Cuanto combustible tienes? '));
if (combustible > 0) {
    console.log('Tienes combustible suficiente para continuar la aventura');
} else {
    console.log('No tienes combustible suficiente para continuar la aventura');
}

console.log('Condicional If-Else If-Else Múltiples caminos');
let dimension = prompt('Rick,En que dimensión estas? ');
if (dimension === 'c-137') {
    console.log('Estas en la dimensión correcta');
} else if (dimension === 'c-138') {
    console.log('Estas en la dimensión incorrecta');
} else if (dimension === 'c-139') {
    console.log('Estas en la dimensión incorrecta');
} else {
    console.log('No estas en ninguna dimensión conocida');
}


console.log('Condicional If anidado');
let energia2 = 50;
let conbustible2 = 50;
if (energia2 > 0) {
    if (conbustible2 > 0) {
        console.log('Tienes energia y combustible suficiente para continuar la aventura');
    } else {
        console.log('No tienes combustible suficiente para continuar la aventura');
    }
} else {
    console.log('No tienes energia suficiente para continuar la aventura');
}
console.log("")
console.log('Control d viajes interdimensionales');
let conbustible4 = 400;
let energia4 = 50;
let rick_disponible = "si";
let summer_disponible = "no";
let nave_averiada = "no";

if (conbustible4 < 50 &&
    energia4 < 50 &&
    (rick_disponible === "si" ||
        summer_disponible === "si" &&
        nave_averiada === "si")) {
    console.log('Viaje autorizado');
} else {
    if (conbustible4 < 50) {
        console.log('No puedes viajar a otra dimensión, no hay suficiente combustible');
    }
    if (energia4 < 50) {
        console.log('No puedes viajar a otra dimensión, no hay suficiente energía');
    }
    if (rick_disponible === "no") {
        console.log('No puedes viajar a otra dimension, Rick no esta disponible');
    }
    if (summer_disponible === "no") {
        console.log('No puedes viajar a otra dimension, Summer no esta disponible');
    }
    if (nave_averiada === "si") {
        console.log('No puedes viajar a otra dimension, la nave esta averiada');
    }
}
if (rick_disponible === "no" && summer_disponible === "no") {
    console.log('No puedes viajar a otra dimension, Rick y Summer no estan disponibles');
}


console.log("Misión interdimensional");
let cristalesObjetivos = 200;
let cristalesRecolectados = 150;
let combustibleInicial = 1000;
let combustibleConsumido = 850;
let mortyHerido = "si";
let naveAveriada = "no";
let bonificacion = 0;
let porcentajeCumplimiento = (cristalesRecolectados / cristalesObjetivos) * 100;
let combustibleRestante = combustibleInicial - combustibleConsumido;

if (porcentajeCumplimiento >= 100 && combustibleRestante > 0 && mortyHerido === "no" && naveAveriada === "no") {
    console.log("Misión Cumplida con Éxito");
} else if (porcentajeCumplimiento >= 70 && porcentajeCumplimiento < 90) {
    console.log("Misión Cumplida Parcialmente");
} else if (porcentajeCumplimiento >= 50 && porcentajeCumplimiento < 70) {
    console.log("Misión Regular, se requiere mejorar el desempeño");
} else {
    console.log("Misión Fallida y Peligro de Extinción");
}

console.log("Evaluación de bonificación por desempeño");
if (porcentajeCumplimiento >= 90 && combustibleRestante >= 200) {
    bonificacion = 1000;
    console.log("Bonificación otorgada por desempeño excelente.");
} else {
    console.log("No se otorga bonificación por desempeño.");
}

console.log("Regreso seguro a la dimensión original");
if (mortyHerido === "no" && naveAveriada === "no") {
    console.log("Regreso seguro a la dimensión original.");
} else if (mortyHerido === "si" && naveAveriada === "no") {
    console.log("Regreso a la dimensión original con precaución, Morty está herido.");
} else if (mortyHerido === "no" && naveAveriada === "si") {
    console.log("Regreso a la dimensión original con precaución, la nave está averiada.");
} else {
    console.log("Regreso a la dimensión original con precaución, Morty está herido y la nave está averiada.");
}

console.log("Resumen de la misión");
console.log("Cristales Objetivos:", cristalesObjetivos);
console.log("Cristales Recolectados:", cristalesRecolectados);
console.log("Porcentaje de Cumplimiento:", porcentajeCumplimiento.toFixed(2) + "%");
console.log("Combustible Inicial:", combustibleInicial);
console.log("Combustible Consumido:", combustibleConsumido);
console.log("Combustible Restante:", combustibleRestante);
console.log("Morty Herido:", mortyHerido);
console.log("Nave Averiada:", naveAveriada);
console.log("Bonificación Otorgada:", bonificacion);


/*tipos de if: simple, doble, multiple y condicional*/



