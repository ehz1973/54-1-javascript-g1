let monto = "5000";
console.log(typeof(monto));
console.log(monto === 5000);

//conversión de tipos

monto = parseInt(monto); //convierte un string en un number -> entero

let promedio = "4.55";

// promedio = parseFloat(promedio);

promedio = Number(promedio);

console.log(promedio);


//CONVERSIÓN DE VALORES QUE NO SON NÚMEROS

let edad = "Veinte";

edad = Number(edad);

console.log(typeof(edad)); //Number
console.log(edad); //NaN

if(isNaN(edad)){
    console.log("El valor ingresado no corresponde a un número");
}


// PROBLEMAS CON OPERADOR +

let numero1 = 5;
let numero2 = 10;
console.log(numero1 + numero2); // output: 15

numero2 = "10";
console.log(numero1 + numero2); // output: 510

console.log(Number(numero1) + Number(numero2)); //SOLUCIÓN