function calcular(C){
    const calculo = ( C * 1.8) + 32
    return 'En fahrenheit son : °'+calculo
}
function mostrar(){
    const celcius = document.getElementById("inp-celcius").value
    const respuesta = calcular(celcius)
    document.getElementById("h-resultado").textContent = respuesta
}