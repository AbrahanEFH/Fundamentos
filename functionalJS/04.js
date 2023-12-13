
// Implicit Binding


// Utilizamos el this. para indicar que los valores buscados se encuentran dentro del mismo objeto
const usuario = {
    nombre: 'Thomas',
    edad: 24,
    informacion() {
        console.log(`Mi nombre es ${this.nombre} y mi edad es ${this.edad}`)
    }
}

usuario.informacion()


// Explicit Binding

function persona(el1, el2) {
    console.log(`Mi Nombre es ${this.nombre} y Escucho ${el1} y ${el2}`)
}

const informacion = {
    nombre: 'Jhon Doe'
}

const musicaFavorita = ['Rock', 'Pop']

// Uso del call

persona.call(informacion, musicaFavorita[0], musicaFavorita[1])

// Apply. Se le pude pasar un arreglo

persona.apply(informacion, musicaFavorita)

// New Binding

function Auto(modelo, color) {
    this.modelo = modelo
    this.color = color
}

const auto = new Auto('Camaro', 'Negro')

console.log(auto)