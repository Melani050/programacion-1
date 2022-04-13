const calcular = (n1,n2) => {
    const resultado = n1 * n2
    return resultado
}

const mostrar = () =>{
    const dato1 = document.getElementById("dato 1").value
    const dato2 = document.getElementById("dato 2").value

    //Ejecutando la funcion
    const respuesta = calcular(dato1,dato2)

    document.getElementById("h_resultado").textContent = respuesta
}



// Encontrar u obtener el boton y guardarlo en la constante
const boton = document.getElementById("btn_calcular")

// agregamos un evento escuchar. En este caso el "click"
boton.addEventListener("click",mostrar)