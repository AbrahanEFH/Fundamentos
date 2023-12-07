
const obtenerNombre = info => ({
    mostrarNombre() {
        console.log(`Nombre: ${info.nombre}, Correo: ${info.correo}`)
    }
})

function Cliente(nombre, email, empresa) {
    let info = {
        nombre,
        email,
        empresa
    }

    return Object.assign(
        info,
        obtenerNombre(info)
    )
}


function Empleado(nombre, email, puesto) {
    let info = {
        nombre,
        email,
        puesto
    }

    return Object.assign(
        info,
        obtenerNombre(info)
    )
}

const cliente = Cliente('Juan', 'Correo@correo.com', 'Codigo con abrahan')
cliente.mostrarNombre()
const empleado = Empleado('Jhon', 'empleo@empleo.com', 'programador')
empleado.mostrarNombre()