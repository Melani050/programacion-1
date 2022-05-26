const consumir = async (cat) =>{
    const datos_recibidos = await fetch('https://fakestoreapi.com/products/categories/'+cat)
    const productos = await datos_recibidos.json()

    let cols = []

    productos.forEach(element => {
        let col = 
        `
        <div class="col-lg-3">
            <div class="card" style="width: 18rem;">
                <img src="${element.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">${element.description}</p>
                    <p class="card-text">${element.price}</p>
                    <a href="#" class="btn btn-primary">Comprar</a>
                </div>
            </div>    
        </div>
        `
        cols.push(col)
    });
    document.getElementById("id_row").innerHTML = cols.join('')
} 