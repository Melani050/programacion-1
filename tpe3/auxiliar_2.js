function agregar(d,p){
    let nuevo_articulo ={
        descripcion : d,
        precio_venta : p,
        cantidad : 1,

    }
    if("pedido" in localStorage){
        let lista_articulo = JSON.parse(localStorage.getItem("pedido"))
        lista_articulo.push(nuevo_articulo)
        localStorage.setItem("pedido",JSON.stringify(lista_articulo))
    }else{
        let lista_articulo = []
        lista_articulo.push(nuevo_articulo)
        localStorage.setItem("pedido",JSON.stringify(lista_articulo))
    }

    crear_pedido()

}


function crear_pedido()
{
    let lista_pedido = JSON.parse(localStorage.getItem("pedido"))
    let filas = []

    lista_pedido.forEach(element => {
        let fila = 
        `
        <tr>
            <td>${element.descripcion}</td>
            <td>${element.precio_venta}</td>
            <td>${element.cantidad}</td>
        </tr>
        
        `
        filas.push(fila)
    });
    document.getElementById("tbody_2").innerHTML = filas.join('')
}


crear_pedido()