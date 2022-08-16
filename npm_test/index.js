/**Paquetes modulos a implementar en el script */
//var colors = require('colors');

const { rainbow } = require("colors");

//const sum = (n1, n2) => {return (n1+ n2);}

//const sum =(n1, n2) => return (n1 + n2);
//const sum = (n1, n2) => n1 + n2

//callback (una funcion que pasa como argumento)
//function sum(n1, n2){
 //   return n1 + n2;
//}
//console.log("Briernes triste".rainbow);
//console.log('Run the trap'.trap.rainbow);
//console.log("Briernes triste".rainbow);
//console.log('Run the trap'.trap.rainbow.bgGrey);console.log("panal cutre con chanclas".inverse);
//console.log("panal cutre con chanclas".random);


/**
 * Este array es de donadores para una fundación
 * @param {string} name - El nombre de la persona
 * @param {int} age - Edad
 * @param {string} city - Ubicacion
 * @param {int} donation - Cantidad
*/


const donated = [
    {name: "Xavier", age: 19, city:"LA", donation: 20},
    {name: "David", age: 16, city:"georgia", donation: 20},
    {name: "Amanda", age: 18, city:"wahingon DC", donation: 20},
    {name: "Amy", age: 20, city:"chicago", donation: 20},
    {name: "Jesicca", age: 28 , city:"LA", donation: 20},
    {name: "Alex", age: 15, city:"LA", donation: 20}];

//const results = donated.filter((element)=> {
  //   if(element.age >= 18 ){
   //     return element;
   //  }
//});

/**
 *
 */
const results = donated.filter((e)=> e.age >= 18);

console.log('Donadores mayores de edad'.rainbow, results,);