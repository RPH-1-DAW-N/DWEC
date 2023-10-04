let sign = prompt("Dime un signo (+, -, *, /)");
let n1 = prompt("Dime un número");
let n2 = prompt("Dime un número");

if (sign == "+"){

    alert("La suma de los numeros " + n1 + " y " + n2 + " es: " + (n1 + n2));

}else if (sign == "-"){

    alert("La resta de los numeros " + n1 + " y " + n2 + " es: " + (n1 - n2));

}else if (sign == "*"){

    alert("La multiplicación de los numeros " + n1 + " y " + n2 + " es: " + (n1 * n2));

}else if (sign == "/"){

    alert("La división de " + n1 + " entre " + n2 + " es: " + (n1 / n2));

}
