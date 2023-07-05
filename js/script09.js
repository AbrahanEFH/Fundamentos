// Arrow functions 
// const sumar = (num1, num2) => {
//     return num1 + num2
// }

// const suma = sumar(2, 5)

// console.log(suma)

const tecnologias2 = ['Html', 'CSS', 'React', 'PHP', 'node.js']
const numeros = [10, 15, 30, 50]


const newArray = tecnologias2.map( tec => {
    if(tec === 'Html'){
        return 'Docker'
    } else {
        return tec
    }
})

const nuevoArray = tecnologias2.filter( tec => {
    return tec === 'React'
 })


// console.log(newArray)
// console.log(nuevoArray)

const prueba = tecnologias2.includes('PHP')
const resultado = numeros.some( numero => numero > 15)
const encuentra = numeros.find( numero => numero > 15)

console.log(encuentra)


// Condicionales

const banco = 4000
const tarjeta = 6000

if (banco > tarjeta){
    console.log('Puedes retirar')
} else {
    console.log('Sin saldo suficinete')
}

const numero1 = 20
const numero2 = '20'

if(numero1 === numero2){
    alert('Son iguales')
} else {
    alert('no son iguales')
}