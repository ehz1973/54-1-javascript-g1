//LA PROPIEDAD .length nos da la cantidad de caracteres de un String

let password = "12345678";

let minLenPassword = password.length >= 8;
let maxLenPassword = password.length <= 150;

console.log("Largo del password: ", password.length);

if(minLenPassword && maxLenPassword){
    console.log("Password cumple largo.");
}else {
    console.log("Password no cumple largo [8 - 150 caracteres].");
}

