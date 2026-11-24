let pacientes = ["Carlos", "Maria", "Pedro", "Sofia", "Alisson", "Daniel"];

console.log("Elemento 0:", pacientes[0]);
console.log("Elemento 2:", pacientes[2]);
console.log("Elemento 5:", pacientes[5]);
console.log("Elemento 4:", pacientes[4]);
console.log("Tamaño del arreglo:", pacientes.length);


console.log("Pacientes:", pacientes);

console.log("INCLUIR ELEMENTOS A UN ARREGLO CON PUSH");
pacientes.push("Valeria");
console.log("Pacientes:", pacientes);

pacientes.push("Andres");
console.log("Pacientes:", pacientes);


console.log("MODIFICAR ELEMENTOS DE UN ARREGLO");
pacientes[7] = "Fernanda";
console.log("Pacientes:", pacientes);


console.log("PONER AL INICIO DEL ARREGLO CON UNSHIFT");
pacientes.unshift("Gabriela");
pacientes[0] = "Gabriela";
console.log("Pacientes:", pacientes);


console.log("ELIMINAR ELEMENTOS DE UN ARREGLO");
pacientes.pop();
console.log("Pacientes:", pacientes);

pacientes.pop();
console.log("Pacientes:", pacientes);

pacientes.shift();
console.log("Pacientes:", pacientes);

pacientes.splice(1, 1);
console.log("Pacientes:", pacientes);






