// Eventos del Dom

const heading = document.querySelector('#heading')
heading.addEventListener('click', () => {
    heading.textContent = 'Nuevo HEading al hacr click'
})

const enlaces = document.querySelectorAll('.navegacion a')

// para poder manipular el Dom de multiples elementos se necesita iterar sobre cada uno de ellos 

enlaces.forEach(enlace => {
    enlace.addEventListener('click', () => {
        enlace.textContent = 'Click en Enlaces'
    })
});