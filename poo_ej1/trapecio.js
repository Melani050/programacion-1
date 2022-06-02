//NO es una funcion, pero funciona como una
//El nombre de la clase, se empieza con mayuscula
//export default es para poder exportar la clase
export default class Trapecio {
    //metodo que forma parte de la clase
    //tiene que respetarce el orden de los parametros
    constructor(bma,bme,h){
        //se declara la variable, pero en este caso se llaman ATRIBUTOS
        //this 
        this.base_mayor = bma
        this.base_menor = bme
        this.altura = h
    }
    //creamos un nuevo metodo
    calcular_area_trap(){
        //number es como el parseInt
        const resultado = ((Number(this.base_mayor) + Number(this.base_menor))/2)*this.altura
        return resultado
    }
}