// Funcion dentro de Funcion

// function hola(nombre){
//     return function(){
//         return `hola ${nombre}`
//     }
// }

// console.log(hola("Nicolás"))



// Parametros por defecto

function suma(x = 0, y = 0){
    return x + y;
}

console.log(suma(10))