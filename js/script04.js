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

function descargarNuevosClientes() {

    return new Promise(resolve => {
        console.log('Descargando Clientes')

        setTimeout(() => {
            resolve('Los clientes fueron descargados...')
        }, 3000);
    })
}

function descargarNuevosPedidos() {
    return new Promise(resolve => {
        console.log('Descargando pedidos...')

        setTimeout(() => {
            resolve('Los pedidos fueron descargados')
        }, 3000);
    })
}

function descargarNuevosPedidos() {
    return new Promise(resolve => {
        console.log('Descargando Pedidos')

        setTimeout(() => {
            resolve('Los pedidos fueron descargados')
        }, 3000);
    })
}