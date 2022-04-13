const calcular = (n1,n2,n3) =>{
    const bloque1 = Math.pow(n2,2) - (4*n1*n3)
    const bloque2 = Math.sqrt(bloque1)
    const resultado1 = (-(n2) - bloque2)/2*n1
    const resultado2 = (-(n2) + bloque2)/2*n1

    return 'raiz1 = '+ resultado1 + ' raiz2 = '+ resultado2
}
const mostrar = () =>{
    const datoA = document.getElementById("dato a").value
    const datoB = document.getElementById("dato b").value
    const datoC = document.getElementById("dato c").value

    const respuesta = calcular(datoA,datoB,datoC)

    document.getElementById("h_resultado").textContent = respuesta
}
const boton = document.getElementById("btn_calcular")

boton.addEventListener("click",mostrar)