let numero = prompt("Por favor, ingresa un número impar:");

while(numero % 2 == 0) {
    numero = prompt("El número ingresado no es impar. Por favor, ingresa un número impar:");
}

for(let i = 1; i <= 10; i++) {
    console.log(numero + " * " + i + " = " + numero * i);
}