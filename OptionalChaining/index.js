// Optional chaining
const person = {
    name : 'Ryan',
    address: {
        city: 'London'
    }
}

// si el location existe, accede a su valor city, sino devuelve undefined
console.log(person.location?.city)



// practica

const goku = {
    raza: 'Sayajin',
    ki: '1.000.000',
    transformaciones:{
        numero0:'KAIOKEN',
        numero1: 'SSJ',
        numero2:'SSJ2',
        numero3:'SSJ3'
    }
}

const krillin = {
    raza:'Humano',
    ki:'1.000'
}


console.log(goku.transformaciones?.numero3);
console.log(krillin.transformaciones?.numero0)