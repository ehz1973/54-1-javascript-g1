class Calculadora{
    static sumar(valor1, valor2) {
        return Number(valor1) + Number(valor2);
    }

    static restar(valor1, valor2) {
        return Number(valor1) - Number(valor2);
    }

    static multiplicar(valor1, valor2) {
        return Number(valor1) * Number(valor2);
    }
};

//AL EXPORTAR PERMITIMOS QUE SE PUEDA UTILIZAR EN OTROS DOCUMENTOS.
export default Calculadora;


