import Calculadora from "./clases/Calculadora.js";
import { formatoMoneda } from "./utils/formato_valores.js";

//EVENTO CLICK DE BOTÓN CALCULAR

const btnCalcular = document.getElementById("btn-calcular");

btnCalcular.addEventListener("click", () => {
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;
    let operacion = document.getElementById("operacion").value;

    if (isNaN(valor1) || isNaN(valor2)) {
        return alert("Debe ingresar números válidos.");
    }

    let resultado = 0;

    switch (operacion) {
        case "sumar":
            resultado = Calculadora.sumar(valor1, valor2);
            break;

        case "restar":
            resultado = Calculadora.restar(valor1, valor2);
            break;
        case "multiplicar":
            resultado = Calculadora.multiplicar(valor1, valor2);
            break;

        default:
            alert(`Opción (${opcion} inválida o no implementada.)`);
            break;
    }

    //MOSTRAR EL RESULTADO

    document.getElementById("resultado").textContent = formatoMoneda(resultado);
});
