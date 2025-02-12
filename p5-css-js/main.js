const nombre = "Pedro Luis"

const apellido = "De la Cruz Valdiviezo"

const miInformacion = (nom, ape) => {
    const respuesta = 
    `<h2>Mi información:</h2>
    <h3>Mi nombre: ${nom}</h3>
    <h3>Mi apellido: ${ape}</h3>`
    return respuesta
}

const imprimir = () => {
    const datos = document.querySelector("#datos")
    datos.innerHTML = miInformacion(nombre, apellido);  
}


imprimir()