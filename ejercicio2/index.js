function calcular_area(){
    const b1 = prompt('ingrese base 1');
    const b2 = prompt('ingrese base 2');
    const h = prompt('ingrese altura');
    const respuesta = ((parseInt(b1) + parseInt(b2)) * h) / 2
    return respuesta
}
function mostrar(){
    const resultado = calcular_area()
    alert(resultado)
}