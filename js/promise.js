const url = 'https://picsum.photos/v2/list'

document.addEventListener('DOMContentLoaded', obtenerDatos)

function obtenerDatos() {
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => console.log(resultado))
        .catch(error => console.log(error))
}