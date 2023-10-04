let num = parseInt(prompt("Dime un número"));
let n = num;
let res = parseInt(1);
while (num > 0) {

    res *= num;
    num--;

}
alert("El factorial de " + n + " es: " + res);