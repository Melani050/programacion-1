import Batman from "./batman.js";
function mostrar(){
    const batman = new Batman()
    batman.consumir_api()

}
document.getElementById("btn").addEventListener("click",mostrar)