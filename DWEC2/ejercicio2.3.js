let numHer = prompt("Dime el número de hermanos que tienes");
let cant = prompt("Dime una cantidad");

if (numHer == 0){

    alert("No se aplicará descuento, la cantidad se queda en " + cant);

}else if (numHer > 0 && numHer < 3){

    alert("Se aplicará un desucento del 5%, la cantidad se queda en " + (cant * 0.95));

}else if (numHer >= 3){

    alert("Se aplicará un desucento del 15%, la cantidad se queda en " + (cant * 0.85));

}