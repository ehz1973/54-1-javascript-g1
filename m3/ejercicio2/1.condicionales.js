let edad = 24;
let seleccionado = true;
let voluntario = false;
let excepciones = true;

if(edad >= 17 && edad <= 24){ // PUEDE HACER EL MILITAR
    console.log("Puede hacer el SMO.");

    if(seleccionado || voluntario){
        if(seleccionado){

            if(excepciones){
                console.log("Usted tiene 2 alternnativas:");
                console.log("1. Servicio Militar de Verano");
                console.log("2. Prestar servicios una vez egresado (sólo para eximidos por temas de educación).");
            }else {
                console.log("Usted fue llamado a cumplir su SMO, será destinado a su unidad en los próximos meses.");
            }
        
        }

        if(voluntario){
            console.log("Gracias por preferir servir a la patria, será llamado a su unidad dentro de los próximos meses.");
        }
    }


}else {
    console.log("Fuera de rango...");
}