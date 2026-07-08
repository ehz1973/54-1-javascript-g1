const login = (correo, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if( correo == "usuario@gmail.com" && password =="123456"){
                resolve("Ok!");
            }else {
                reject("Credenciales inválidas");
            }

        }, 3000);
    });
};

login("usuario@gmail.com", "123456")
.then((respuesta)=> { //AQUÍ PROCESAMOS EL RESOLVE
    console.log(respuesta);

    console.log("Redireccionando al usuario...");
})
.catch((error)=> {
    console.log("Error:", error);
})
.finally(()=> {
    console.log("Programa terminado.");
});

