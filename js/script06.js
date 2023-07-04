// Arrays

// const tecnologias = [20, 42, true, 'Html']

// console.log(tecnologias[0])
// console.table(tecnologias)
// console.log(tecnologias.length)

// Operaciones en los arreglos

const tecnologias2 = ['Html', 'CSS', 'React', 'PHP', 'node.js']

// añadiendo elementos al array 
// no con push si no de la forma adecuada para react

// const nuevoArreglo = [...tecnologias2, 'Svelte']
// const nuevoArreglo2 = ['Svelte', ...tecnologias2]

// const nuevoArray = tecnologias2.filter( function(tec) {
//     return tec === tecnologias2[2]
// })

// console.table(nuevoArreglo)

const newArray = tecnologias2.map( function(tec) {
    if(tec === 'Html'){
        return 'Docker'
    } else {
        return tec
    }
})

console.table(newArray)
