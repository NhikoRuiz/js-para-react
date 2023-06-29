// // arrays methods

// const names = ['ryan','joe','maria'];

// FOREACH
// recorre
// names.forEach((name)=> console.log(name))


// // MAP
// const names = ['Nico','Red'] 
// const newNames = names.map(function(name){
//     return `Hola ${name}`
// })

// console.log(newNames);
// console.log(names);

// practica map
// dias de las semanas con fecha



// FIND = Busca
// const contacto = prompt('buscar');


// const names = ['joe','RZA']
// const nameFound = names.find(function(name){
//     if (name === `${contacto}`){
//         return name
//     }
    
// })

// console.log(nameFound)

// ** Practica Find
// buscar contacto, mostrar nombre y numero

// const contacto = prompt('Buscar contacto: ');
// const listaContactos = ['Duko','RZA'];
// const numContactos = {Duko: '0800', RZA:'777'}

// const buscarContacto = listaContactos.find(function(listaContacto){
//     if(listaContacto === `${contacto}`){
//         return listaContacto
//     }
// })

// console.log(buscarContacto)
// console.log(numContactos.Duko)
// falta terminar(buscar contacto con objetos)




// FILTER = crea nuevos arreglos con elementos flitrados

// const names = ['ryan','joe','maria'];


// const newName = names.filter(function(name){
//     if (name === 'joe'){
//         return name
//     }
// })

// console.log(newName)

// const nameTwo = names.filter((name)=>{
//     if(name ==='ryan'){
//         return `Su nombre es ${name}`
//     }
// })
// console.log(nameTwo)

// CONCAT

// const newNames = ['marcos','mario','john'];
// console.log(names.concat(newNames))


// // Spread operator
// const newNames = ['marcos','mario','john'];
// const names = ['ryan','joe','maria'];
// // trae todos los elementos de arreglos y colocalo en este nuevo arreglo

// console.log([...names,...newNames])

// // con objetos
// const usuario = {
//     nombre: 'Ryan',
//     apellido: 'Garcia'
// };

// const ubicacion = {
//     calle: 'calle 23 boxing',
//     ciudad: 'EEUU'
// };
// // objeto nuevo con todas las propiedades de usuario y ubicacion

// const infoUsuario = {
//     ...usuario,
//     ...ubicacion
// };

// console.log(infoUsuario);







// Practica
// foreach

// mostrar lista de verduras
const frutas = ['Naranja','Manzana','Pera']
frutas.forEach((frutas)=>console.log(frutas))

// Mostrar en pantalla
// crear contenedor


// Practica ForEach 2:
// agregar canciones favoritas y despues mostrarlas





const botonAgregar  = document.createElement('button');
botonAgregar.innerText = 'Agregar'
document.body.append(botonAgregar)
botonAgregar.addEventListener('click',(e)=>{
    const agregar = prompt('Agregar cancion favorita')
    cancionesFavoritas.push(agregar)
    console.log(cancionesFavoritas)
})

const cancionesFavoritas = []
// sin terrminar
