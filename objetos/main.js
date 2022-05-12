let alumno = {
    nombre:'Emmanuel',
    apellido:'Maldonado',
    dni: 46287124,
    correos:{
        outlook:'em@outlook.com',
        gmail:'em@gmail.com',
        yahoo:'em@yahoo.com.ar'
    }
}
//Forma 1
    //no es muy optima, se utilizaron tres lineas de código
//const yahoo = alumno.correos.yahoo
//const gmail = alumno.correos.yahoo
//const outlook = alumno.correos.yahoo

//Forma 2 - Destructuring object
    //se crea la constante y a la vez se almacena lo que contiene la propiedad
    //se crearon tres constantes
const { yahoo, gmail, outlook } = alumno.correos

console.log(`
    Correos:

    Gmail: ${gmail}
    Yahoo: ${yahoo}
    Outlook: ${outlook}
`)