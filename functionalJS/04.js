
// Implicit Binding


// Utilizamos el this. para indicar que los valores buscados se encuentran dentro del mismo objeto
const usuario = {
    nombre: 'Abrahan',
    edad: 24,
    informacion() {
        console.log(`Mi nombre es ${this.nombre} y mi edad es ${this.edad}`)
    }
}

usuario.informacion()