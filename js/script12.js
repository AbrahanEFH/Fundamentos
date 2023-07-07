// Eventos de dom con el input 

// const inputNombre = document.querySelector('.nombre')
// inputNombre.addEventListener('input', () => {
//     console.log(inputNombre.value)
// })

// const inputPassword = document.querySelector('.password')
// inputPassword.addEventListener('input', functionPassword)

// function functionPassword(e) {
//     inputPassword.type = 'text'

//     setTimeout(() => {
//         inputPassword.type = 'password'
//     }, 500);
// }

// Enviar datos del formulario || Submit

const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', e => {
    e.preventDefault()
    
    const nombre = document.querySelector('.nombre').value
    const password = document.querySelector('.password').value

    if(nombre === '' || password === ''){
        console.log('Todos los campos son obligatorios')
    }

    console.log('formulario enviado')
})

