let n1 = parseInt(prompt("Dime un número a adivinar"));
let n2 = parseInt(prompt("Adivina el número introducido por otro usuario"));

while (n1 != n2) {

    if (n2 > n1) {

        alert("EL numero buscado es menor que el introducido");

    }else{

        alert("El número buscado es mayor que el introducido");

    }

    n2 = parseInt(prompt("Adivina el número introducido por otro usuario"));

}
alert("Has adivinado el número, este era el número " + n1);