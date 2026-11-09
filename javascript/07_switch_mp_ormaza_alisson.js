let consulta = 4;
switch (consulta) {
    case 1:
        console.log('Estas en una consulta de nutricion');
        break;
    case 2:
        console.log('Estas en una consulta de dietetica');
        break;
    case 3:
        console.log('Estas en una evaluacion nutricional');
        break;
    case 4:
        console.log('Consulta Dietetica Alisson Ormaza');
        break;
    default:
        console.log('Estas en una consulta no registrada');
}

let paciente = 'Carlos';
switch (paciente) {
    case 'Carlos':
    case 'Maria':
        console.log('Bienvenido Carlos o Maria a su consulta dietetica');
        break;
    case 'Ana':
        console.log('Bienvenida Ana a su consulta dietetica');
        break;
    default:
        console.log('Paciente no registrado');
}

let alimentacion = 50;
switch (true) {
    case (alimentacion > 0 && alimentacion < 25):
        console.log('Tu alimentacion necesita mejorar, se recomienda una evaluacion nutricional');
        break;
    case (alimentacion >= 25 && alimentacion < 50):
        console.log('Tu alimentacion es moderada, puedes mejorar tus habitos alimenticios');
        break;
    case (alimentacion >= 50 && alimentacion < 75):
        console.log('Tienes buenos habitos alimenticios, puedes continuar con tu seguimiento');
        break;
    case (alimentacion >= 75 && alimentacion <= 100):
        console.log('Tienes habitos alimenticios adecuados, continua con tu seguimiento nutricional');
        break;
    default:
        console.log('Nivel de alimentacion desconocido');
}

console.log("Calculadora nutricional");
let numero1= 10;
let numero2= 5;
let operacion = 'xyz';
let resultado;
switch (operacion) {
    case 'suma':
        resultado = numero1 + numero2;
        break;
    case 'resta':
        resultado = numero1 - numero2;
        break;
    case 'multiplicacion':
        resultado = numero1 * numero2;
        break;
    case 'division':
        if (numero2 !== 0) {
            resultado = numero1 / numero2;
            console.log("Resultado de la division:", resultado);
        } else {
            console.log("Error: Division por cero no permitida");
        }
        break;
    default:
        console.log("Operacion desconocida");
}

if (resultado !== undefined) {
    console.log("El resultado de la operacion es:",operacion,"=", resultado);
}