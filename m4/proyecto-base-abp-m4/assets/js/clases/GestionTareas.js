import Tarea from "./Tarea.js";

const getTareas = async () => {
    let urlBase = location.origin;
    urlBase += "/tareasJson.json";

    const response = await fetch(urlBase);
    const data = await response.json();

    return data.tareas;
}

class GestionTareas {
    constructor() {
        this.tareas = [];
    }

    // --- CREATE ---
    crearTarea(descripcion) {
        if (!descripcion || descripcion.trim() === "") {
            throw new Error("La descripción no puede estar vacía.");
        }
        const nuevaTarea = new Tarea(descripcion);
        this.tareas.push(nuevaTarea);

        this.guardarEnLocalStorage();

        return nuevaTarea;
    }

    // --- READ ---
    obtenerTareas() {
        return this.tareas;
    }

    obtenerTareaPorId(id) {
        return this.tareas.find((t) => t.id === id) || null;
    }

    // --- UPDATE ---
    finalizarTarea(id) {
        const tarea = this.obtenerTareaPorId(id);
        if (!tarea) return false;

        tarea.estado = true;

        this.guardarEnLocalStorage();

        return tarea;
    }

    // --- DELETE ---
    eliminarTarea(id) {
        const indice = this.tareas.findIndex((t) => t.id === id);
        if (indice === -1) return false;

        this.tareas.splice(indice, 1);
        this.guardarEnLocalStorage();
        return true;
    }


    //PERSISTENCIA DE LOS CAMBIOS REALIZADOS: AGREGAR, ACTUALIZAR Y ELIMINAR
    guardarEnLocalStorage() {
        localStorage.setItem("mis_tareas", JSON.stringify(this.tareas));
    }

    async cargarDesdeLocalStorage() {
        const datos = localStorage.getItem("mis_tareas");
        // this.tareas = datos ? JSON.parse(datos) : [];
        if(datos){
            this.tareas = JSON.parse(datos);
            
        }else {
            const tareas = await getTareas();
            this.tareas = tareas;
        }

        return this.tareas;
        
    }
}

export default GestionTareas;
