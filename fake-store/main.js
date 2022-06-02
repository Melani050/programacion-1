const consumir = async (cat) =>{
    const datos = await fetch("https://fakestoreapi.com/products/category/"+categoria)
    const producto = await datos.json()
    let cols = []

    producto.forEach(element => {
        let col = 
        `
        <div class="col-lg-3">
            <div class="card" style="width: 18rem;">
                <img src="${element.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">${element.description}</p>
                    <p class="card-text">${element.price}\$</p>
                    <a href="#" class="btn btn-primary">Comprar</a>
                </div>
            </div>    
        </div>
        `
        cols.push(col)
    });
    document.getElementById("div_c").innerHTML = cols.join('')
} 