// Arrow Function - Funciones flechas

// const boton = document.createElement('button');
// boton.innerText = "Click me!"

// boton.addEventListener('click',()=>{
//     alert("Click")
// })

// document.body.append(boton)

// IN LINE - En Linea

const mostrarTexto = () => 'Hola Mundo';
console.log(mostrarTexto());

// Sintaxis para objetos

const mostrarObjeto = ()=> ({nombre: 'Nicolás',apellido:"Ruiz"});
console.log(mostrarObjeto().nombre)

// Return

const boton = document.createElement('button');
boton.innerText = "Click me!"

const autorizado = false;

boton.addEventListener('click',()=>{
    if(autorizado){
        return alert('Está autorizado');
    }
    alert('No está autorizado')
})

document.body.append(boton)