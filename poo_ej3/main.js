import Producto from "./producto.js";
function guardar()
{   //se le asigna una variable 
    let descripcion =document.getElementById("inp_descripcion").value
    let precio_venta =document.getElementById("inp_precio_venta").value
    let categoria = document.getElementById("slt_cat").value

    //se crea instancia ejecuta al constructor
    const producto = new Producto(descripcion,precio_venta,categoria)

    //invocamos( ejecutamos ) al metodo guardar_producto()
    //perteneciente a la clase producto
    //se acceden a los atributos y metodos de la clase
    producto.guardar_producto()

}
document.getElementById("btn_guardar").addEventListener("click",guardar)

function listar()
{
    const producto = new Producto()
    producto.obtener_productos()
}
listar()