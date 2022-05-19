const consumir_datos = async () =>{
    const datos_recibidos = await fetch('https://jsonplaceholder.typicode.com/users')

    const lista_usuario = await datos_recibidos.json()
    
    //declaro la variable para luego llenarla
    let items = []

    lista_usuario.forEach(usuario => {

        let li = `<li class="list-group-item">${usuario.name}</li>`
        //lleno la variable de li con un push
        items.push(li)
    });

    //lleno al ul con html
    //con el join le sacamos las comillas 
    document.getElementById("list_user").innerHTML = items.join('')
}
consumir_datos()