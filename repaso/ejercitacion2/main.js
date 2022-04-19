const calcular = (d1,d2,d3)=>{
    const calculo = parseInt(d1) + parseInt(d2) + parseInt(d3)
    const mensaje = (calculo == 180) ? ('Valido') : ('No valido')
    return mensaje
}
const mostrar = ()=>{
    const datoA = document.getElementById("inp-anguloA").value
    const datoB = document.getElementById("inp-anguloB").value
    const datoC = document.getElementById("inp-anguloC").value

    const respuesta = calcular(datoA,datoB,datoC)
    document.getElementById("h-resultado").textContent = respuesta
}
const boton = document.getElementById("btn-calcular")
boton.addEventListener("click",mostrar)