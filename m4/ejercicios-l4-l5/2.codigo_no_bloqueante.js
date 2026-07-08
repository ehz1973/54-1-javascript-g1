console.log("Primera instrucción");

setTimeout(()=> {
    console.log("Segunda instrucción");
    let contador = 0;
    for (let index = 0; index < 10_000_000; index++) {
        contador++;
    }

    console.log("Contador:", contador);
}, 5000);

console.log("Tercera instrucción");