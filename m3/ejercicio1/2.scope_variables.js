var nombre1 = "Pedro";
let apellido = "Soto";



//LET Y CONST TIENEN AMBITO DE BLOQUE
if(true){
    var nombre = "Carlos";
    let apellido = "Godoy";
    console.log("Apellido dentro del bloque:", apellido);
}


console.log(nombre);
console.log(apellido);