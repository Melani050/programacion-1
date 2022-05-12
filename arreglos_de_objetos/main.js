let arreglo = [
    {
        marca:'Peugeot',
        modelo:'207 Compact',
        anio: 2012,
        origen:'Mercosur'
    },
    {
        marca:'Volkswagen',
        modelo:'Golf 1.4 TSI',
        anio: 2022,
        origen:'Mexico'
    }
]
arreglo.forEach(element => {
    console.log(element.marca)
});