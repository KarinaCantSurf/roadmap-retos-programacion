/*
 EJERCICIO:
- Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje: → En Javascript existen 10 tipos de operadores
  Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits...
- Utilizando las operaciones con operadores que tú quieras, crea ejemplo que representen todos los tipos de estructuras de control que existan 
en tu lenguaje: Condicionales, iterativas, excepciones...
- Debes hacer print por consola del resultado de todos los ejemplos.
 
  DIFICULTAD EXTRA (opcional):
  Crea un programa que imprima por consola todos los números comprendidos
  entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
 */

// Operadores aritméticos 

sum = 3;
suma = 10;
console.log( sum + suma ); 

rest = 7;
resta = 2; 
console.log( rest - resta );

dividir = 36;
division = 6;
console.log( dividir / division);

// módulo (porcentaje)
mult = 9;
multi = 8;
console.log( mult * multi );

let porcentaje = 15 % 90;
console.log(porcentaje); 

let exponenciacion = 2 ** 3; // eleva 2 a la potencia de 3

i++;                            // SUMA 1 AL VALOR DE i Y RETORNA i
i--;                            // RESTA 1 AL VALOR DE i Y RETORNA i
++i;                            // SUMA 1 AL VALOR DE i RETORNA EL RESULTADO DE LA OPERACION POSTERIOR
--i;                            // RESTA 1 A AL VALOR DE i Y RETORNA EL RESULTADO DE LA OPERACION POSTERIOR


// OPERADORES DE ASIGNACIÓN
let a = 5;
let b = 18;
let c = 5;
let d = 5.0;


// OPERADORES LÓGICOS
verdadero = true;
falso = false;

// AND devuelve verdadero solo si las dos condiciones son verdadderas de lo contrario es falso
console.log("");
console.log("Tabla verdad AND");
console.log(verdadero && verdadero); //verdadero
console.log(verdadero && falso); //falso
console.log(falso && verdadero); //falso
console.log(falso && falso); //falso

// OR devuelve verdadero si al menos una de las condiciones es verdadera
console.log("");
console.log("Tabla verdad OR");
console.log(verdadero || verdadero);//verdadero
console.log(verdadero || falso);//verdadero
console.log(falso || verdadero);//verdadero
console.log(falso || falso);//falso
console.log(!false)// negacion devuelve verdadero
console.log(!true)// negación devuelve falso
console.log(!!false)//doble negacion devuelve false

// !(NOT)
// INVIERTE EL VALOR
let notA = !valorTrue;                  // DEVUELVE FALSE
let notB = !valorFalse;                 // DEVUELVE TRUE

// OPERADORES DE TIPO DE DATO
//USANDO typeof DEVUELVE EL TIPO DE DATO QUE SE ESTA EVALUANDO
let datoA = 5;
let datoB = "hola";
let datoC = true;
let datoD = undefined;

let tipoDatoA = typeof(datoA); //DEVUELVE "number"
let tipoDatoB = typeof(datoB); //DEVUELVE "string"
let tipoDatoC = typeof(datoC); //DEVUELVE "boolean"
let tipoDatoD = typeof(datoD); //DEVUELVE "undefined"


//------------> OPERADOR CONCATENACIÓN
let textoA = "Hola ";
let textoB = "MUNTO!";

let textoCompleto = (textoA + textoB);


// COMPARACIÓN
console.log("");
console.log("COMPARACIONES");
console.log(a>b); //devuelve falso porque a no es mayor que b
console.log(a<b); //devuelve verdadero 
console.log(a==b); //devuelve falso porque a y b tienen valores diferentes
console.log(a!=b); //devuelve verdadero porque a es distinto de b
console.log(a>=b); //devuelve falso porqueno es mayor o igual que b
console.log(a<=b); //devuelve verdadero porque a es menor o igual a b
console.log(a===b); //devuelve falso 
console.log(a===d); //devuelve verdadero porque son iguales y del mismo tipo
console.log(a!==b); //devuelve verdadero porque son distintos

// PERTENENCIA
console.log("");
console.log("PERTENENCIA");
const lista = [10,20,30];
const string =  "Hola; javascript";
console.log(lista.includes (10)); // devuelve true
console.log(lista.includes(40)); //devuelve false
console.log (string.includes('o')); //devuelve true
console.log (string.includes('e')); //devuelve false
console.log(string.includes("hola")); //devuelve false porque distingue entre mayúsculas y minúsculas

// OPERADOR CONDICIONAL (Ternario)

let edad = 15;

edad > 18 ? console.log('Soy mayor de edad') : console.log('No soy mayor de edad');

// Nullish coalescing (??)

// el operador a ?? b devuelve b sólo cuando a es undefined o null. Al contrario que el operador OR, con valores como false, 0 o "", no devuelve b.

console.log(42 || 50); // devulve 42
console.log(42 ?? 50); // devulve 42
console.log(false || 50); // devulve 50
console.log(false ?? 50); // devulve false
console.log(0 || 50); // devulve 50
console.log(0 ?? 50); // devulve 0
console.log(null || 50); // devulve 50
console.log(null ?? 50); // devulve 50
console.log(undefined || 50); // devulve 50
console.log(undefined ?? 50); // devulve 50

