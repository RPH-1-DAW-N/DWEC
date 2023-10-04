let nombre = prompt("DIme tu nombre:");
let apellidos = prompt("Dime tus apellidos:");
let salario = parseFloat(prompt("Dime tu salario:"));
let edad = parseInt(prompt("Dime tu edad:"));


if (salario >= 1000 && salario <= 2000) {

    if (edad > 45) 
    {
        salario *= 1.03;
    } 
    else {
        salario *= 1.10;
    }

} else if (salario < 1000){

    if (edad < 30) 
    {
        salario = 1100;
    } 
    else if (edad >= 30 && edad <= 45) 
    {
        salario *= 1.03;
    } 
    else 
    {
        salario *= 1.15;
    }
}

alert("Nombre: " + nombre + "\nApellidos: " + apellidos + "\nEdad: " + edad + " anos\nSalario: " + salario.toFixed(2));