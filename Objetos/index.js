const usuario =  {
    // clave    valor (propierties/propiedades)
    nombre: "Rodrigo",
    apellido: "Bueno",
    direccion: {
        pais: "Argentina",
        ciudad: "Cordoba"
    },amigos: ["Diego","Fito"],
    // funciones(methods/metodos)
    enviandoMensaje(){
        return "Enviando mensaje..."
    }
}

console.log(`La ciudad de ${usuario.nombre} es ${usuario.direccion.ciudad}. ${usuario.enviandoMensaje()}`);