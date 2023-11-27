

// tryCatch

try {
    console.log(cliente, cliente2, precioDescuento)

} catch (error) {
    console.log(error)
}

function descargarCliente() {

    return new Promise((resolve, reject) => {
        const error = false

        setTimeout(() => {
            if (!error) {
                resolve('El listado de clientes se descargo correctamente')
            } else {
                reject('Error en la conexion')
            }
        }, 3000);
    })
}

// Async await con function expression 

async function ejecutar() {

}

// async await con function declaration
const ejecutar = async () => {
    try {
        const respuesta = await descargarCliente()

        console.log(4 + 2)
        console.log(respuesta)
    } catch (error) {
        console.log(error)
    }
}

ejecutar()