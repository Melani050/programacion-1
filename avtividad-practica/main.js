let lenguajes = ['Python', 'JavaScript','Csharp', 'C++', 'Java','PHP', 'Ruby']

function mostrar()
{
    const longitud = lenguajes.length
    const ultimo = lenguajes[longitud-1]
    const tercero = lenguajes[2]
    document.getElementById("p-resultado").textContent= "Longitud: " + longitud + " Ultimo elemento: "+ ultimo +" Tercer elemento:"+ tercero
}

function imprimir()
{
    lenguajes.forEach(element => {
        console.log(element)
    });
}


lenguajes.push('Go')
console.log(lenguajes)

lenguajes.shift()
console.log(lenguajes)

lenguajes.unshift('Kotlin')
console.log(lenguajes)

const indice = lenguajes.indexOf('Java')

lenguajes.splice(indice,2)
console.log(lenguajes)