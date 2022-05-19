async function obtener_datos(){
    //fetch realiza una solicitud HTTP a través del metedo GET
    const datos = await fetch('https://jsonplaceholder.typicode.com/posts')   
    const datos_definitivos = await datos.json()
    
    datos_definitivos.forEach(element => {
        console.log(element.title)
    });
}