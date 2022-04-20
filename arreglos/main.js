//crear un array
//creamos un arreglo de string
let series = ['Breaking bad','Okupas','Narco','Casados con hijos','Peaky blinders']

//como conocer la longitud de un array
//se muestra en la consola
const longitud = series.length
console.log('Longitud: '+longitud)

//como acceder a un elemento del arreglo haciendo uso del indice(posicion)
const primero = series[0]
console.log('Primer elemento: '+primero)

//como accedo al ultimo arreglo
const ultimo = series[longitud-1]
console.log('Último elemento: '+ultimo)

//como recorrer un arreglo haciendo uso de un foreach
series.forEach( (element,index) => {
    console.log(index+ '- ' +element)
});

//como agregar un elemento al final de un array
//push -> insertar
series.push('Dragon Ball')
console.log(series)

//eliminar el ultimo elemento de un arreglo
series.pop()
console.log(series)

//como agregar un elemento al inicio del arreglo
series.unshift("Grey's anatomy")
console.log(series)

//como elimino el primer elemento de un arreglo
series.shift()
console.log(series)

//como obtener la posicion de un elemento
//indexOf -> busca el índice de x
const indice = series.indexOf('Casados con hijos')
console.log('Índice obtenido: '+indice)

//como eliminar un elemento teniendo su posición
//1er caso - eliminar un único elemento
series.splice(indice,1)
console.log(series)

//2do caso - eliminar mas de un elemento
const posicion = 1;
const numeroElemento = 2;
const elementosEliminados = series.splice(posicion,numeroElemento)
console.log(elementosEliminados)
console.log(series)

//copiar un array
let copia = series.slice()
copia.push("Dragon Ball")
console.log(copia)
console.log(series)