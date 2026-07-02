class Tarea {
    constructor(nombre, descripcion, prioridad, estado = false) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.prioridad = prioridad;
    }

    verEstado() {
        if (this.estado) {
            return "Finalizado";
        } else {
            return "Pendiente";
        }
    }
}

const tarea1 = new Tarea("tarea 1", "descripcion tarea 1", 1);


let tareaObjJson = JSON.stringify(tarea1);

console.log(tareaObjJson)
console.log(typeof(tareaObjJson));

let tareaObjJs = JSON.parse(tareaObjJson);

console.log(typeof(tareaObjJs));
console.log(tareaObjJs);