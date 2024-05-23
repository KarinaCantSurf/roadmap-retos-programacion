/* CREAR FUNCIONES
 1. Defino la función */ 

function calculadora (){
    // Conjunto de instrucciones
    console.log("Yo calculo");
    console.log("Yo te ayudo");
   // return "Hola, yo calculo"; → Este NO reemplaza al console.log
}

// Invocamos la fnción acá:
calculadora();


// Con parámetros
function sumar (num1,num2) {
    let resultado;
    resultado = num1 + num2;
    return resultado;
  }
  
  let suma = sumar (9,6);
  console.log(suma); 

  // Parametros opcionales
  function calculadora(num1,num2, mostrar = false){
   if(mostrar == false){
    console.log("Suma" + (num1 + num2));
    console.log("Resta" + (num1 - num2));
    console.log("Multiplicación" + (num1 * num2));
    console.log("División" + (num1 / num2));
   }else{
    document.write("Suma" + (num1 + num2) + <br/>);
    document.write("Resta" + (num1 - num2) + <br/>);
    document.write("Multiplicación" + (num1 * num2) + <br/>);
    document.write("División" + (num1 / num2) + <br/>);
   }
  }

  calculadora(1,4);
  calculadora(5,10, true);


  // Funciones dentro de otras 
function porConsola(num1,num2){
    console.log("Suma" + (num1 + num2));
    console.log("Resta" + (num1 - num2));
    console.log("Multiplicación" + (num1 * num2));
    console.log("División" + (num1 / num2));
}

function porPantalla(num1,num2){
    document.write("Suma" + (num1 + num2) + <br/>);
    document.write("Resta" + (num1 - num2) + <br/>);
    document.write("Multiplicación" + (num1 * num2) + <br/>);
    document.write("División" + (num1 / num2) + <br/>);
}

function calculadora(num1,num2, mostrar = false){
    if(mostrar == false){
        porConsola(num1,num2);
    }else{
        porPantalla(num1,num2);
    }
    return true;
}

calculadora(1,4);
calculadora(5,10, true);
calculadora(8,2, true);


// Parámetros REST y Spread
function listadoFrutas(fruta1,fruta2, ...resto_de_frutas){
console.log("Fruta 1", fruta1);
console.log("Fruta 2", fruta2);
console.log(resto_de_frutas);
}

listadoFrutas ("Uva", "Frutilla", "Maracuya", "DragonFruit", "sandía", "mango");

var frutas = ["Uva" , "Frutilla"]
listadoFrutas (...frutas,"Maracuya","DragonFruit", "sandía","mango");


// FUNCIONES ANÓNIMAS

/* El conjunto de instrucciones no tendrá ningún nombre y 
yo lo puedo guardar dentro de una variable */

var pelicula = function(nombre){
    return "La peli es:" + nombre;
}

/* Para entenderlas mejor, hacemos una función de Callback
esto es una función que se ejecuta dentro de otra.
No tiene nombre y se le pasa como parametro a otra función,
y esa propia función dentro de ella ejecuta la función que le pasas */

function multiplica (num1,num2){
    var multi = num1 * num2;
    return multi;
}

console.log(multiplica (3,6));
//CALLBACK
function suma (num1,num2, sumaYmuestra, sumaPorDos){
    var sumar = num1 + num2;
    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}

suma(8,4, function(dato){
    console.log("La Suma es", dato);
},
function(dato){
    console.log("La suma por dos es",(dato*2));
}
 );

 /* FUNCIONES FLECHA: Es lo mismo qe hemos hecho arriba pero 
 en lugar de poner la palabra "function" se le quita y 
 en su lugar onemos esta flecha => son una manera de definir funciones de Callback
 de una manera más limpia y clara */


 suma(8,4, (dato) => { //Puedes incluso quitarle los paréntesis
    console.log("La Suma es", dato);
},
 (dato) => {
    console.log("La suma por dos es",(dato*2));
}
 );  