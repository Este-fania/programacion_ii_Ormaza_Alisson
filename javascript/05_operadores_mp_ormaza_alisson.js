console.log("Operadores Aritmeticos - Consultas de Dietetica");
let peso=70;
let altura=1.65;

console.log("Calculo de IMC:", peso/(altura*altura));
console.log("Peso mas 2 kg:", peso+2);
console.log("Peso menos 2 kg:", peso-2);
console.log("Peso duplicado:", peso*2);
console.log("Peso dividido para 2:", peso/2);
console.log("Residuo del peso:", peso%2);

console.log("Operadores de Comparacion");
console.log("El peso es igual a 70?", peso==70);
console.log("El peso es diferente de 70?", peso!=70);
console.log("El peso es mayor que 60?", peso>60);
console.log("El peso es menor que 80?", peso<80);
console.log("El peso es mayor o igual que 70?", peso>=70);
console.log("El peso es menor o igual que 70?", peso<=70);

console.log("Operadores Logicos");
let tieneConsulta=true;
let tieneEvaluacion=false;

console.log("Tiene consulta Y evaluacion:", tieneConsulta && tieneEvaluacion);
console.log("Tiene consulta O evaluacion:", tieneConsulta || tieneEvaluacion);
console.log("No tiene consulta:", !tieneConsulta);
console.log("No tiene evaluacion:", !tieneEvaluacion);

console.log("Operadores de Asignacion");
let calorias=1800;
console.log("Calorias iniciales:", calorias);
calorias+=200; 
console.log("Calorias despues de aumentar:", calorias);
calorias-=100; 
console.log("Calorias despues de disminuir:", calorias);
calorias*=2; 
console.log("Calorias despues de multiplicar:", calorias);
calorias/=4; 
console.log("Calorias despues de dividir:", calorias);
calorias%=3; 
console.log("Residuo de calorias:", calorias);

console.log("Operadores de Incremento y Decremento");
let consultas=10;
console.log("Consultas iniciales:", consultas);
consultas++; 
console.log("Consultas despues del incremento:", consultas);
consultas--; 
console.log("Consultas despues del decremento:", consultas);



console.log("Operadores de Comparacion estricta");
let edad=20;
let edadPaciente='20';
console.log("La edad es estrictamente igual?", edad===edadPaciente);
console.log("La edad es diferente?", edad!=edadPaciente);

console.log("Operadores Ternarios");
let pacienteActivo=18;
let mensaje=pacienteActivo>=18 ? "Paciente registrado para consulta" : "Paciente requiere acompañamiento de un representante";
console.log(mensaje);


console.log("Tabla de multiplicar de consultas:");
console.log('1 consulta x 5 dias =', 1*5);
console.log('2 consultas x 5 dias =', 2*5);
console.log('3 consultas x 5 dias =', 3*5);
console.log('4 consultas x 5 dias =', 4*5);
console.log('5 consultas x 5 dias =', 5*5);
console.log('6 consultas x 5 dias =', 6*5);
console.log('7 consultas x 5 dias =', 7*5);
console.log('8 consultas x 5 dias =', 8*5);
console.log('9 consultas x 5 dias =', 9*5);
console.log('10 consultas x 5 dias =', 10*5);


console.log("Distribucion de calorias por comidas:");
console.log('1800 / 3 =', 1800/3);
console.log('1800 / 4 =', 1800/4);
console.log('1800 / 5 =', 1800/5);
console.log('1800 / 6 =', 1800/6);
console.log('1800 / 7 =', 1800/7);
console.log('1800 / 8 =', 1800/8);
console.log('1800 / 9 =', 1800/9);
console.log('1800 / 10 =', 1800/10);
console.log('1800 / 11 =', 1800/11);
console.log('1800 / 12 =', 1800/12);