let resultado = 0;
let numero;
let operacion = prompt("Por favor, ingresa una operación (suma, resta, multiplicación, división):");

do {
    numero = prompt("Por favor, ingresa un número o '=' para terminar:");
    if(numero != "=") {
        switch(operacion) {
            case "suma":
                resultado += Number(numero);
                break;
            case "resta":
                resultado -= Number(numero);
                break;
            case "multiplicación":
                resultado *= Number(numero);
                break;
            case "división":
                resultado /= Number(numero);
                break;
            default:
                console.log("Operación no reconocida.");
                break;
        }
    }
} while (numero != "=");

console.log("El resultado de la operación es: " + resultado);