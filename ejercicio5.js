let suma = 0;
let numero;

do {
    numero = prompt("Por favor, ingresa un número o '=' para terminar:");
    if(numero != "=") {
        suma += Number(numero);
    }
} while (numero != "=");

console.log("La suma de los números ingresados es: " + suma);