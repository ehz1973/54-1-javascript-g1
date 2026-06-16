let texto = "Curso FullStack JavaScript-1";

let terminoBuscado = "JavaScript";

let indiceTermino = texto.indexOf(terminoBuscado);

if(indiceTermino != -1){
    console.log("Termino encontrado en posición: ", indiceTermino);
    let recorte = texto.slice(indiceTermino);
    console.log("Recorte:", recorte);
}else {
    console.log("No existen coincidencias con texto buscado.");
}
