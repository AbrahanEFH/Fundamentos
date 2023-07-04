// Destructuring con dos o mas objetos

const producto = {
    nombre: 'Tv',
    precio: 500,
    disponible: true
}

const cliente = {
    nombre: 'Matt',
    premium: true
}

const { nombre, precio, disponible } = producto

//Podemos crear un alias para utilizar el mismo nombre de otra variable
const { nombre: nombreCliente } = cliente

console.log(nombre, precio, disponible)
console.log(nombreCliente)