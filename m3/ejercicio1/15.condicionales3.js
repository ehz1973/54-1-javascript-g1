//bloque else if

/*
BENEFICIOS SEGÚN REGISTRO SOCIAL DE HOGARES

PUNTAJE >= 80 : NO TIENE BENEFICIO
PUNTAJE >= 70, PERO < 80: TIENE UN 30% DE DESCUENTO
PUNTAJE >= 50, PERO MENOR QUE 70: TIENE UN 50%
PUNTAJE < 50 tiene un 100% de descuento

*/

let puntaje = 60;

if(puntaje >= 80){
    console.log("Usted no tiene descuentos.");
} else if(puntaje >= 70){
    console.log("Usted tiene 30% de descuento.");
}else if(puntaje >= 50){
    console.log("Usted tiene 50% de descuento.");
}else {
    console.log("Usted tiene un 100% de descuento.");
}