/* 

arrays o arreglos
 --defincicion--
  un arreglo es u conjunto de datos que se pueden almacenar en una sola variable.

 cuando tenemos una variable la usamos para almacenar un solo dato.
 En cambio, en un arreglo, guardamos MUCHOS datos a manera de lista.

 un array ya no es un tipo de dato primitivo, se concidera un objeto porque es una estructura de datos




//Ejemplo 1
let nombre = "Jazmin"; //aqui se almacena un solo dato

array = ["Felipe", "Ivonne", "Briana", "Zabdiel", "Alonso"];
//ejemplo de un array con diferentes tipos de datos 
array2 = ["Jazmin", 26, true, null, undefined];


-- Formas de crear un array --

1.- Primera Forma
Utilizando la palabra reservada "new Array"

En esta primera forma nosotros creamos un array usando la palabra reservada new y el metodo Array para especificarle a nuestro navagador que queremos crear un array. Hasta este momento, este array esta vacio por que no tenemos ningun dato dentro del parentesis (que es donde vamos a guardar los datos).

var colores = new Array(3); //Esta forma nos permite crear un array con un numero de elementos especificado, pero aún no sabemos que datos va a guardar.

var colores = new Array("rojo", "verde", "azul"); //En este punto estamos creando el array y ya le asignamos los valores en las posiciones que queremos mostrar.

var marcaDeColores = new Array ( "Mapita", "prismacolor", "BlancaNieves", "Faber Castell", "Norma", "Crayola");



2.- Segunda Forma


La segunda forma se trata de crear el arreglo solo usando corchetes.
[]. esta forma es la mas usadoa para crear arreglos en JS.

var marcaDeColores2 = [""Mapita", "prismacolor", "BlancaNieves", "Faber Castell", "Norma", "Crayola"]

*/

//Ejempos de arreglos 
/*
alert = ("hola");

listaDePerritos = ["chihuahua", "calupoh", "mestizos", "callejeros", "pugs"];

console.log(listaDePerritos);
*/

//ejercicio en equipos
/*
var peces = ["Pez globo","Pez Bruja","Pez Moly","Pez Angel"];

var bebidas = ["Chocomilk","Margaritas","Horchata","Jamaica","Cerveza"];

var comidaMexicana = ["Chilaquiles","Tacos","Tamales","Mole","Pozole"];

var pasaTiempos = ["Escuchar Musica","Patinar","Correr","Dibujar","Dormir","SAT"];

var paises = ["Mexico","Alemania","Costa Rica","Brasil","Suiza","Egpito"];

console.log(bebidas);
console.log(peces);
console.log(comidaMexicana);
console.log(pasaTiempos);
console.log(paises);
alert(bebidas);
*/

/* 
 --- Acceder a elementos de un array
 Antes de querer mostrar los elementos de un arreglo, hay que definir algunas cosas:

 -Posicion de los elementos, donde empezamos a enumerar desde el 0 y estas posiciones se llaman indices

 posicion de los elementos de un array
 0: "leche"
 1: "papitas"
 2: "Jabon"
 3: "nachos"
 4: "huevos"

 Numeros de elementos NO ES LO MISMO que su posicion.

*/

//ejemplo de arreglo 2
/*
listaDelSuper = ["leche", "papitas", "jabon", "nachos", "huevos"];
console.log(listaDelSuper);

console.log("el producto en la posicion 1 es:" + listaDelSuper[1]);
console.log("el producto en la posicion 4 es:" + listaDelSuper[4]);
console.log("el producto en la posicion 2 es:" + listaDelSuper[2]);
console.log("el producto en la posicion 6 es:" + listaDelSuper[6]);
*/
//Encontamos que al tratar de seleccionar un elemento de nuestro que no existe, aparecera el mensaje undefined. esto es porque la gran ventaja que tienen los arreglos en JS es que podemos crecer su tamaño cuando nosotros queramos. para esto, el arreglo se prepara por si en algun momento recibe mas informacion.

