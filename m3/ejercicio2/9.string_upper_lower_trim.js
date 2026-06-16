let correo = " miCorreo@GMAIL.COM ";

//PODEMOS USAR EL MÉTODO TRIM PARA LIMPIAR LOS ESPACIOS POR ERROR.
correo = correo.trim();

let correoDB = "micorreo@gmail.com";


if(correo.toLowerCase() == correoDB.toLowerCase()){
    console.log("coincide el correo.");
}else {
    console.log("No coincide el correo.");
}