function miResultado(golpes, par){
    // if (GO == 1)
    // console.log("Hole-in-One!");
    // else if (GO <= PA - 2)
    // console.log("Eagle");
    // else if (GO <= PA - 1)
    // console.log("Birdie");
    // else if (GO == PA)
    // console.log("Par");
    // else if (GO >= PA + 1)
    // console.log("Bogey"); //hasta acá funciona bien, desde acá da error
    // else if (GO >= PA + 2)
    // console.log("Double Bogey");
    // else if (GO >= PA + 3)
    // console.log("Go Home!");

    if (golpes === "" || par === "") alert("Debe ingresar golpes y par");

    // comprobacion de datos
    let g = parseInt(golpes);
    let p = parseInt(par);

    let resultado = g - p;

    if (g === 1) console.log("Hole-in-One!");

    if (resultado === - 2) console.log("Eagle");
    if (resultado === -1) console.log("Birdie");
    if (resultado === 0) console.log("Par");
    if (resultado === 1) console.log("Bogey");
    if (resultado === 2) console.log("Double Bogey");
    if (resultado >= 3) console.log("Go Home!");
}

function sub(){
    let golpes = document.getElementById("golpes").value;
    let par = document.getElementById("par").value;
    console.log("Tus Golpes son "+ golpes +" y el par es de " + par + " \n por tanto tienes un:");
    miResultado(golpes, par)
};

//const
//scope
// miResultado(golpes, par);
// miResultado(7, 4);
console.log("Torneo de Golf 2022. Todos los derechos reservados.")
