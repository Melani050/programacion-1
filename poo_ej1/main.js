/*tengo que especificar la extencion.
para que funcione el import tengo que en el 
index especificar que es de tipo modulo y el import default de la clase
*/
//nos importamos la clase Trapecio que proviene del archivo trapecio.js
import Trapecio from "./trapecio.js";
function ejecutar(){
    const base_mayor = document.getElementById("inp_bma").value
    const base_menor = document.getElementById("inp_bme").value
    const altura = document.getElementById("inp_h").value

//una instancia es un objeto que en este caso pertence a la clase de trapecio.js
    //creamos la instancia de la clase Trapecio

    const trapecio = new Trapecio(base_mayor,base_menor,altura)
    //mediante el usa de la instancia invocamos y/o ejecutamos el metodo
    const respuesta = trapecio.calcular_area_trap()

    document.getElementById("resultado").textContent = 'Área trapecio: '+respuesta
}
document.getElementById("btn").addEventListener("click",ejecutar)