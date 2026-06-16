//MEZCLANDO OPERADORES AND Y OR y NOT

//POSTULACIÓN A BECAS
//- SER MAYOR EDAD
//- ESTAR CESANTE O TENER INGRESO MENOR A 1.000.000

let edad = 20;
let cesante = false;
let ingreso = 1_500_000;

if(edad >= 18 && (cesante || ingreso < 1_000_000)){
    console.log("Usted es canditado a beca.");
}else {
    console.log("Usted no es candidato a beca, motivos:");
    
    if(edad < 18){
        console.log("- Usted no cumple la edad mínima de 18 años.")
    };

    if(!cesante){
        console.log("- Cesantía: usted no está en condiciones de cesante para postular.");
    }

    if(ingreso >= 1_000_000){
        console.log("- Usted tiene un ingreso superior al establecido.");
    }

}
