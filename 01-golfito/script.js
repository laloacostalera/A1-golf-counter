function miResultado(golpes, par){
    
    if (golpes === "" || par === "") alert("Debe ingresar golpes y par");

    // comprobacion de datos
    let g = parseInt(golpes);
    let p = parseInt(par);

    let resultado = g - p;

    if (resultado === - 2) document.getElementById("respuesta").innerHTML="Eagle";
    if (resultado === -1) document.getElementById("respuesta").innerHTML="Birdie";
    if (resultado === 0) document.getElementById("respuesta").innerHTML="Par";
    if (resultado === 1) document.getElementById("respuesta").innerHTML="Bogey";
    if (resultado === 2) document.getElementById("respuesta").innerHTML="Double Bogey";
    if (resultado >= 3) document.getElementById("respuesta").innerHTML="Go Home!";

    if (g === 1) document.getElementById("respuesta").innerHTML="Hole in One!";
}

function sub(){
    let golpes = document.getElementById("golpes").value;
    let par = document.getElementById("par").value;
    // Hay que dar esta respuesta en un párrafo
    //("Tus Golpes son "+ golpes +" y el par es de " + par + " \n por tanto tienes un:");
    miResultado(golpes, par)
};


console.log("Torneo de Golf 2022. Todos los derechos reservados.")