/* 

Array asociativo
son arreglos donde cada elemento esta asociado no solo con su indice, si no que tamnien esta asignado a un identificador.

sintaxis de un arreglo asociativo

*/
//spoiler ANTEPASADO DE CARRITOS DE COMPRA
/*
let propiedadesDeMiComputadora = {
    marca:"Asus", //La marca es mi indentidifador, y "Asus" es mi valor
    modelo: "GL5523X",
    procesador: "Intel i7",
    ram: "16 GB", 
    almacenamiento:"1TB",
    precio: "$15000"
}
*/
/*
console.log(propiedadesDeMiComputadora);
console.log("la RAM de mi computadora es de:", propiedadesDeMiComputadora["ram"]);
console.log("La marca de la computadora que elegiste es:", propiedadesDeMiComputadora ["marca"], "y su precio es de:", propiedadesDeMiComputadora ["precio"]);

let publicacionRedSocial = {
    nombre: "Jazmin",
    usuario: "@JazDef",
    fecha: "agosto",
    likes: "8000",
    descripcion: "Videito raro",
    ubicacion: "Monterrey",
}

console.log("Estas son las publicaciones de Agosto: ", publicacionRedSocial["fecha"]);
*/
/*
Metodos de los arrays
 
en los arreglos tenemos ciertos metodos o instrucciones que nos van a permitir manipular los elementos de este arreglo. estos nos permiten desde arreglar y eliminar elementos, hasta reordenarlos.

la sintaxis basica del metodo es: .nombreMetodo(valorAModificar);

podemos dividir estos metodos en 3:

    -metodos transformadores
    -metodos accesores
    -metodos repetitivos (spoiler)
*/ 
//console.log("//////////////////////////////////");
/*
var arrayDeEjemplo = ["Manzanas", "Peras", "Mangos", "Mandarinas", "Uvas", "Sandia", "Fresas"];

console.log("Este es nuestro arreglo Original de 7 elementos", arrayDeEjemplo);



//Metodos transformadores 

//METODO POP
//push(): agrega un elemento al final del arreglo

arrayDeEjemplo.push("Pitaya");
console.log("Agregamos la Pitaya a nuestro arreglo de ejemplo:", arrayDeEjemplo);


//METODO POP
// pop(): nos permite eliminar el ultimo elemento del arreglo
arrayDeEjemplo .pop(); //con pop no hace falta especificar el dato.
console.log("Eliminamos el ultimo elemento del arreglo", arrayDeEjemplo);
*/
/*
//METODO UNSHIFT
//Con el metodo unshift(): agregamos uno o mas elementos al principio del arreglo

arrayDeEjemplo.unshift("bananas", "tunas", "Aguacates", "Lichis");
console.log("Agregamos 4 elementos al principio del arreglo", arrayDeEjemplo);

//Shift(): Eliminar el primer elemento y devolver ese valor eliminado
arrayDeEjemplo.shift();
console.log("Eliminamos el primer elemento del arreglo", arrayDeEjemplo);

//sort(): Ordenar los elementos del arreglo y devuelve el arreglo ya ordenado de forma ascendente
arrayDeEjemplo.sort();
console.log("este es mi arreglo de ejemplo ordenado", arrayDeEjemplo);

//reverse(): invierte el orden de los elementos del arreglo y devuelve el arreglo invertido
arrayDeEjemplo.reverse();
console.log("este es nuestro arreglo invertido", arrayDeEjemplo);

//slice(): Extraemos una seccion del arreglo o cadena, y devuelve una cadena nueva, copiando el arreglo (no se modifica nada, sino que creamos una copia)

var saludo1 = "Hola, estoy aprendiendo arreglos en Generation"
var saludo2 = saludo1.slice(3, 7);
console.log ("imprimimos la rebanada del arreglo original", saludo2);

var saludo3 = saludo1.slice(9);
console.log ("imprimimos la rebanada del arreglo original", saludo3);

var saludo4 = saludo1.slice(-9);
console.log ("imprimimos la rebanada del arreglo original", saludo4);
*/
/*splice():  modificar el arreglo en 3 formas distintas

*eliminae elementos del arreglo 
*agregar elementos nuevos al arreglo
*reemplazar elementos que ya existen en el arreglo 

Sintaxis basica

splice(indice de inicio, cantidad de elementos a eliminar, nuevo elemento1, nuevoelemento2, etc.)

-Indice de inicio: la posicion desde donde comenzamos a eliminar elementos (primer numero dentro del parentesis)
-cantidad de de elementos a eliminar: numero de elementos a borrar(segundo numero del parentesis).
-elemento a agregar : los nuevos elementos que agregan al arreglo (tercer elemento del parentecis)

*/
/*
console.log ("///////////////////////////////")

let mesesDelAño = ["Enero", "Febrero", "Agosto", "Septiembre"];
console.log("Este es nuestro arreglo de los meses del año", mesesDelAño);

// Eliminar y agregar datos usando splice 

let mesesBorrados = mesesDelAño.splice(2, 2, "Abril", "Mayo");
console.log ("Este es el nuevo arreglo con los meses borrados:", mesesDelAño);

//Agregar elementos sin borrar nada arreglo

let diasSemana = [ "lunes", "Martes", "mirecoles"];
console.log("Los dias de la semana son:", diasSemana);

diasSemana.splice(2, 0, "jueves", "vierrnes", "sabado");
console.log("Los nuevos dias de la semana son:", diasSemana);

/*
Metodos accesores 
nos permiten acceder
*/ 
/*
var ensalada = ["jitomate", "zanahoria", "lechuga", "chicharos", "cebolla"];

//length(): Nos permite saber el numero de elementos o Longitud del arreglo

console.log("Tenemos estos elementos en el arreglo ensalada", ensalada.length);

//join(): nos permite unir los elementos del arreglo con una cadena de texto *sirve como un separador
console.log("Esta es una feliensalada:", ensalada.join("feli"));

//concat(): Nos permite unir dos o mas arrays en uno solo. Devuelve un nuevo arreglo con los elementos de los otros arreglos.

let dulces = ["galletas", "chetos", "glorias", "gansitos", "picafresas", "tamborines", "galletas"];

let mezcla = ensalada.concat(dulces);
console.log("Esta es mi mezcla: ", mezcla);


//indexOf: Nos permite saber la posicion de un elemento dentro del arreglo


console.log("La posicion de los chetos de mi arreglo dulces:", dulces.indexOf("chetos"));

//lastindexOf(): Nos permite saber la ultima posicion de un elemento determinado dentro del arreglo.

console.log("La ultima posicion de las galletas es:", dulces.lastIndexOf("galletas"));
*/

