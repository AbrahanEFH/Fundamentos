// Objets MAnipulacion

const producto = {
    nombre: 'Tv',
    precio: 500,
    disponible: true
}

// No deja modificar nada al objeto seleccionado
// Object.freeze(producto)

// Renombramos una variable
producto.precio = 3.490


// Agragamos variable que no existe
producto.accesorio = 'Antena'

// Borramos
delete producto.disponible

console.table(producto)