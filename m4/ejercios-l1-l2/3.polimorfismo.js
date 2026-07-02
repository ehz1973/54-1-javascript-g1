class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    };

    tipo(){
        return "Persona";
    }
};

class Cliente extends Persona {
    constructor(nombre, apellido, puntos = 0) {
        super(nombre, apellido);
        this.puntos = puntos;
    };

    tipo(){
        return "Cliente";
    }
};

class Empleado extends Persona {
    constructor(nombre, apellido, cargo = "Sin asignar", sueldo = 0) {
        super(nombre, apellido);
        this.cargo = cargo;
        this.sueldo = sueldo;
    };

    tipo(){
        return "Empleado";
    }
};

class EmpleadoInterno extends Empleado {
    constructor(nombre, apellido, cargo = "Sin asignar", sueldo = 0) {
        super(nombre, apellido, cargo, sueldo);

    };

    asignarBono(monto){
        this.sueldo += monto;
        return this.sueldo;
    }
}


const p1 = new Persona("Pedro", "Soto");
const c1 = new Cliente("Juan", "Leiva", 5000);
const e1 = new Empleado("Ramiro", "Díaz", "Vendedor", 750_000);
const ei1 = new EmpleadoInterno("Jaime", "Pereira", "Administrativo", 650_000);

ei1.asignarBono(5000);

const registroPersonas = [p1, c1, e1, ei1];

for (const persona of registroPersonas) {
    console.log("Nombre:", persona.nombre);
    console.log("Apellido:", persona.apellido);
    console.log("Tipo de persona:", persona.tipo());

    if(persona.tipo() == "Empleado"){
        console.log("Sueldo:", persona.sueldo);
    };

    console.log("*".repeat(50));
}