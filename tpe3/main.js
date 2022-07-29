import Articulo from "./articulo.js";
function guardar()
{
    let descripcion = document.getElementById("inp_descripcion").value
    let precio_venta = document.getElementById("inp_precio_venta").value
    let url = document.getElementById("inp_url").value
    let detalle = document.getElementById("inp_detalle").value
    let tipo = document.getElementById("slt_tipo").value

    const articulo = new Articulo(descripcion,precio_venta,url,detalle,tipo)
    articulo.guardar_articulo()
}
document.getElementById("btn_guardar").addEventListener("click",guardar)

function listar()
{
    const articulo = new Articulo()
    articulo.obtener_articulo()
}
listar()

function eliminar()
{
    let indice = localStorage.getItem("indice")
    let articulo = new Articulo()
    articulo.eliminar_articulo(indice)

    const truck_modal = document.querySelector('#mymodal');
    const modal = bootstrap.Modal.getInstance(truck_modal);    
    modal.hide()
}
document.getElementById("btn_eliminar").addEventListener("click",eliminar)

function actualizar()
{
    let articulo = new Articulo()
    articulo.actualizar_articulo()
}
document.getElementById("btn_actualizar").addEventListener("click",actualizar)