/*

Investigar esto de tarea

    - toString
    - valueOf 
    - includes


*/

/*
//toString/cadena de texto nos permite convertir el array en una cadena de texto
console.log(mezcla.toString());

//valueOf(): Nos permite devolver el valor de nuestro arreglo.
//valueof(): Nos permitir devolver el valor de nuestro arreglo
console.log(mezcla.valueOf());


//includes(): Nos permite saber si un elemento existe o no detro de un arreglo 

console.log("Asi podemos saber si un elemento esta dentro del arreglo", mezcla.includes("gansitos")); //true
console.log("Asi podemos saber si un elemento esta dentro del arreglo", mezcla.includes("cacahuates")); //false
*/
 
//04.08.22

//METODOS REPETIDORES

// filter(): recorre el arry y devuelve uno nuevo con los elementos que cumplan la condicion. (Es como un bucle).
/*
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Numeros del 1 al 10");

var numeros1al15 = numeros.filter(numero => numero <5);
console.log("Estos son los numeros que cumplen la condicion al ser menores que 5", numeros1al15);

var numeros6al19 = numeros.filter(numero => numero>=6 && numero <10);
console.log("estos son los numeros que cumplen la condicion al ser mayores de 5 y menores que 10", numeros6al19);

*/

/*

forEach(): Este metodo nos permite llamar a una funcion "callback" especifica una vez por cada elemento sobre el que se itrea del array. Al igual que otros iteradores como map o el filter, este metodo recibe algunos parametros:

    - Elemento actual: elemento del arreglo que se va a evaluar o sobre el que se hace la iteracion
    - Indice: La posicion que tiene el elemento dentro del arreglo
    - El arreglo objetivo: el arreglo por el cual se esta haciendo esta iteracion.

ESTE METODO NO CAMBIA EL ARREGLO ORIGINAL, DEVUELVE UNO NUEVO CON LOS ELEMENTOS MODIFICADOS

*/

//Ejemplo para remover el primer numero impar de un arreglo
/*
let listaNumeros = [3, 6, 8, 10, 12,];
let impar = 3;

var impares = listaNumeros.forEach(function(numero){ //por cada elemento del arreglo, ejecuta la funcion
    if (numero === impar){
        listaNumeros.shift();
    }
});

console.log("Estos son los elementos del array que no son impares", listaNumeros);
*/


////////////////////////////////////////////////////////



/*

Bucles o loops

En JS, los bucles o loops son utilizados para realizar tareas repetitivas con base en una condicion. Las condiciones normalmente devuelven un true o false al ser evaluadas, ademas de que el bucle continuara ejecutandose hasta que la condicion devuelva un false


Normalmente tenemos 3 ciclos
    - While (mientras)
    - Do while (hacer mientras)
    - For (para)

Tenemos otras sentencias mas especificas:

    - for in: sirve para recorrer un arreglo y por cada uno de los elementos de este arreglo obtenemos LA POSICION

    - for of: Sirve para recorrer un arreglo, y por cada uno de los elementos de este arreglo, obtenemos SU VALOR


*/

