const obtener_provincias = async () =>{
    const provincias = await fetch('https://apis.datos.gob.ar/georef/api/provincias')
    const provincias_definidas = await provincias.json()

    let filas = []
    for (const [index, Element] of provincias_definidas.provincias.entries()) {
        let fila = 
        `
        <tr>
            <td>${index+1}</td>
            <td>${Element.nombre}</td>
        </tr>
        `
        filas.push(fila)
    }
    document.getElementById("tbl_body").innerHTML = filas.join('')

}
obtener_provincias()