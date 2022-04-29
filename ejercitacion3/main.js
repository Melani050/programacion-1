function calcular(d1,d2,opcion)
{
    if (opcion==0) {
        const suma = parseInt(d1) + parseInt(d2)
        return "El resultado es: "+suma
    }else{
        if(opcion==1){
            const resta = parseInt(d1) - parseInt(d2)
            return "El resultado es: "+resta
        }else{
            if(opcion==2){
                const division = parseInt(d1) / parseInt(d2)
                return "El resultado es: "+division
            }else{
                if(opcion==3){
                    const multiplicacion = parseInt(d1) * parseInt(d2)
                    return "El resultado es: "+multiplicacion
                }
            }
        }
    }
    
}
function mostrar()
{
    const opcion = document.getElementById("slt-operaciones").value
    const dato1 = document.getElementById("inp-dato1").value
    const dato2 = document.getElementById("inp-dato2").value
    
    const respuesta = calcular(dato1,dato2,opcion)
    document.getElementById("h-resultado").textContent = respuesta
}