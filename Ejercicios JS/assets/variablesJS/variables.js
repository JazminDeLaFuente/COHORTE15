// Mejores prácticas

// camelCase 
//  Utilizar mayusculas en la mitad de nuestras variables
// variableTriangulo, miNombre, miEdad, miDireccion

// Palabras reservadas
// No usar palabras reservadas para declarar una variable
// if, return, true, false, for, while, let, var, etc...
/*
var while;
var null ;
var if;
var true;
var false;
var var;
var const;
var let;
*/

// Seguir un standard personal

// Pueden contener numeros, letras, guion bajo, simbolo de dolar
var a;
var a1;
var a_Nombre;
var a$Direccion;


// Declaracion de variables
// Type Number
var edad = 24;
var peso = 78;
var miopia = 3;
var astigmatismo = 3;

// Type Boolean
var ciego = true;
var hambre = true;
var bateria = false;
var ia = true;


// Type String
var nombre = "Zabdiel Diaz";
var ciudad = 'Aguascalientes';
var nacionalidad = `Mexicano`;

// Type null
var ganasDeBibir = null;
var nineros = null;
var briAmonestaciones = null;

// Variables declaradas con un mismo valor
var x, y, z = 4;

// Variables undefined
var xx, yy, zz; 

// Variable tres = 4
//  var dos = tres
//  var uno = tres
var uno = dos = tres = 4;

//defined: el amor que le damos a nuestro crush
//undefined: el amor que nos tiene nuestro crush
//null: el amor que nos decia tener nuestro ex

// Escribir en una sola linea variables undefined de nuestro carrito de compras

var lacteos, cereales, carnes,frutas, verduras, abarrotes;

//typeOf();
//nos indica el tipo de dato al que pertenece nuestra variable

var a = 2;
//undefined
typeof(a);
//'number'

var b = "2";
//undefined
typeof(b);
//'string'

var c = true;
//undefined
typeof(c);
//'boolean'

var d = null;
typeof(d);
//'object'  <objeto de JavaScript

//isNaN(d); es una funcion que nos permite verificar si la variable es un numero o no 
//false

//NaN es tal cual un tipo de dato en JavaScript
isNaN(NaN);
//true

var e = NaN;
//undefined
isNaN(e);
//true

typeof(e);
//'number'

//var a = true;
//undefined
//number(a);
//1
//var b = false;
//number(b);
//0
//var cNumber = Number(c);
//undefined

//variables Boolean:
var hambre = true;
var sueño = true;
var comida = true;
var llorar = false;
var entrenar = false;

//variables string:
var nacionalidad = "mexicana";
var edad = "26";
var estadoCivil = "casada";
var horario = "lunes-viernes";
var nombre = "jazmin";
var Fecha_de_nacimiento = "";

//variables number:





// var a = 1 
//nueva forma de declarar variables 
var a = 1;

//let nos permite modificar su valor actual sin restricciones  
let a = 1;
//undefined
a = 2;
2
a = "2"

//constante
//es una variable con un dato que no va a cambiar
const a = 1;
// variables constantesdeben mantenerse con un solo valor, no es posibles cambialres el valor posterior a su declaracion.

//utilizamos coma para separar los valores


//const carros = ["BMW", "Volvo", "mercedes", "Ford"]; 
//undefined
//const carritoCompras = ["Leche", "Tortillas", "Mango", "Maruchan", "Aguacate", "Sandia", "Queso", "Sabritas", "Oreo", "Piña", "Chachitos", "Pollo", "Jamon", "Harina", "Mantequilla", "Chocolate", "Wafflera Plaza Sesamo", "Nutella", "Fresas", "Servilletas", "Xbox Series X"];
//carros;
//(4) ['BMW', 'Volvo', 'mercedes', 'Ford']
//const combinacion = [1, "hola", null, "5"];
//undefined
//combinacion
//(4) [1, 'hola', null, '5']