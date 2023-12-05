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