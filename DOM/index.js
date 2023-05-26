// Document Object Model


const titulo = document.createElement('h1');
const boton = document.createElement('button');
titulo.innerText = 'Hola Mundo desde JS';
boton.innerText = 'Click';

boton.addEventListener('click', function(){
    titulo.innerText = 'Texto actualizado con JS';
    
})

document.body.append(titulo);
document.body.append(boton);