/* Operador de asignación lógica nula (??=)
Especialmente útil en los casos en que una variable tiene el valor null o undefined y se desea cambiar su valor
Sin asignación lógica nula */
let t = null;
if (t === null || t === undefined) {
    t = 120;
}

// Con asignación lógica nula
t ??= 120;


//  OPERADORES DE BITS

/* Se trata de una serie de operadores que nos permiten realizar operaciones básicas trabajando a nivel binario, donde los operandos solo pueden tomar valores de 0 o 1:

// x & y	Realiza una operación AND binaria. Devuelve 1 en las posiciones de bit dónde las posiciones de los dos operadores tienen un 1.
// x | y	Realiza una operación OR binaria. Devuelve un cero en las posiciones de bit dónde las posiciones de los dos operadores tienen un 0.
// x ^ y	Realiza una operación XOR binaria. Devuelve un cero en las posiciones dónde el bit es el mismo y un 1 dónde las posiciones son diferentes.
// ~ x	Realiza una operación NOT binaria.
// x << y	Realiza un desplazamiento de bits a la izquierda.
// x >> y	Realiza un desplazamiento de bits a la derecha.
// x >>> y	Realiza un desplazamiento de bits a la derecha rellenando con ceros. */

let a = 9; // en bits: 1001
let b = 12; // en bits: 1100

console.log(a & b); // Devuelve 1000 - 8
console.log(a | b); // Devuelve 1101 - 13
console.log(a ^ b); // Devuelve 0101 - 5

// Para ver las operaciones de desplazamiento de bits se npuede calcular las potencias de 2:

let c = 2; // en bits: 000010

console.log(c << 1); // Devuelve 000100 - 4
console.log(c << 2); // Devuelve 001000 - 8
console.log(c << 3); // Devuelve 010000 - 16
console.log(c << 4); // Devuelve 100000 - 32


// ESTRUCTURAS DE CONTROL

//IF - ELSE    

let edad = 17;

if (edad < 16 ){
    console.log("La entrada solo esta permitida a mayores de 16 años");
} else if (edad >= 16 && edad < 18) {
    console.log("Puede entrar pero no consumir bebidas alcoholicas");
} else {
    console.log("Puede pasar")
}


// SWITCH

let monthNum = 7;
switch (monthNum) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;
  default:
    console.log("The number doesn't match any month");
}

// CICLOS, BUCLES O LOOPS <---------------

/* Ciclo for
El bucle FOR se utiliza para repetir una o más instrucciones un determinado número de veces.
De entre todos los bucles, el FOR se suele utilizar cuando sabemos seguro el número de veces
que queremos que se ejecute. La sintaxis del bucle for se muestra a continuación:
              for (inicialización; condición; actualización) {
    //sentencias a ejecutar en cada iteración
} */

// Ejemplo:

for (var i = 0; i < 5; i++) {
    console.log(i);
}

console.log(' Final del bucle for');

/* CICLO for...of
La sentencia sentencia for...of ejecuta un bloque de código para cada elemento de un objeto iterable, como lo son:
String, Array, objetos similares a array,TypedArray, Map (en-US), Set e iterables definidos por el usuario. Su sintaxis es:

             for (variable of iterable) {
             statement;
                 } */

//Ejemplo:

let animales = ['perro', 'gato' , 'tigre'];

for (let animal of animales){
    console.log(animal);
}

/* CICLO for...in
La instrucción for-in itera sobre todas las propiedades enumerables de un objeto que está codificado por cadenas
(ignorando los codificados por Símbolos, incluidas las propiedades enumerables heredadas). Su sintaxis es:

       for (variable in objeto) instrucción; */

// Ejemplo:

let user = {
    id: 1;
    nombre: 'uno';
}

for(let valor in user){
    console.log(valor);
}

/* Ciclo WHILE
El bucle while empieza por evaluar la condición. Si la condición es verdadera (devuelve true),
entonces las sentencias son ejecutadas. Si la condición es falsa (devuelve false),
entonces las sentencias no son ejecutadas. Luego el bucle finaliza. Su sintaxis es:

 while (condicion) {
    sentencia(s);
} */

// Ejemplo:

var i = 1;
while (i < 5) {
    console.log(i);
    i++; // i=i+1 esto sería lo mismo
}

console.log(' Final del bucle while');

/* Ciclo DO-WHILE
El bucle  do...while está cercanamente relacionado al bucle while.
En el bucle  do...while, la condición se evalúa al final. La sintaxis para este bucle es:

/*  do {

   *Sentencias;*

} while (*condicion*); */

// Ejemplo:

var i = 0;
do {
    i = i + 1;
    console.log(i);
} while (i < 5);

console.log(' Final del bucle do-while');


          // EJERCICIO EXTRA //
          for (var i_2 = 10; i_2 <= 55; i_2++) {
            if (i_2 % 2 === 0) {
                if (i_2 === 16) {
                    console.log('Ignorar');
                }
                else if (i_2 % 3 === 0) {
                    console.log('Multiplo de 3');
                }
                else {
                    console.log(i_2);
                }
            }
            else {
                console.log('No es par');
            }
        }