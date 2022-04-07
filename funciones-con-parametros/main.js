//esta funcion solo se enfocara en el calculo
function calcular(d1,d2)
{
    const resultado = d1 * d2;
    return resultado



}
/*solo se enfocara en recolectar los datos
 y entregarlos a la funcion calcular()*/
function mostrar()
{

    // forma 1
    const dato1 = document.querySelector("#inp_dato1").value

    //forma 2
    const dato2 = document.getElementById("inp_dato2").value

    //aca ejecutamos e invocamos a la funcion
    const respuesta = calcular(dato1,dato2)

    document.getElementById("h_resultado").textContent = respuesta

}