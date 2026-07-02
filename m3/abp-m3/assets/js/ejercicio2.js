const estudiantes = [
    { id: 1, nombre: "Estudiante 1", notas: [4, 6, 7] },
    { id: 2, nombre: "Estudiante 2", notas: [5.8, 6.7, 6.3] },
    { id: 3, nombre: "Estudiante 3", notas: [3.8, 5.6, 7] },
    { id: 4, nombre: "Estudiante 4", notas: [3.8, 2.1, 4.3] },
];

function promedioNotasPorEstudiante(listaEstudiantes) {
    console.log("Promedio notas por estudiante");

    let estudiantesPromedio = listaEstudiantes.map(estudiante => {
        let totalNotas = 0;
        let {notas} = estudiante;

        for (const nota  of notas) {
            totalNotas += nota;
        }
        let promedio = totalNotas / notas.length;
        
        estudiante.promedio = promedio.toFixed(2);

        return estudiante;
    });

    return estudiantesPromedio;
};


function estudiantePromedioMasAlto(listaEstudiantes){

    let promedios = listaEstudiantes.map(e => Number(e.promedio));

    let promedioMasAlto = Math.max(...promedios);

    let estudiantesFiltrados = listaEstudiantes.filter(e => e.promedio == promedioMasAlto);

    return estudiantesFiltrados;

}

function estudiantesReprobados(listaEstudiantes){
    return listaEstudiantes.filter(e => e.promedio < 4);
};

function main() {
    let estudiantesConPromedio = promedioNotasPorEstudiante(estudiantes);

    console.table(estudiantesConPromedio);

    let estudiantesDestacados = estudiantePromedioMasAlto(estudiantesConPromedio);

    console.log("Estudiantes con el promedio más alto");
    console.table(estudiantesDestacados);

    let reprobados = estudiantesReprobados(estudiantesConPromedio);
    console.log("Estudiantes reprobados:");
    if(reprobados.length == 0){
        console.log("No existen estudiantes reprobados.");
    }else {
        console.table(reprobados);
    }
    
}

main();