//VARIABLES PRIMITIVAS
let nombre = "Pedro"; //String
console.log(nombre);

let edad = 45; //Number
let promedioNotas = 4.58; //Number
let vip = false; //Boolean

let vehiculo = null; //Null -> Object

let propiedad; //Undefined


//VARIABLES -> DATA TYPES OBJECTS

let hobbies = ["Tenis", "Pintar", "Correr"]; //ARRAY

let ultimoIndice = hobbies.length - 1;
console.log(hobbies[ultimoIndice]);


let persona = {
    nombre: "Carlos",
    apellido: "Soto",
    edad: 25,
    casado: false
}; // TIPO OBJET

console.log(persona.nombre);
console.log(persona["edad"]);