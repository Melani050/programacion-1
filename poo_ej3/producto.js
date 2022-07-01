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
        //invoco nuevamente el metodo obtener_productos() para
        //lograr reconstruir la tabla, y asi reflejar los datos actualizados
        //que provienen del localStorage, especificamente del item "productos
    
        this.obtener_productos() 
    }


    obtener_productos()
    {   //item es un espacio
        /**
         *  Recolectamos todos los productos alojados en el item "producots"
         * que estan en notacion JSON. Debemos convertirlo en una expresion
         *  nativa de javascript(es decir, hacemos un JSON.parse())
         */
        let lista_producto = JSON.parse(localStorage.getItem("productos")) 

        let filas=[]
        lista_producto.forEach((element,index) => {
            let fila =`
                <tr>
                    <td>${index+1}</td>
                    <td>${element.descripcion}</td>
                    <td>${element.precio_venta}</td>
                    <td>${element.categoria}</td>
                    <td>
                        <button class="btn btn-danger btn-sm">
                            <i class="fa fa-trash"></i>                        
                        </button>
                    </td>
                </tr>             
            `
            filas.push(fila)
        });

        document.getElementById("tbody").innerHTML = filas.join('')

    }
}