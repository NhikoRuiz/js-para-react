// Desestructurar objetos

const usuario = {
    nombre:'Goku',
    edad:30,
};

function mostrarInfo(usuario){
    const {nombre,edad} = usuario;
    return `<h1>Hola ${nombre}</h1>`;
}

document.body.innerHTML = mostrarInfo(usuario)