//sin el async, el await no funciona
const obtener_usuarios = async () =>{
    const usuario = await fetch('https://jsonplaceholder.typicode.com/users')
    const usuarios_definidos = await usuario.json()

    let filas = []

    //recorrer los usuarios
    usuarios_definidos.forEach(element => {
        let fila =
        `<tr>
            <td>${element.name}</td>
            <td>${element.username}</td>
            <td>${element.email}</td>
            <td>${element.phone}</td>
        </tr>`

        filas.push(fila)
    });
    // llenamos al tbody con html-tr
    document.getElementById("tbl_body").innerHTML = filas.join('')
}
//invocar a la funcion
obtener_usuarios()