/*

Sentencia WHILE (mientras)

Esta sentencia nos va a permitr recorrer un bloque de codigo SIEMPRE que se cumpla una condicion especifica, donde el resultado debe ser true

la estructura de WHOLE es:

palabraReservada while (condicion que tiene que ser true) {
    //codigo a ejecutar
}


*/
/*
programa para sumar numeros ALERTA, ESTE PROGRAMA EXPLOTA LA COMPUTADORA

let numeroParaSumar = 0;
while (numeroParaSumar <10){
     console.log("el numero es menor a 10");
}


*/
//Contador sencillo

let valorInicial = 0; //Declaramos un valor inicial en 0
while (valorInicial < 5) {
  //mientras el valor inicial sea <5
  valorInicial++; //Ejecutamos este bloque de codigo (1 en 1)
  console.log("Este es el contador sencillo", valorInicial); //Imprimimos los resultados
}

//La sentencia while se ejecuta mientras se sigan obtiendo resultados positivos (true), y hasta que el resultado sea false, se para.

//Practica grupal: Escribir un programa que pida al usuario un numero entero positivo y muestre por pantalla todos los numeros impares desde 1 hasta ese numero




//bucle
/*
let numeroInicial = 1;

let valorLimite = prompt(
  "Hola, por favor ingresa un numero entero positivo que sea el limite"
);

while (numeroInicial <= valorLimite) { //MIENTRAS el numero inicial sea menor que el limite, ejecutamos lo de abajo
  if (numeroInicial % 2 != 0) { //si al dividir el numero inicial entre 2, el residuo es diferente de 0 (es impar)...
    console.log(numeroInicial); //Imprimimos el valor de la variable
  }
  numeroInicial++; // Incrementamos de uno en uno nuestra variable inicial
}

*/



/*

Do While (HACER MIENTRAS O HACER HASTA)

El bucle do while nos sirve para ejecutar una sentencia especififcada hasta que la condicion de aprobacion se evalua como falsa. La condicion se evalua despues de ejecutar la sentencia, dando como resultado que la sentencia especificada se ejecuta al menos una vez.

En pocas palabras, con el while preguntamos una vez, evaluamos la condicion y ejecutamos la instruccion. Con el do while, ejecutamos la instruccion al menos una vez, y luego preguntamos la condicion.

Estructura basica de un do while

palabraReservada do{
    codigo a ejecutar
}

while(condicion);

*/
 //ejemplo 1
/*
 let numerito = 0;  //Declaramos la variable en 0

 do{ //esto es hora...
    console.log("el numero es:", + numerito); //imprimimos
    numerito ++; //aumentamos de 1 en 1   
 }

while (numerito <=10); //...hasta que el numero sea menor o igual a 10
*/

//while vs Do While

console.log("while");

let numeroWhile=0; //Iniciamos en 0
while (numeroWhile <5){ //mientras variable sea menor a 5
    numeroWhile ++; // la incremento en 1
    console.log(numeroWhile); // lo imprimo
}


console.log("Do WHile");
let numeroDoWhile = 0; //inciamos en 0
do{ //hacemos esto...
    console.log(numeroDoWhile); //imprimir
    numeroDoWhile ++; //aumentar en 1
}
while (numeroDoWhile<5);//...mientras numero sea menor a 5


/*

Sentencia FOR (para)

Este ciclo sirve para iterar sobre una seccion de una variable. Es diferente al while por que le podemos pasar una lista de valores y ejecutar una vez por cada uno de ellos. Para esto tenemos tres elementos:


- El valor inicial de la variable que vamos a iterar (i = 0)
- La condicion que tiene que cumplirse para que el bucle se siga ejecutando (i <5)
- La operacion que se realiza una vez que termina el bucle (i++)

Estructura basica del for:

for (valor inicial, condicion, operacion){

}

*/

//Ejemplo: 

console.log("For");
for (let i = 0; i < 10; i++){
console.log(i);
}

//let i=0 es mi valor inicial
// i < 5 establece la condicion para que el bucle se siga ejecutando
// i++ incrementa el valor en 1


let animalitosDelBosque =["ardillas", "conejos", "venados", "osos", "mariposas"];

//in: posiciones EN el arreglo

for (posiciones in animalitosDelBosque){
    console.log(posiciones)
}
//of: valores DEL arreglo
for (valores of animalitosDelBosque){
    console.log(valores)
}

// for in (lo que vamos a buscar en el arreglo)
// for of (lo que vamos a buscar del arreglo )