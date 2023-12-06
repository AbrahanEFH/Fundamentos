// const cliente = 'Juan'

// function mostrarCliente() {
//     const cliente = 'Pablo'

//     console.log(cliente)
// }

// mostrarCliente()

// Closures

const obtenercliente = () => {
    const nombre = 'Juan'

    function muestraNombre() {
        console.log(nombre)
    }

    return muestraNombre
}

const cliente = obtenercliente()

cliente()

// Currying and PArtials

const suma = (a, b, c) => {
    return a + b + c
}

console.log(suma(2, 3, 4))

const parcial = a => (b, c) => suma(a, b, c)

const primerNumero = parcial(5)
const resultado = primerNumero(4, 3)

console.log(resultado)

const parcial2 = a => b => c => suma(a, b, c)

const numero1 = parcial2(5)
const numero2 = numero1(4)
const parcialResultado = numero2(3)

console.log(resultado)