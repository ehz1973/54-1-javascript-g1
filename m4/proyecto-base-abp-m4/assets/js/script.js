import GestionTareas from "./clases/GestionTareas.js";
import { mensajeExito, mensajeConfirmacion, mensajeFracaso } from "./utils/utils.alerts.js";

const gestorTareas = new GestionTareas();

const crearFilaTabla = (tarea) => {
    let { id, descripcion, estado, fechaCreacion } = tarea;

    //CONVERTIMOS EL VALOR BOOLEAN DE ESTADOS MÁS CLAROS PARA EL USUARIO
    let estadoStr = estado ? "Finalizado" : "Pendiente";

    return `
        <tr>
            <th scope="row">${id}</th>
            <td>${descripcion}</td>
            <td>${estadoStr}</td>
            <td>${fechaCreacion}</td>
            <td>
                <button class="btn btn-warning btn-finalizar" data-id="${id}">Finalizar</button>
                <button class="btn btn-danger btn-eliminar" data-id="${id}">Eliminar</button>
            </td>
        </tr>
    `;
};

const cargarTareas = (tareas = []) => {
    if (tareas.length == 0) {
        document.getElementById("texto-sin-tareas").classList.remove("d-none");
        document.getElementById("tabla-tareas").classList.add("d-none");
        return;
    }

    document.getElementById("texto-sin-tareas").classList.add("d-none");

    let acumuladorFilas = "";
    for (const tarea of tareas) {
        acumuladorFilas += crearFilaTabla(tarea);
    }

    document.getElementById("cuerpo-tabla-tareas").innerHTML = acumuladorFilas;
    document.getElementById("tabla-tareas").classList.remove("d-none");
};

const main = async () => {
    await gestorTareas.cargarDesdeLocalStorage();

    const tareas = gestorTareas.obtenerTareas();

    cargarTareas(tareas);
};

main();

//EVENTOS DEL DOM

const formAddTarea = document.getElementById("form-add-tarea");

formAddTarea.addEventListener("submit", (event) => {
    event.preventDefault();

    let descripcion = document.getElementById("descripcion").value;

    gestorTareas.crearTarea(descripcion);

    const tareas = gestorTareas.obtenerTareas();

    // BOTONES FORMULARIO
    const btnCrearTarea = document.getElementById("btn-crear-tarea");
    const btnSpinnerTarea = document.getElementById("btn-spinner-tarea");

    btnSpinnerTarea.classList.toggle("d-none");
    btnCrearTarea.classList.toggle("d-none");

    setTimeout(() => {
        cargarTareas(tareas);
        btnSpinnerTarea.classList.toggle("d-none");
        btnCrearTarea.classList.toggle("d-none");

        formAddTarea.reset();
    }, 2000);
});

//EVENTOS FINALIZAR Y ELIMINAR TAREAS

const cuerpoTablaTareas = document.getElementById("cuerpo-tabla-tareas");

cuerpoTablaTareas.addEventListener("click", async (event) => {
    const elemento = event.target;

    if (elemento.tagName != "BUTTON") return;

    let id = elemento.dataset.id;

    let tarea = gestorTareas.obtenerTareaPorId(id);

    //ACCIÓN DE FINALIZAR TAREA
    if (elemento.className.includes("btn-finalizar")) {
        if (tarea.estado) {
            return mensajeFracaso(
                `La tarea "${tarea.descripcion}" ya se encuentra finalizada.`,
            );
        }

        let mensaje =
            "Está seguro que desea finalizar la tarea con ID: " +
            id.slice(0, 6) +
            "...";

        let confirmacion = await mensajeConfirmacion(mensaje);

        if (!confirmacion) return;

        let respuestaFinalizacion = gestorTareas.finalizarTarea(id);

        if (respuestaFinalizacion) {
            let mensaje = "La tarea ha finalizado!";
            mensajeExito(mensaje);

            const tareas = gestorTareas.obtenerTareas();
            cargarTareas(tareas);
        } else {
            mensajeFracaso("Algo ha ocurrido, vuelva a intentar.");

            location.reload();
        }
    }

    //ACCIÓN ELIMINAR TAREA
    if (elemento.className.includes("btn-eliminar")) {
        if (!confirm("Está seguro que desea eliminar la tarea con ID: " + id)) {
            return;
        }

        let respuesta = gestorTareas.eliminarTarea(id);

        if (respuesta) {
            alert("Tarea eliminada correctamente.");
            const tareas = gestorTareas.obtenerTareas();
            cargarTareas(tareas);
        } else {
            alert("Error al intentar eliminar una tarea, vuelva a intentar.");
            location.reload();
        }
    }
});
