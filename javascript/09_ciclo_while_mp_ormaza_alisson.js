console.log("abriendo agenda de consultas dieteticas...");
let consulta = 1;
while (consulta <= 5) {
    console.log("Consulta registrada para el paciente " + consulta + ".");
    consulta++;
}
console.log("todas las consultas han sido registradas.");

console.log("cuenta regresiva para iniciar las consultas dieteticas");
let i = 10;
while (i >= 0) {
    console.log("faltan " + i + " segundos para iniciar la consulta");
    i--;
}


console.log("Registrar objetivos nutricionales del paciente");
let cumplimiento = 0;
let avance = 10;
let totalAvances = 0;
while (cumplimiento < 100) {
    cumplimiento += avance;
    totalAvances++;
    console.log("Actualizando... Nivel de cumplimiento nutricional: " + cumplimiento + "%");
}
console.log("Objetivos nutricionales completados despues de " + totalAvances + " avances.");

console.log("consumo de agua diario del paciente");
let agua = 100;
let consumo = 45;
let dia = 0;
while (agua > 0) {
    agua -= consumo;
    dia++;
    console.log("Dia " + dia + ": Nivel de agua registrado: " + agua + "%");
    if (agua <= 50) {
        console.log("Advertencia: consumo de agua bajo. nivel actual: " + agua + "%");
    }
}
console.log("No hay suficiente consumo de agua registrado");
console.log("total de dias registrados: " + dia);


console.log("Evaluar seguimiento nutricional con Do......-While");
let cumplimiento_objetivos = 50;
do {
    console.log("Evaluando objetivos nutricionales. Nivel de cumplimiento: " + cumplimiento_objetivos + "%");
    cumplimiento_objetivos -= 15;
} while (cumplimiento_objetivos > 0);
console.log("Se requiere una nueva evaluacion nutricional.");

console.log("ahorro para una consulta dietetica");
let ahorro = 80;
let meta = 500;
let ahorroSemanal = 70;
let semanas = 0;
do {
    ahorro += ahorroSemanal;
    semanas++;
    console.log("Semana " + semanas + ": Ahorro actual: " + ahorro + " dolares");
} while (ahorro < meta);
console.log("meta alcanzada en " + semanas + " semanas. Ahora el paciente puede cubrir el costo de su consulta dietetica.");