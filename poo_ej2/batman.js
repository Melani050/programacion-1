export default class Batman {
    constructor(){
    
    }

    async consumir_api(){        
        const pelicula = await fetch('http://fake-movie-database-api.herokuapp.com/api?s=batman')
        const peliculas_definidas = await pelicula.json()
        let columnas = []
        for (const Element of peliculas_definidas.Search) {

            let columna =
            `
            <div class="col-lg-3">
                <div class="card" style="width: 18rem;">
                    <img src="${Element.Poster}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${Element.Title}</h5>
                        <p class="card-text">Estreno: ${Element.Year}</p>
                    </div>
                </div> 
            </div>   
            `
            columnas.push(columna)
        }
        document.getElementById("div_row").innerHTML = columnas.join('')
    }
}