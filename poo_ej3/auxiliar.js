//eliminar
function almacenar_indice(indice)
{
    localStorage.setItem("indice",indice)
}
//editar
function completar_formulario(indice){
    //buscamos al item "producto" y los daots alojados en el storage, y lo parseamos. Lo guardamos en una varible
    let lista_productos = JSON.parse( localStorage.getItem("productos") )
    //nos paramos en un producto y accedemos a su descripcion,precio,categoria
    //para poder editarlo
    document.getElementById("inp_descripcion").value = lista_productos[indice].descripcion
    document.getElementById("inp_precio_venta").value = lista_productos[indice].precio_venta
    document.getElementById("slt_cat").value = lista_productos[indice].categoria

    //guarda al indice
    localStorage.setItem("indice",indice)

    //apago el boton
    document.getElementById("btn_guardar").style.display = "none"
    //encendemos el boton actualizar
    document.getElementById("btn_actualizar").style.display= "block"
}