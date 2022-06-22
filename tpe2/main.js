//1 - Consumo de API
const obtener_monedas = async () =>{
    /**fetch realiza una solicitud HTTP a través del metedo GET
     * y el await para que se llene y no pase enseguida a la siguiente linea de 
     * código
     * */
    const monedas = await fetch(' https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    const monedas_definidas = await monedas.json()

    let filas = []
    //se rrecorre el arreglo y se accede a sus elementos y sus indices
    for (const [index, Element] of monedas_definidas.entries()) {

        let compra = (Element.casa.compra == 'No Cotiza') ? 'No Cotiza' : '$'+Element.casa.compra

        let fila = 
        `
        <tr>
            <td>${index+1}</td>
            <td>${Element.casa.nombre}</td>
            <td>${compra}</td>
            <td>$${Element.casa.venta}</td>
        </tr>
        `
        filas.push(fila)
    }
    //se llena al tbody con html, utilizando su id
    document.getElementById("tbl_body").innerHTML = filas.join('')

}
//se invoca a la funcion-
obtener_monedas()

// 2 - Arreglos
let criptos = ['Bitcoin', 'Ethereum', 'Tether', 'BNB' , 'Cardano' , 'Dai' , 'Helium', 'Shiba Inu' , 'Tron' , 'Cronos','Solana']

//se agrega al inicio
criptos.unshift('Stellar')

//se eliminan
const posicion = 8;
const posicionElemento =2;
criptos.splice(posicion,posicionElemento)

//lo agrego al final
criptos.push('Gate')

const imprimir = () =>{
    const longitud = criptos.length
    const ultimoElemento = criptos[longitud-1]
    const indice = criptos.indexOf('Helium')
    const indiceObtenido = criptos[indice]

    let p_longitud =`Longitud del arreglo: ${longitud}`
    let p_ultimo = `Último elemento: ${ultimoElemento} `
    let p_helium =`Criptomoneda: ${indiceObtenido}`

    //Se llena los parrafos con texto
    document.getElementById("p_longitud").textContent = p_longitud
    document.getElementById("p_ultimo").textContent = p_ultimo
    document.getElementById("p_helium").textContent = p_helium
}
const boton = document.getElementById("btn_imprimir")
boton.addEventListener("click",imprimir)


let items = []
const recorrer = () =>{
    for (const Element of criptos) {
        let item =
        `
        <li class="list-group-item">${Element}</li>
        `
        items.push(item)
    }
    document.getElementById("ul_criptos").innerHTML = items.join('')
}
const boton2 = document.getElementById("btn_criptos")
boton2.addEventListener("click",recorrer)

//3 - Objetos
const mostrar = () =>{
    const framework = {
        titulo: 'Framework utilizado en la actualidad',
        nombre: 'Angular',
        características: {
            lenguaje: 'TypeScript',
            patron: 'MVVM',
            spa: 'si'
        },
    }
    const titulo = framework.titulo
    const nombre = framework.nombre
    const lenguaje = framework.características.lenguaje
    const patron = framework.características.patron
    const spa = framework.características.spa

    console.log(`
        Titulo: ${titulo}
        Nombre: ${nombre}
        CAracterísticas:
            Lenguaje:${lenguaje}
            Patron:${patron}
            Spa:${spa} 
    `)

}
const boton3 = document.getElementById("btn_mostrar")
boton3.addEventListener("click",mostrar)