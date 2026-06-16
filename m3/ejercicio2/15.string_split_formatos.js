//USAMOS ARRAYS PARA LAS OPCIONES DE FORMATOS DE IMÁGENES DISPONIBLES
let formatosPermitidos  = ["webp", "jpg", "svg"];

let imagen = "foto.png";

let imagenFormatoSeparada = imagen.split(".");

console.table(imagenFormatoSeparada);

let formato = imagenFormatoSeparada[1];

if(formatosPermitidos.includes(formato)){
    console.log("Se ha cargado correctamente la imagen, formato permitido:", formato);
}else{
    console.log("Formato no permitido:", formato);
}