// Eliminar
function almacenar_indice(indice)
{
    localStorage.setItem("indice",indice)
}
//Editar
function completar_formulario(indice)
{
    let lista_articulo = JSON.parse(localStorage.getItem("articulos"))

    document.getElementById("inp_descripcion").value = lista_articulo[indice].descripcion
    document.getElementById("inp_precio_venta").value = lista_articulo[indice].precio_venta
    document.getElementById("inp_url").value = lista_articulo[indice].url
    document.getElementById("inp_detalle").value = lista_articulo[indice].detalle
    document.getElementById("slt_tipo").value = lista_articulo[indice].tipo

    localStorage.setItem("indice",indice)

    document.getElementById("btn_guardar").style.display = "none"
    document.getElementById("btn_actualizar").style.display= "block"
}