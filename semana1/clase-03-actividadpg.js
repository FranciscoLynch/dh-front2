/* 1. “Tragamonedas”
Crear una función que reciba un número que será la cantidad de aciertos del
usuario sobre el total de casillas disponibles. La función deberá devolver el
monto del premio, el cual es proporcional al número de aciertos. */

const premioTotal = 2500;
const casillasDisponibles = 10;
function calcular(aciertos) {

    let premioPorCasilla = premioTotal / casillasDisponibles;

    if (aciertos < 0 || aciertos > 10) console.log('Deja de mentir, bolcero.');
    else return ('Acertando ' + aciertos + ' casillas, has ganado: ' + aciertos * premioPorCasilla);
}

console.log(calcular(5));

/* 
    2. “Loteria”
Crear un programa que consista en una apuesta donde el usuario tenga que
ingresar un objeto o lugar con el que soñó ese día, para que luego lo muestre
en pantalla y se calcula aleatoriamente un resultado numérico con 4 posibles
casos de premios que pueda ganar: si el resultado es 0, gana $1000, si es 1,
gana $10000; si es 2 gana $10000, y si es 3 gana $100000.
*/

function resultadoLoteria() {
}
resultadoLoteria()

/* 
3. “Ruleta”
Crear una función que sortee un numero random ganador, luego haga un ciclo
desde 1 hasta el final de la ruleta, imprimiendo por consola el número de esa
iteración. Pero en el caso del número que sea el ganador, imprimir por consola
“Numero ganador:” seguido del número.
*/

const finalRuleta = 25;

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function tirarRuleta() {

    let numeroRandom = getRandomArbitrary(0, 25);

    for (let i = 0; i <= finalRuleta; i++) {
        console.log('Numero: ' + i)
        if (parseInt(numeroRandom) == i) {
            return i;
            break;
        };

    }

}

let numeroGanador = tirarRuleta();

console.log('El numero ganador es: ' + numeroGanador);

/* B - ¡Analicemos código!

1. ¿Cómo funciona el siguiente bloque?: */

let numero = 20;
while (numero > 0) {
    resto = numero % 10;
    numero = parseInt(numero / 10);
    console.log(resto);
}

/* 
A | Mientras el número sea menor a 20, parsea la división de ese número / 10 y
muestra el resultado del cálculo por consola.
B | Es un bucle infinito en el que se imprime el resto de 20/10 indefinidamente.
C | Ejecuta una división en la que, mientras el número ingresado sea mayor a 0,
imprimirá por consola el valor del resto. X

*/

/* 
2. ¿Cómo funciona el siguiente bloque?:
*/

function aleatorio(minimo, maximo) {
    return Math.round(Math.random() * (maximo - minimo) + minimo);
}
console.log(aleatorio(4, 9))


/* 

A | Redondea el resultado de una ecuación que toma un número aleatorio
calculando como parámetros un mínimo 4 y máximo 9. X
B | Crea una función con 2 parámetros y retorna un número entero negativo.
C | Los argumentos 4 y 9 se toman de referencia para elegir un número al azar
decimal con el método math.random..

*/