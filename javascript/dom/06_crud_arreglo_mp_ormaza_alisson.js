
let pacientes = [
    {
        id: 1,
        nombre: "Alisson Ormaza",
        proceso: "Evaluacion nutricional",
        estado: "Activo"
    },
    {
        id: 2,
        nombre: "Maria Lopez",
        proceso: "Plan alimenticio",
        estado: "Pendiente"
    },
    {
        id: 3,
        nombre: "Carlos Perez",
        proceso: "Seguimiento nutricional",
        estado: "Inactivo"
    },
];


const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const proceso = document.getElementById("proceso");
const estado = document.getElementById("estado");
const guardar = document.getElementById("guardar");
const cancelar = document.getElementById("cancelar");

const cantidad = document.getElementById("cantidad");
const contenedor = document.getElementById("contenedor");


function mostrarPacientes() {

    contenedor.replaceChildren();

    if (cantidad) {
        cantidad.textContent = pacientes.length;
    }

    pacientes.forEach(function (paciente) {

        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");

        const titulo = document.createElement("h3");
        titulo.textContent = paciente.nombre;

        const parrafoProceso = document.createElement("p");
        parrafoProceso.textContent = "Proceso: " + paciente.proceso;

        const parrafoEstado = document.createElement("p");
        parrafoEstado.textContent = "Estado: " + paciente.estado;

        const acciones = document.createElement("div");
        acciones.classList.add("acciones");


        const botonEditar = document.createElement("button");
        botonEditar.type = "button";
        botonEditar.textContent = "Editar";
        botonEditar.classList.add("editar");

        botonEditar.addEventListener("click", function () {
            editarPaciente(paciente.id);
        });


        const botonEliminar = document.createElement("button");
        botonEliminar.type = "button";
        botonEliminar.textContent = "Eliminar";
        botonEliminar.classList.add("eliminar");

        botonEliminar.addEventListener("click", function () {

            const confirmarEliminar = confirm(
                `¿Eliminar al paciente ${paciente.nombre}?`
            );

            if (!confirmarEliminar) return;

            pacientes = pacientes.filter(function (p) {
                return p.id !== paciente.id;
            });

            if (idEditando === paciente.id) {
                limpiarFormulario();
            }

            mostrarPacientes();
        });
        acciones.append(botonEditar, botonEliminar);
        tarjeta.append(
            titulo,
            parrafoProceso,
            parrafoEstado,
            acciones
        );
        contenedor.appendChild(tarjeta);
    });
}

let idEditando = null;
function editarPaciente(id) {

    const paciente = pacientes.find(function (p) {
        return p.id === id;
    });

    if (!paciente) return;

    nombre.value = paciente.nombre;
    proceso.value = paciente.proceso;
    estado.value = paciente.estado;

    idEditando = id;

    guardar.textContent = "Editar";
    cancelar.hidden = false;

    nombre.focus();

}
cancelar.hidden = true;
mostrarPacientes();

let siguienteId = 4;
formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    const nombrePaciente = nombre.value.trim();
    const procesoPaciente = proceso.value;
    const estadoPaciente = estado.value;

    if (nombrePaciente === "") return;


    if (idEditando === null) {

        const nuevoPaciente = {
            id: siguienteId,
            nombre: nombrePaciente,
            proceso: procesoPaciente,
            estado: estadoPaciente,
        };

        siguienteId++;

        pacientes.push(nuevoPaciente);

    } else {

        const paciente = pacientes.find(function (p) {
            return p.id === idEditando;
        });

        if (paciente) {

            paciente.nombre = nombrePaciente;
            paciente.proceso = procesoPaciente;
            paciente.estado = estadoPaciente;

        }

        idEditando = null;

        guardar.textContent = "Agregar paciente";

    }


    formulario.reset();

    limpiarFormulario();

    mostrarPacientes();

});

function limpiarFormulario() {

    formulario.reset();

    idEditando = null;

    guardar.textContent = "Agregar paciente";

    cancelar.hidden = true;

}

cancelar.addEventListener("click", function () {

    limpiarFormulario();

});
