let numero = prompt("ingresa un número que sea múltiplo de 5:");

while(numero % 5 != 0) {
    numero = prompt("El número no es múltiplo de 5. ingresa un número que sea múltiplo de 5:");
}

do {
    console.log(numero);
    numero--;
} while (numero >= 1);