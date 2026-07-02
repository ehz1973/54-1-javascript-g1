const tareas = [];

function generarId() {
    const timestamp = Date.now().toString(36);
    const aleatorio = Math.random().toString(36).substring(2, 5);
    return `id-${timestamp}-${aleatorio}`;
}

class Tarea {
    constructor(nombre, descripcion, prioridad) {
        this.id = generarId();
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.prioridad = prioridad;
    }

    registrar() {
        //SE GUARDA EL OBJETO ROMPIENDO LA REFERENCIA EN MEMORIA
        let objetoTarea = JSON.stringify(this);
        tareas.push(JSON.parse(objetoTarea));
    };

    actualizar() {
        let tareaBuscada = tareas.find((tarea) => tarea.id == this.id);

        if (tareaBuscada) {
            tareaBuscada.nombre = this.nombre;
            tareaBuscada.descripcion = this.descripcion;
            tareaBuscada.prioridad = this.prioridad;
            return true;
        } else {
            return false;
        }
    };

    eliminar() {
        let indiceTarea = tareas.findIndex(tarea => tarea.id == this.id);

        if(indiceTarea == -1){
            return false;
        }else {
            tareas.splice(indiceTarea, 1);
            return true;
        }
    };
}

const tarea1 = new Tarea("Tarea 1", "Descripción tarea 1", 1);

tarea1.registrar();

//ACTUALIZANDO TAREA

console.log("Tareas antes de actualización");
console.table(tareas);

tarea1.prioridad = 2;
tarea1.descripcion = "Nueva descripción tarea 1";

tarea1.actualizar();

console.log("Tareas después de actualización");
console.table(tareas);

//ELIMINANDO TAREA

tarea1.eliminar();
console.log("Tareas después de eliminación");
console.table(tareas);
