console.log("Sistema de consultas de dietetica");

let calorias = [120, 200, 150, 90];

for (let i = 0; i < calorias.length; i++) {
    console.log("Posicion:", i);
    console.log("Calorias del alimento:", calorias[i]);
}

console.log("----------------------------------------");


let alimentos = [120, 200, 150, 90];
let posicion = 2;
let nuevasCalorias = 180;

for (let i = 0; i < alimentos.length; i++) {
    console.log("Posicion:", i);
    console.log("Calorias:", alimentos[i]);

    if (posicion >= 0 && posicion < alimentos.length) {
        alimentos[posicion] = nuevasCalorias;
    } else {
        console.log("Posicion no valida");
    }
}
console.log("Nuevas calorias:", alimentos);

console.log("----------------------------------------");


let pacientes = [
    {id: 1, nombre: "Carlos", consultas: 3, edad: 25},
    {id: 2, nombre: "Maria", consultas: 2, edad: 30},
    {id: 3, nombre: "Alisson", consultas: 5, edad: 18},
];

for (let paciente of pacientes) {
    console.log("ID:", paciente.id);
    console.log("Nombre:", paciente.nombre);
    console.log("Consultas realizadas:", paciente["consultas"]);
    console.log("Edad:", paciente["edad"]);
}

console.log("----------------------------------------");


console.log("Registro de alimentos por paciente");

let registros = [
    {
        paciente: "Carlos",
        calorias: [120, 200, 150]
    },
    {
        paciente: "Maria",
        calorias: [100, 180, 220]
    },
    {
        paciente: "Alisson",
        calorias: [90, 150, 130]
    }
];

for (let registro of registros) {
    let totalCalorias = 0;

    console.log("Paciente:", registro.paciente);

    for (let caloria of registro.calorias) {
        console.log("Calorias del alimento:", caloria);
        totalCalorias += caloria;
    }

    console.log("Total de calorias registradas por", registro.paciente, "son:", totalCalorias);
}

console.log("----------------------------------------------------------------------------------");


let caloriasOriginales = [30, 50, 70, 40];

let caloriasDobles = caloriasOriginales.map(elemento => {
    return elemento * 2;
});

console.log("Calorias duplicadas:", caloriasDobles);


let validos = caloriasOriginales.filter(caloria => caloria >= 50);
console.log("Calorias filtradas:", validos);


let resultado = caloriasOriginales.reduce((acumulador, elemento) => {
    return acumulador + elemento;
});

console.log("Total de calorias:", resultado);
