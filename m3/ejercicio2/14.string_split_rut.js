let run = "11.111.111-1";

//quitar puntos al rut
run = run.replaceAll(".", "");

console.log("Run formateado: ", run);

//SEPARAR NÚMERO RUT DE DIGITO VERIFICADOR
let runSeparado = run.split("-");
console.log("run separado:",  runSeparado);

let numeroRun = runSeparado[0];
let digitoVerificador = runSeparado[1];

console.log("NÚMERO RUN:", numeroRun);
console.log("Digito Verificador:", digitoVerificador);