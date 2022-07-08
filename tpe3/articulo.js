export default class Articulo{
    constructor(d,pv,url,dt,t)
    {
        this.descripcion = d
        this.precio_venta =pv
        this.url = url
        this.detalle = dt
        this.tipo = t
    }
    guardar_articulo()
    {
        let nuevo_articulo ={
            descripcion : this.descripcion,
            precio_venta : this.precio_venta,
            url : this.url,
            detalle : this.detalle,
            tipo : this.tipo
        }
        if("articulos" in localStorage){
            let lista_articulo = JSON.parse(localStorage.getItem("articulos"))
            lista_articulo.push(nuevo_articulo)
            localStorage.setItem("articulos",JSON.stringify(lista_articulo))
        }else{
            let lista_articulo = []
            lista_articulo.push(nuevo_articulo)
            localStorage.setItem("articulos",JSON.stringify(lista_articulo))
        }
        this.obtener_articulo()
    }

    obtener_articulo()
    {
        let lista_articulo = JSON.parse(localStorage.getItem("articulos"))
        let filas = []

        lista_articulo.forEach((element,index) => {
            let fila = 
            `
                <tr>
                    <td>${index+1}</td>
                    <td>${element.url}</td>
                    <td>${element.descripcion}</td>
                    <td>${element.precio_venta}</td>
                    <td>${element.tipo}</td>
                    <td>${element.detalle}</td>
                    <td>
                        <button class="btn btn-danger btn-sm">
                            <i class="fa fa-trash"></i>
                        </button>
                        <button class="btn btn-primary btn-sm">
                            <i class="fa fa-edit"></i>
                        </button>
                    </td>
                </tr>
            `
            filas.push(filas)
        });

    document.getElementById("tbody").innerHTML = filas.join('')
    }
}