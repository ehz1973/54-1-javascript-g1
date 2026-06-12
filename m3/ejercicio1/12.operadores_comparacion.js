let numero1 = 5;
let numero2 = 3;

//1. NUMERO1 ES MAYOR QUÉ NUMERO2?
console.log("1", numero1 > numero2); // true

//2. NUMERO1 ES MENOR QUÉ NUMERO2?
console.log("2", numero1 < numero2); // false

numero1 = 5;
numero2 = 5;

//3. NUMERO1 ES MAYOR O IGUAL QUE NUMERO2
console.log("3", numero1 >= numero2); //true

// 4. NUMERO2 ES MENOR O IGUAL QUE NUMERO1
console.log("4", numero1 <= numero2); //true

//5. NUMERO1 ES IGUAL A NUMERO2
console.log("5", numero1 == numero2); //true

//6. NUMERO1 ES DIFERENTE DE NUMERO2
console.log("6", numero1 != numero2); //false

numero1 = 5;
numero2 = "5";

//7. NUMERO1 ES IGUAL A NUMERO2
console.log("7", numero1 == numero2); //true

//8. NUMERO1 ES ESTRICTAMENTE IGUAL A NUMERO2
//COMPARA EL VALOR / CONTENIDO, PERO TAMBIÉN COMPARA EL TIPO DE DATO
console.log("8", numero1 === numero2); //false