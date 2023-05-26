const usuario = {
    nombre:'joe',
    edad:30
}

function mostrarInfo(usuario){
    return `<h1>Hola ${usuario.nombre} </h1>`
}

document.body.innerHTML = mostrarInfo(usuario);