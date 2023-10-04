let num = prompt("Dime un número");
let cad = "";

if (num % 2 == 0) {

cad += "El número es par";

} 
else{

cad += "El número es impar";

}
if (num % 3 == 0) {

cad += ", y es múltiplo de 3";

}
if (num % 5 == 0) {

cad += ", y es múltiplo de 5"

}