
const cliente = 'Juan'

function mostrarCliente() {
    const cliente = 'PEdro'
    console.log(cliente)
}

mostrarCliente()


// Sin importar donde se llame la funcion, con function declaration se ejecutara correctamente.
obtenerCliente('Juan')


function obtenerCliente(nombre) {
    console.log(`El cliente es ${nombre}`)
}

obtenerCliente('Luis')

// Function Expression

const obtenerCliente2 = function (nombre) {
    console.log(`El nombre del cliente es ${nombre}`)
}

obtenerCliente2('Manuel')