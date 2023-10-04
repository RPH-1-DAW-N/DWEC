let num = parseInt(prompt("Dime un número."));
let sum = 0;
while (num != 0){

    sum += num;
    num = parseInt(prompt("Dime un número."));

}
alert("La suma de los números es: " + sum);