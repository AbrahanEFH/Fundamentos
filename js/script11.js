// Selectores del dom

const heading = document.querySelector('#heading')

heading.textContent = 'Manipulando el HTML'


console.log(heading.textContent)
const inputNombre = document.querySelector('#nombre')



const enlaces = document.querySelectorAll('.navegacion a')
enlaces.forEach( enlace => enlace.textContent = 'Nuevo Enlace')