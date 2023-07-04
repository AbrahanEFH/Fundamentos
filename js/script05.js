// union de dos o mas objetos

const producto = {
    nombre: 'Tv',
    precio: 679,
    disponible: true
}

const cliente = {
    nombre: 'Pancho',
    premium: false
}

//const nuevoObjeto = { ...producto, ...cliente }

// Otra forma
const nuevoObjeto = {
    producto: { ...producto },
    cliente: { ...cliente}
}

console.log(nuevoObjeto)