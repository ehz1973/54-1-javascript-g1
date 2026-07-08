const promesa1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log("Promesa 1.");
        }, 3000);
    });
}

const promesa2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log("Promesa 2.");
        }, 2500);
    });
}

const promesa3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log("Promesa 3.");
        }, 0);
    });
}

console.log("inciando código");
promesa1();
promesa2();
promesa3();

console.log("más instrucciones");

