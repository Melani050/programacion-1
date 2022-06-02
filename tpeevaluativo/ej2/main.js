const calcular = (temp) =>{
    let mensaje; 

    if (temp >= 14 && temp < 32 ) {
        mensaje = 'Temperatura baja'
    } else {
        if (temp >= 32 && temp < 68) {
            mensaje = 'Temperatura adecuada'
        } else {
            if (temp >= 68 && temp <= 96 ) {
                mensaje = 'Temperatura alta'
            } else {
                mensaje = 'Temperatura desconocida'
            }
        }
    }

    return mensaje
}

const mostrar = () =>{
    
    const temperatura = document.getElementById("inp-temperatura").value
    const resultado = calcular(temperatura)
    document.getElementById("h-resultado").textContent = resultado
}

const boton = document.getElementById("btn-analizar")
boton.addEventListener("click",mostrar)
