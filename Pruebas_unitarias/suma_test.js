//ejemplo de la funcion suma de mi calculadora

//En esta funcion suma, pasamos 2 valores como parametros para realizar la operacion.

//Forma normal de felipe
function sumaFelipe(num1,num2){
    return  num1+num2;
  }
//forma mas o menos de felipe
const suma1 = (a,b) =>{
    return a-b
}
//forma PRO de Jaciel
sumaJaciel = (a,b) => a+b

//nombrefuncion = (parametros) => (que parametros recibir)

//forma mas o menos de felipe
const sumaEjemplo = (a,b) =>{
    return a-b //obtengo un -2
}
sumaEjemplo(1,3); //espero obtener un 4


//Funtion sumav2
const sumaEjemplov2 = (a,b) =>{
    return a -b
}
if (sumaEjemplov2(1, 3) !=4){
    console.error("la suma de 1 y3 deberia ser 4")
}

//funcion sumav3

const sumav3 =(a,b) =>{
    return a- b
}

console.assert(sumav3 (1,3) === 4,
    "la suma de 1 y 3, deberia ser 4");

    //console.assert nos ayuda a mostrar un mensaje de error en la consola si la afirmacion es falsa. Si la afirmacion es verdadera, no se mostrara ningun mensaje. OJO, segun la documentacion de mozilla, esta caracteristica no esta disponible en todos los navegadores, por lo que no es recomendable usarla.


//Escenarios de prueba
const escenarios = [
    { a: 0, b: 0, resultado: 0 },
    { a: 1, b: 3, resultado: 4 },
    { a: -3, b: 3, resultado: 0 },
]

//Para cada esceneario, se recorre y de cada esceneario se recupera la a, la b y el resultado esperado, y se ejecuta la funcion sumav4 con los parametros a y b.
escenarios.forEach(revisar => {
    const { a, b, resultado } = revisar

    console.assert(
        sumav3 (a, b) === resultado,
        "La suma de " + a + " y " + b + " deberia ser " + resultado
    )
})

console.log("La cantidad de escenarios pasados es: ", escenarios.length);


/*

    Test Runner (Herramientas para hacer pruebas unitarias)

    - Mocha
    - Ava
    - Jest

Jest es un marco de pruebas de JavaScript mantenido por Facebook, y esta enfocado en la simplicidad. Funciona con proyectos que utilizan Babel, TypeScript, Node.js, React, Angular y Vue.js. su objetivo es trabajar de inmediato y sin configuracion. Estaba pensado originalmante para trabajar en el lado del cliente, pero puede ser usado en cualquier lado.


 */
