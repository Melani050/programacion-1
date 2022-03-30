function mostrar_mensaje() {
    //popup
    alert('probando mi función')

}

function mostrar_en_consola() {
    //asignamos una cadena de string a una constante
    const nombre_apellido = 'Huenupi Melani'

    //forma 1 - sin template string

    console.log('nombre y apellido: '+nombre_apellido)

    //forma 2 tempalate string

    console.log(`
            Nombre y apellido: ${nombre_apellido}
            DNI
            Dirección:
    `)
}

//condicionales
function validar(){
    const calificacion = prompt('ingrese su calificación:');
    //condicion - forma 1

   /*if(calificacion >= 7){
        alert('Estas aprobado')
    }else{
        alert('Estas desaprobado')
        
    }*/

    //exprecion ternario
    //
    (calificacion >= 7) ? alert('Estas aprobado') : alert('Desaprobado')
}
//funcion con retorno comunicacion entre funciones
function calcular(){

    const number = prompt('Ingresa un numero: ');
    const resultado = number * 10
    return resultado
}

function visualizar(){
    const respuesta = calcular()
    alert(respuesta)
}