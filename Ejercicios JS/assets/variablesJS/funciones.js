//mejores practicas 
//simplificar func. lo mas que se pueda

// 1. utilizar keyword function
// 2. nombrar nuestra funcion
// 3. Utilizar () y abrir y cerrar la funcion { }

function myFunction() {
  //aqui va el cuerpo de la función
  console.log ("Hola Mundo");
}

//myFunction ();


function myName() {
   let name = "Jazmin De La Fuente";
    console.log(name);
}

//myName ();

//Variable con scope local
function scopeFunction() {
    let local = "Esto se encuentra dentro de la func.";
    console.log(local);
}

//scopeFunction();
// console.log(local);

var nombre = "Jazmin Def";

function globalScope() {
  console.log(nombre);
}

//globalScope();

//scope de variables
//LET
//Scope global
// hoisting la variable no existe para nuestro interprete de JS

//console.log(a);
let a = "hoisting let";

//VAR
//Scope Global, local
//No se puede utilizar o invocar antes de declatoria. aparece como undefined.

//console.log(x)
var x = "hola";

//CONST
//Scope global, local 
// Hoisting: no se puede utilizar. no existe para nuestro interprete JS.
//console.log(c);
const c = "hoisting const";


// INPUT es un parámetro

const miNombre = "Jazmin";

function fiuFiu(x) {
    //console.log(x);
    
}
// parámetro declarado en variable
fiuFiu(miNombre);
// Parametro aleatoreo
fiuFiu("Jazmin");
fiuFiu(2);

//function con mas de un parametro
function dosParam(x, y) {
    //console.log(x + y);
}
// Invocacion con 2 parametros aleatorios
dosParam("Hola", "Mundo");

function tresParam(x, y, z) {
    //console.log(x + y + z);
}

tresParam("hola", "soy", "Jazmin");

///////////////////////////////////////////////////

//OUTPUT 

function out() {
      let x ="hola";
      return x;
}
//podemos recibir el dato de forma directa
//console.log(out());

//podemos guardar el output en una variable 
//y la podemos utilizar despuntes
const receive = out();

//console.log(receive);

//funcion con parametro y return

function areaRectangulo(b, a) {
 var resultado = b * a;
 return resultado;
}

console.log(areaRectangulo(6 , 3) );

function areaRectangulo(b, a) {
    var resultado = b * a;
    return resultado;
}

console.log(areaRectangulo(6, 3));


function areaTriangulo(b, a) {
    var resultado = b * a / 2;
    return resultado;
}

console.log( areaTriangulo(8, 4));


//using escape

prompt("Hola soy \n "Jazmin" ");

////////////////////////////////////////////////

//OBJETO

const Can = {
    "nombre" : "Velvet",
    "edad": 14,
    "color": "Caramelo",
    "peso" :50,
}

const myFunc = ()