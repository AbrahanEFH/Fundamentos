// Destructuring de arrays

const tecnologies = ['Html', 'Css', 'Node.js', 'PHP', 'React']

// const [  html ] = tecnologies

// console.log(html)

// Iterar en arreglos
// forEach  Acceder a cada elemento del array
// tecnologies.forEach(function (tec) {
//     console.log(tec)
// })

const arrayMap = tecnologies.map(tec => {
    return tec
});

console.log(arrayMap)
