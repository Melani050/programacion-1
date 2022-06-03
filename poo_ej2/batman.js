export default class Batman {
    constructor(){
    
    }

    async consumir_api(){        
        const pelicula = await fetch('http://fake-movie-database-api.herokuapp.com/api?s=batman')
        const peliculas_definidas = await pelicula.json()
        for (const Element of peliculas_definidas.Search) {
            console.log(`
                ${Element.imdbID}
                ${Element.Title}
                ${Element.Year}
                ${Element.Poster}
                `)
        }

    }
}