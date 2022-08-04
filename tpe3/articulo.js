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
                    <td>
                        <img class="img-fluid" style="width:4rem" src="${element.url}"></img>
                    </td>
                    <td>${element.descripcion}</td>
                    <td>${element.precio_venta}</td>
                    <td>${element.tipo}</td>
                    <td>${element.detalle}</td>
                    <td>
                        <button onclick="almacenar_indice(${index})"  data-bs-toggle="modal" data-bs-target="#mymodal" class="btn btn-danger btn-sm">
                            <i class="fa fa-trash"></i>
                        </button>
                        <button onclick="completar_formulario(${index})" class="btn btn-primary btn-sm">
                            <i class="fa fa-edit"></i>
                        </button>
                    </td>
                </tr>

            `
            filas.push(fila)
        });

    document.getElementById("tbody").innerHTML = filas.join('')
    this.vaciar_formulario()
    }
    eliminar_articulo(indice)
    {
        let lista_articulos =JSON.parse(localStorage.getItem("articulos"))

        lista_articulos.splice(indice,1)

        localStorage.setItem("articulos",JSON.stringify(lista_articulos))

        this.obtener_articulo()
    }
    actualizar_articulo()
    {
        let indice = localStorage.getItem("indice")
        let listado_articulo = JSON.parse(localStorage.getItem("articulos"))

        listado_articulo[indice].descripcion = document.getElementById("inp_descripcion").value
        listado_articulo[indice].precio_venta = document.getElementById("inp_precio_venta").value
        listado_articulo[indice].url = document.getElementById("inp_url").value
        listado_articulo[indice].detalle = document.getElementById("inp_detalle").value
        listado_articulo[indice].tipo = document.getElementById("slt_tipo").value

        localStorage.setItem("articulo",JSON.stringify(listado_articulo))

        this.obtener_articulo()

        document.getElementById("btn_guardar").style.display ="block"
        document.getElementById("btn_actualizar").style.display ="none"

        this.vaciar_formulario()
    }
    vaciar_formulario()
    {
        document.getElementById("form_articulo").reset()
    }
    construir_catalogo()
    {
        let lista_articulo = JSON.parse(localStorage.getItem("articulos"))
        let filas = []

        lista_articulo.forEach((element, index)=> {
            let fila = 
            `
            <div class="card m-1" style="width: 18rem;">
                <img src="${element.url}" class="card-img-top img-fluid" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${element.descripcion}</h5>
                    <p class="card-text">\$${element.precio_venta}</p>
                    <button id = "btn_agregar" onclick="agregar('${element.descripcion}','${element.precio_venta}')" class="btn btn-primary btn-sm">Agregar</button>
                </div>
            </div>
            `
            filas.push(fila)
        });
        document.getElementById("col_card").innerHTML = filas.join('')
    }
   

}