function calcular()
{
    const autos = document.getElementById("autos").value

    let descuento; 

    if (autos == 1750000) {
        descuento =1750000*.85
    } else {
        if (autos == 1950000) {
           descuento = 1950000*0.95
        } else {
            descuento =2560000*0.90
        }
    }

    document.getElementById("h-resultado").textContent = descuento
}