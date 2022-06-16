let consolas = ['PlayStation','Xbox','Nintendo Game Cube','Sega DreanCast','Game Boy Advances']

//elimino Nintendo Game Cube y Sega DreanCast
const posicion = 2;
const posicionElemento = 2;
consolas.splice(posicion,posicionElemento)
console.log(consolas)

//agrego Nintendo 64 al final
consolas.push('Nintendo 64')
console.log(consolas)

//agrego Nintendo wii al inicio
consolas.unshift('Nintendo Wii')
console.log(consolas)

const imprimir = () =>{

    const longitud = consolas.length
    const ultimo = consolas[longitud-1]
    const indice = consolas.indexOf('Xbox')

    let p_consolas = 
    `
        Longitud del arreglo: ${longitud}   
        Último elemento: ${ultimo}  
        Índice obtenido de Xbox: ${indice}  
    `
    //imprimo en un parrafo
    document.getElementById("p-consolas").textContent = p_consolas  
}
const boton = document.getElementById("btn_imprimir")
boton.addEventListener("click",imprimir)

function recorrer(){
    let filas = []
    consolas.forEach((element,index) => {
        let fila = 
        `
        <tr>
            <td>${index+1}</td>
            <td>${element}</td>            
        </tr>
        `
        filas.push(fila)
    });
    document.getElementById("tbl_body").innerHTML = filas.join('')
}