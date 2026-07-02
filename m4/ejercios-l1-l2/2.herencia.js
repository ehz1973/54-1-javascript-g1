class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    };

    nombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    };
};

class Cliente extends Persona {
    constructor(nombre, apellido, puntos = 0) {
        super(nombre, apellido);
        this.puntos = puntos;
    };

    agregarPuntos(puntos){
        this.puntos += puntos;
        return this.puntos;
    }
};

class Empleado extends Persona {
    constructor(nombre, apellido, cargo = "Sin asignar", sueldo = 0) {
        super(nombre, apellido);
        this.cargo = cargo;
        this.sueldo = sueldo;
    };

    aumentarSueldo(monto){
        this.sueldo += monto;
        return this.sueldo;
    }
};

let cliente1 = new Cliente("Pedro", "Martínez", 5000);

let empleado1 = new Empleado("Juan", "García", "Vendedor", 850_000);

console.log("Nombre completo cliente 1:", cliente1.nombreCompleto());
console.log("Nueva cantidad de puntos:", cliente1.agregarPuntos(10_000));

console.log("Nombre completo empleado 1:", empleado1.nombreCompleto());
console.log("Nuevo sueldo:", empleado1.aumentarSueldo(25_000));