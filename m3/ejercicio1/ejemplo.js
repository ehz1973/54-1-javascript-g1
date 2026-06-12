// Refactorizado: cálculo de descuento según puntaje
// Reglas:
// PUNTAJE >= 80 : 0% descuento
// PUNTAJE >= 70 : 30% descuento
// PUNTAJE >= 50 : 50% descuento
// PUNTAJE < 50  : 100% descuento

function calcularDescuento(puntaje) {
    if (typeof puntaje !== 'number' || Number.isNaN(puntaje)) {
        throw new TypeError('El puntaje debe ser un número');
    }
    if (puntaje < 0 || puntaje > 100) {
        throw new RangeError('El puntaje debe estar entre 0 y 100');
    }

    if (puntaje >= 80) return 0;
    if (puntaje >= 70) return 30;
    if (puntaje >= 50) return 50;
    return 100;
}

function mensajeDescuento(puntaje) {
    const porcentaje = calcularDescuento(puntaje);
    if (porcentaje === 0) return `Puntaje ${puntaje}: no tiene descuento.`;
    return `Puntaje ${puntaje}: tiene ${porcentaje}% de descuento.`;
}

// Ejemplos de uso
const ejemplos = [85, 75, 60, 30];
for (const p of ejemplos) {
    console.log(mensajeDescuento(p));
}

// Exportar para pruebas o uso en módulos (CommonJS/ESM compatibles)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { calcularDescuento, mensajeDescuento };
}
