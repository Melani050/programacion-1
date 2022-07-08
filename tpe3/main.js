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