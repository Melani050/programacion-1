const tareas = [
    {
        nombre:'Testeando soft',
        duracion:'25min'
    },
    {
        nombre:'Implementación de alta cliente',
        duracion:'90min'
    },
    {
        nombre:'actualiza cliente',
        duracion:'40min'
    },
    {
        nombre:'Desploy de soft',
        duracion:'120min'
    },
    {
        nombre:'Corrección de bug',
        duracion:'180min'
    }
    
] 

//uso del metodo map()
//map rrecorre los arreglos
let nombres = []
tareas.forEach(element => {
    nombres.push(element.nombre)

});

/**
 * aplicanda map()
 * si es solo una linea de codigo se puede omitir las {} y el return
 *  este map no entrga un arreglo de nombres
 * */ 
let nombres2 = tareas.map( tarea => tarea.nombre)

//USO DE FILTER
//toma todas las tareas
let tareas_prolongadas = []
tareas.forEach(element => {
    
    if(element.duracion >= 120){
        tareas_prolongadas.push(element)
    }
});
console.log(tareas_prolongadas)

//Filtrar haciendo uso de del metodo filter
//se omiten las llaves y el return
const tareas_prolongadas2 = tareas.filter(tarea=> tareas.duracion >= 120)
console.log(tareas_prolongadas2)