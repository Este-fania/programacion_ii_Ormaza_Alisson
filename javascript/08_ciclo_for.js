console.log ("ciclo for");
for (let i = 1; i <= 5; i++) {
    console.log("El valor de i es: " + i);
}

console.log ("cuenta regresiva despegue de la nave morty");
for (let i = 10; i >= 0; i--) {
    console.log("faltan " + i + " segundos para el despegue de la nave");
}

console.log("cuenta regresiva despegue de la nave morty con mensaje de despegue");
for (let i = 10; i >= 0; i--) {
    if (i === 0) {
        console.log("Despegue en curso de la nave Morty");
    } else {
        console.log("faltan " + i + " segundos para el despegue de la nave");
    }
}

console.log("Nivel de energia de Rick");
let energia = 50;
for (let i = 0; i <= 100; i += 10) {
    if (energia >= i){
        console.log("Nivel de energia de Rick: " + i + "%");    
    }
}


let consumoPorViaje = 10;
let totalconsumo = 0;
for (let viaje = 1; viaje <= 5; viaje++) {
    totalconsumo += consumoPorViaje;
    console.log("viaje " + viaje);
    console.log("total consumido:" + totalconsumo + " unidades");

}
console.log("total consumido:" + totalconsumo + " unidades");

console.log("promedio de los cristales");
let totalCristales = 0;
let dias = 7;
for (let dia = 1; dia <= dias; dia++) {
    let cristales = dia *5+5;
    totalCristales += cristales;
    console.log("Dia " + dia + ": " + cristales + " cristales recolectados");
}
console.log("total de cristales recolectados:" + totalCristales);
console.log("promedio de cristales por dia:" + (totalCristales / dias).toFixed(2));


console.log("Dimensiones Peligrosas");
let seguras =0;
let peligrosas =0;
for (let dimension = 1; dimension <= 10; dimension++) {
    if (dimension % 2 === 0) {
        console.log("Dimension " + dimension + " es peligrosa");
        peligrosas++;
    } else {
        console.log("Dimension " + dimension + " es segura");
        seguras++;
    }
}
console.log("Total de dimensiones seguras: " + seguras);
console.log("Total de dimensiones peligrosas: " + peligrosas);


console.log("recoleccion de cristales de morty");
let crsitales =[35, 60, 45, 80,70,90,55];
let total =0;
let viajesexitosos =0;
for (let i = 0; i < crsitales.length; i++) {
    total += crsitales[i];
    console.log("Viaje " + (i + 1) + ": " + crsitales[i] + " cristales recolectados");
    if (crsitales[i] >= 40) {
        viajesexitosos++;
    } else {
        console.log("Viaje " + (i + 1) + " no fue exitoso, se recolectaron menos de 40 cristales");
    }
}

console.log("Total de cristales recolectados: " + total);
console.log("Viajes exitosos: " + viajesexitosos);

for (let cristal of crsitales) {
    if (cristal >= 50) {
        console.log("Viaje exitoso, se recolectaron 50 cristales");
    }
}

console.log("recorrer personajes con for...of");
let personajes = ['Rick', 'Morty', 'Summer', 'Beth', 'Jerry'];
for (let personaje of personajes) {
    console.log("Personaje: " + personaje);
}


let nave = {
    nombre: 'Nave de Rick',
    combustible: '1000',
    velocidad: 500,
    tripulantes: ['Rick', 'Morty', 'Summer']
};

console.log("recorrer propiedades de la nave con for...in");
for (let propiedad in nave) {
    console.log(propiedad + ": " + nave[propiedad]);
    if (propiedad === 'tripulantes') {
        console.log("Tripulantes de la nave:");
        for (let tripulante of nave[propiedad]) {
            console.log("- " + tripulante);
        }
    }
}

let misiones = [
    { nombre: 'Misión 1', cristales: 50, meta: 100, personajes:"Rick" },
    { nombre: 'Misión 2', cristales: 30, meta: 100, personajes:"Morty" },
    { nombre: 'Misión 3', cristales: 70, meta: 100, personajes:"Summer" }
];

let exitosas = 0;
for (let mision of misiones) {
    let porcentaje = (mision.cristales / mision.meta) * 100;
    console.log(mision.nombre + "completada por" +mision.personajes + "con un" + porcentaje.toFixed(2) + "% de cristales recolectados");
    if (porcentaje >= 90) {
        exitosas++;
    }else { console.log(mision.nombre + " no fue exitosa, se recolectaron menos del 90% de cristales");}
}
console.log("Total de misiones exitosas: " + exitosas);


console.log("uso de btreak y continue en un ciclo for");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Se ha alcanzado el valor 5, se detiene el ciclo");
        break;
    }
    console.log("El valor de i es: " + i);
}

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log("numero par encontrado: " + i + ", se omite este valor ");
        continue;
    }
    console.log("El valor impar es: " + i);
}

for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        console.log("Se ha alcanzado el valor 7, se detiene el ciclo");
        break;
    }
    if (i % 2 === 0) {
        console.log("numero par encontrado: " + i + ", se omite este valor ");
        continue;
    }
    console.log("El valor impar es: " + i);
}

