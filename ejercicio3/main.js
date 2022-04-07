function calcular_circulo(radio)
{
    const resultado = Math.PI * Math.pow(radio,2)
    return resultado
}
function mostrar()
{
    const radio = document.getElementById("inp_radio").value
    const respuesta = calcular_circulo(radio)
    document.getElementById("h_resultado").textContent = respuesta
}