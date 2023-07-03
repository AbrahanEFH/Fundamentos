// tipos de datos 

let cuenta = 200

const cliente = 'Pancho'

const Descuento = false

console.log(typeof cuenta)
console.log(typeof cliente)
console.log(typeof Descuento)


// Objetos 

const producto = {
    nombre: 'Tv',
    precio: 500,
    disponible: true
}

console.log(producto.precio)
console.table(producto)

// Destructuring

const { nombre, precio, disponible } = producto

console.log(nombre, precio, disponible)

// Object Literal Enhacement
const autenticado = true
const usuario = 'Juan'

const NuevoObjeto = {
    autenticado,
    usuario
}

console.table(NuevoObjeto)