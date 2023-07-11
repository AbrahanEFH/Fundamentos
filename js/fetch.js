// Fetch API
// si se utiliza .then es porque se esta utilizando promises
const url = 'https://jsonplaceholder.typicode.com/comments'
const url2 = 'https://jsonplaceholder.typicode.com/photos'

// const consultarAPI = () => {
//     fetch(url).then( (respuesta) => {
//         return respuesta.json()
//     })
//     .then( (resultado) => {
//         resultado.forEach(element => {
//             console.log(element)
//         });
//     })
// }

//consultarAPI()

// Con async await

// const consultarAPI = async () => {
//     const respuesta = await fetch(url)
//     const resultado = await respuesta.json()
//     console.log(resultado)
   
// }

// consultarAPI()

// Multiples llamados

const consultarAPI = async () => {
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    console.log(resultado)

    const respuesta2 = await fetch(url2)
    const resultado2 = await respuesta2.json()
    console.log(resultado2)
   
}

consultarAPI()
