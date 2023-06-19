//Obtener el promedio de notas de un alumno considerando que la suma de notas debe ser el 
//retorno de una función y el promedio el retorno de otra función. Las notas son: 6,8,9,2,5,10.



function Sumarnotas(nota1, nota2, nota3, nota4, nota5, nota6){
    return nota1+nota2+nota3+nota4+nota5+nota6;
    }

function Promedio (nota1p, nota2p, nota3p, nota4p, nota5p, nota6p){
    let array=[nota1p, nota2p, nota3p, nota4p, nota5p, nota6p]
    const resultado = Sumarnotas( 6, 8, 9, 2, 5, 10);
    return resultado/array.length;
    }

console.log(Promedio());


