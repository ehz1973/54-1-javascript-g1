export const mensajeExito = (mensaje) => {
    Swal.fire({
        title: mensaje,
        icon: "success",
        draggable: true,
    });
};

export const mensajeFracaso = (mensaje) => {
    Swal.fire(mensaje, "", "error");
}

export const mensajeConfirmacion = async (mensaje) => {
    return Swal.fire({
        title: mensaje,
        showDenyButton: false,
        showCancelButton: true,
        confirmButtonText: "Confirmar",
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed){
            return true;
        }else {
            return false;
        }
    });
};
