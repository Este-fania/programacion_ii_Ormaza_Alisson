console.log ("ciclo for");
for (let i = 1; i <= 5; i++) {
    console.log("Numero de consulta: " + i);
}

console.log ("cuenta regresiva para iniciar la consulta dietetica");
for (let i = 10; i >= 0; i--) {
    console.log("faltan " + i + " segundos para iniciar la consulta");
}

console.log("cuenta regresiva para iniciar la consulta con mensaje de inicio");
for (let i = 10; i >= 0; i--) {
    if (i === 0) {
        console.log("La consulta dietetica ha comenzado");
    } else {
        console.log("faltan " + i + " segundos para iniciar la consulta");
    }
}

console.log("Nivel de cumplimiento de objetivos nutricionales");
let cumplimiento = 50;
for (let i = 0; i <= 100; i += 10) {
    if (cumplimiento >= i){
        console.log("Nivel de cumplimiento nutricional: " + i + "%");    
    }
}


let consumoPorDia = 10;
let totalconsumo = 0;
for (let dia = 1; dia <= 5; dia++) {
    totalconsumo += consumoPorDia;
    console.log("Dia " + dia);
    console.log("Total de vasos de agua consumidos:" + totalconsumo + " vasos");

}
console.log("Total de vasos de agua consumidos:" + totalconsumo + " vasos");

console.log("promedio de consultas realizadas");
let totalConsultas = 0;
let dias = 7;
for (let dia = 1; dia <= dias; dia++) {
    let consultas = dia *5+5;
    totalConsultas += consultas;
    console.log("Dia " + dia + ": " + consultas + " consultas realizadas");
}
console.log("total de consultas realizadas:" + totalConsultas);
console.log("promedio de consultas por dia:" + (totalConsultas / dias).toFixed(2));


console.log("Clasificacion de habitos alimenticios");
let saludables =0;
let porMejorar =0;
for (let habito = 1; habito <= 10; habito++) {
    if (habito % 2 === 0) {
        console.log("Habito " + habito + " necesita mejorar");
        porMejorar++;
    } else {
        console.log("Habito " + habito + " es saludable");
        saludables++;
    }
}
console.log("Total de habitos saludables: " + saludables);
console.log("Total de habitos por mejorar: " + porMejorar);


console.log("Registro de consultas de pacientes");
let consultas =[35, 60, 45, 80,70,90,55];
let total =0;
let consultasExitosas =0;
for (let i = 0; i < consultas.length; i++) {
    total += consultas[i];
    console.log("Consulta " + (i + 1) + ": " + consultas[i] + " minutos de duracion");
    if (consultas[i] >= 40) {
        consultasExitosas++;
    } else {
        console.log("Consulta " + (i + 1) + " fue menor a 40 minutos");
    }
}

console.log("Total de minutos de consultas: " + total);
console.log("Consultas exitosas: " + consultasExitosas);

for (let duracion of consultas) {
    if (duracion >= 50) {
        console.log("Consulta completa, tuvo una duracion de 50 minutos o mas");
    }
}

console.log("recorrer pacientes con for...of");
let pacientes = ['Carlos', 'Maria', 'Ana', 'Pedro', 'Sofia'];
for (let paciente of pacientes) {
    console.log("Paciente: " + paciente);
}


let consultorio = {
    nombre: 'Consultorio Dietetico Alisson Ormaza',
    horario: '08:00 - 17:00',
    nutricionistas: 5,
    pacientes: ['Carlos', 'Maria', 'Ana']
};

console.log("recorrer propiedades del consultorio con for...in");
for (let propiedad in consultorio) {
    console.log(propiedad + ": " + consultorio[propiedad]);
    if (propiedad === 'pacientes') {
        console.log("Pacientes del consultorio:");
        for (let paciente of consultorio[propiedad]) {
            console.log("- " + paciente);
        }
    }
}

let seguimientos = [
    { nombre: 'Seguimiento 1', objetivos: 50, meta: 100, pacientes:"Carlos" },
    { nombre: 'Seguimiento 2', objetivos: 30, meta: 100, pacientes:"Maria" },
    { nombre: 'Seguimiento 3', objetivos: 70, meta: 100, pacientes:"Ana" }
];

let exitosas = 0;
for (let seguimiento of seguimientos) {
    let porcentaje = (seguimiento.objetivos / seguimiento.meta) * 100;
    console.log(seguimiento.nombre + " completado por " + seguimiento.pacientes + " con un " + porcentaje.toFixed(2) + "% de objetivos nutricionales cumplidos");
    if (porcentaje >= 90) {
        exitosas++;
    }else { console.log(seguimiento.nombre + " no fue exitoso, se cumplio menos del 90% de los objetivos");}
}
console.log("Total de seguimientos exitosos: " + exitosas);


console.log("uso de break y continue en un ciclo for");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Se ha alcanzado la consulta 5, se detiene el ciclo");
        break;
    }
    console.log("Numero de consulta: " + i);
}

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log("consulta par encontrada: " + i + ", se omite este valor ");
        continue;
    }
    console.log("Consulta impar: " + i);
}

for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        console.log("Se ha alcanzado la consulta 7, se detiene el ciclo");
        break;
    }
    if (i % 2 === 0) {
        console.log("consulta par encontrada: " + i + ", se omite este valor ");
        continue;
    }
    console.log("Consulta impar: " + i);
}