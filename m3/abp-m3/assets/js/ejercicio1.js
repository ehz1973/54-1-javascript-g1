// (A = \pi \times r^2\)
function calcularAreaCirculo(radio) {
    let area = Math.PI * Math.pow(radio, 2);
    return area;
}

const btnIniciar = document.getElementById("btnIniciar");

btnIniciar.addEventListener("click", () => {
    let radio = Number(
        prompt("Ingresa el radio del circulo en cms (número mayor que cero)"),
    );

    if (isNaN(radio)) {
        return alert("Debe ingresar una medida válida.");
    }

    if (radio <= 0) {
        return alert("Debe ingresar un valor mayor que 0.");
    }

    let resultadoArea = calcularAreaCirculo(radio);

    alert("El área del cuadrado es: " + resultadoArea.toFixed(2));
});
