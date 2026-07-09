moment.locale("es");

class Tarea {
    constructor(descripcion) {
        // Usamos la Web Crypto API nativa del navegador
        this.id = crypto.randomUUID(); 
        this.descripcion = descripcion;
        this.estado = false; //false -> pendiente / true -> finalizado
        this.fechaCreacion = moment().format('DD/MM/YYYY');
    }
}

export default Tarea;