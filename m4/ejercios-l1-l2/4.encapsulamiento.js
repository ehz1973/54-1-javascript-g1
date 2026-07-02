class CuentaBancaria {
    #saldo; // Propiedad privada (ES6)

    constructor(saldoInicial = 0) {
        this.#saldo = saldoInicial;
    };

    //FUNCIÓN PRIVADA, SÓLO ACCESIBLE DESDE EL INTERIOR DE CLASE
    #trackID(){
        return "11111";
    }

    //MÉTODO DE TIPO SETTER PARA CAMBIAR VALORES / ESTADOS
    depositar(monto) {
        if (monto > 0) {
            this.#saldo += monto;

            let trackId = this.#trackID();
            console.log(`Depósito exitoso. Nuevo saldo: ${this.#saldo}, número seguimiento: ${trackId}`);
        } else {
            console.log("El monto debe ser mayor a 0.");
        }
    };

    //MÉTODO DE TIPO SETTER PARA CAMBIAR VALORES / ESTADOS
    retirar(monto) {
        if (monto > 0 && monto <= this.#saldo) {
            this.#saldo -= monto;
            console.log(`Retiro exitoso. Nuevo saldo: ${this.#saldo}`);
        } else {
            console.log("Fondos insuficientes o monto inválido.");
        }
    }

    //MÉTODO DE TIPO GETTER PARA ACCEDER O LEER VALORES
    verSaldo() {
        console.log(`Saldo actual: ${this.#saldo}`);
    };
}


const cuenta1 = new CuentaBancaria(5_000);

cuenta1.depositar(10_000);

cuenta1.retirar(3_000);

cuenta1.verSaldo();
