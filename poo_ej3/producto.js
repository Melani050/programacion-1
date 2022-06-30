export default class Producto {
    constructor(d,pv,c){
        //son atributos que pertenecen a la clase
        //son globales
        this.descripcion = d
        this.precio_venta = pv
        this.categoria = c
    }
    //metodo
    guardar_producto()
    {   
        let nuevo_producto = {
            descripcion: this.descripcion,
            precio_venta: this.precio_venta,
            categoria: this.categoria
        }
        if ("productos" in localStorage) {
            //recolecta todo lo que esta en "productos" que estan en formato JSON
            //convertimos al JSON obtenido desde el storage en una expresion nativa de javascript
            let lista_producto = JSON.parse(localStorage.getItem("productos"))
            lista_producto.push(nuevo_producto)
            localStorage.setItem("productos",JSON.stringify(lista_producto) ) 
        }else{
            let lista_producto = []
            lista_producto.push(nuevo_producto)

            //guardar en el storage
            localStorage.setItem("productos",JSON.stringify(lista_producto) )
        } 
    }


    obtener_productos()
    {

    }
}