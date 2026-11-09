const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

async function main() {
const rl = readline.createInterface({ input, output });

console.log('Condicionales If');
console.log('Condicional simple If');
let energia = Number(await rl.question('Paciente, cuanta energia tienes hoy? '));
if (energia > 0) {
    console.log
        ('Tienes energia suficiente para realizar tus actividades diarias');
}

console.log('Condicional If-Else Dos caminos');
let agua = Number(await rl.question('Paciente, cuantos vasos de agua has consumido hoy? '));
if (agua > 0) {
    console.log('Has consumido agua durante el dia');
} else {
    console.log('No has consumido agua durante el dia');
}

console.log('Condicional If-Else If-Else Múltiples caminos');
let consulta = await rl.question('Paciente, que tipo de consulta necesitas? ');
rl.close();
if (consulta === 'nutricion') {
    console.log('Consulta de nutricion seleccionada');
} else if (consulta === 'dietética') {
    console.log('Consulta de dietetica seleccionada');
} else if (consulta === 'evaluacion') {
    console.log('Consulta de evaluacion nutricional seleccionada');
} else {
    console.log('No existe el tipo de consulta solicitado');
}


console.log('Condicional If anidado');
let pacienteRegistrado = 50;
let citaDisponible = 50;
if (pacienteRegistrado > 0) {
    if (citaDisponible > 0) {
        console.log('El paciente esta registrado y tiene una cita disponible');
    } else {
        console.log('No hay citas disponibles para el paciente');
    }
} else {
    console.log('El paciente no se encuentra registrado');
}
console.log("")
console.log('Control de consultas dieteticas');
let consultasDisponibles = 400;
let nutricionistasDisponibles = 50;
let pacienteDisponible = "si";
let historialClinico = "no";
let consultorioOcupado = "no";

if (consultasDisponibles > 0 &&
    nutricionistasDisponibles > 0 &&
    pacienteDisponible === "si" &&
    historialClinico === "si" &&
    consultorioOcupado === "no") {
    console.log('Consulta autorizada');
} else {
    if (consultasDisponibles <= 0) {
        console.log('No se puede realizar la consulta, no hay citas disponibles');
    }
    if (nutricionistasDisponibles <= 0) {
        console.log('No se puede realizar la consulta, no hay nutricionistas disponibles');
    }
    if (pacienteDisponible === "no") {
        console.log('No se puede realizar la consulta, el paciente no esta disponible');
    }
    if (historialClinico === "no") {
        console.log('No se puede realizar la consulta, falta el historial clinico');
    }
    if (consultorioOcupado === "si") {
        console.log('No se puede realizar la consulta, el consultorio esta ocupado');
    }
}
if (pacienteDisponible === "no" && historialClinico === "no") {
    console.log('No se puede realizar la consulta, el paciente no esta disponible y falta su historial clinico');
}


console.log("Evaluacion de consulta dietetica");
let objetivosNutricionales = 200;
let objetivosCumplidos = 150;
let sesionesIniciales = 1000;
let sesionesRealizadas = 850;
let pacienteAsistio = "si";
let evaluacionPendiente = "no";
let bonificacion = 0;
let porcentajeCumplimiento = (objetivosCumplidos / objetivosNutricionales) * 100;
let sesionesRestantes = sesionesIniciales - sesionesRealizadas;

if (porcentajeCumplimiento >= 100 && sesionesRestantes > 0 && pacienteAsistio === "si" && evaluacionPendiente === "no") {
    console.log("Objetivos nutricionales cumplidos con exito");
} else if (porcentajeCumplimiento >= 70 && porcentajeCumplimiento < 90) {
    console.log("Objetivos nutricionales cumplidos parcialmente");
} else if (porcentajeCumplimiento >= 50 && porcentajeCumplimiento < 70) {
    console.log("Resultados regulares, se requiere mejorar el seguimiento nutricional");
} else {
    console.log("Objetivos nutricionales no alcanzados, se requiere una nueva evaluacion");
}

console.log("Evaluacion de bonificacion por desempeño");
if (porcentajeCumplimiento >= 90 && sesionesRestantes >= 200) {
    bonificacion = 1000;
    console.log("Bonificacion otorgada por cumplimiento excelente.");
} else {
    console.log("No se otorga bonificacion por desempeño.");
}

console.log("Seguimiento del paciente");
if (pacienteAsistio === "si" && evaluacionPendiente === "no") {
    console.log("Seguimiento nutricional realizado correctamente.");
} else if (pacienteAsistio === "no" && evaluacionPendiente === "no") {
    console.log("Seguimiento pendiente, el paciente no asistio a la consulta.");
} else if (pacienteAsistio === "si" && evaluacionPendiente === "si") {
    console.log("Consulta realizada, pero falta completar la evaluacion.");
} else {
    console.log("Seguimiento pendiente, el paciente no asistio y falta completar la evaluacion.");
}

console.log("Resumen de la consulta");
console.log("Objetivos Nutricionales:", objetivosNutricionales);
console.log("Objetivos Cumplidos:", objetivosCumplidos);
console.log("Porcentaje de Cumplimiento:", porcentajeCumplimiento.toFixed(2) + "%");
console.log("Sesiones Iniciales:", sesionesIniciales);
console.log("Sesiones Realizadas:", sesionesRealizadas);
console.log("Sesiones Restantes:", sesionesRestantes);
console.log("Paciente Asistio:", pacienteAsistio);
console.log("Evaluacion Pendiente:", evaluacionPendiente);
console.log("Bonificacion Otorgada:", bonificacion);
}

main();