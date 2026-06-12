//bloque else if

/*
BENEFICIOS SEGÚN REGISTRO SOCIAL DE HOGARES

PUNTAJE >= 80 : NO TIENE BENEFICIO
PUNTAJE >= 70, PERO < 80: TIENE UN 30% DE DESCUENTO
PUNTAJE >= 50, PERO MENOR QUE 70: TIENE UN 50%
PUNTAJE < 50 tiene un 100% de descuento

*/

let puntaje = 30;

if(puntaje < 50){
    console.log("Usted tiene un descuento del 100%");
} else if(puntaje >= 50 && puntaje < 70){
    console.log("Usted tiene un descuento del 50%");
}else if(puntaje >= 70 && puntaje < 80){
    console.log("Usted tiene un descuento del 30%");
}else {
    console.log("Usted no tiene descuento.");
}