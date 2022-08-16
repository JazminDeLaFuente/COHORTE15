/*
Una prueba unitaria es una prueba automatizada que tiene como objetivo verificar la funcionalidad de una unidad de codigo. Entendemos "unidad de codigo" como la parte mas pequeña testeable de una aplicacion, pueden ser:

    - Rutinas
    - Funciones
    - Metodos
    Ventaja de las pruebas unitarias

El escribir pruebas unitarias nos va a permitir asegurarnos que el código funciona segun lo esperado, además de encontrar errores de forma mucho mas facil y poder realizar modificaciones sin comprometer otros elementos del programa. Tambien nos permite garantiazar que cuando el codigo siga evolucionando o escalando y se implementen nuevas caracteristicas, las caracteristicas mas antiguas siguen funcionando como antes y no se rompan debido a los nuevos cambios.

Las pruebas unitarias de JavaScript normalmente se ejecutan en el explorador o en el front-end, y al realizarlas debemos tener en cuenta los siguientes aspectos:

    - La caracteristica que se está probando
    - El resultado final
    - El resultado esperado

 */
//Ejemplo de una funcion basica

function promedio (calificacion1,calidicacion2, calidicacion3){
    calidicacionFinal = (calificacion1 + calidicacion2 + calidicacion3)/3;
    if(calidicacionFinal >=6){
        console.log("Felicidades, estas aprobado.");
    } else (console.log("Necesitas estudiar mas, no has aprobado."));
    }
promedio(0, 7, 0);


//que sucede si no ingreso las 3 calificaciones?
//que sucede si una de esas calificaciones es un numero negativo?
//que sucede si una de esas calificaciones es un caracter distinto de un numero



/*
Consideraciones para que JEST trabaje

1.- Almacenar las funciones a testear en una constante del tipo objeto
2.- Exportar estas funciones, para que esten disponibles en cualquier lugar
3.- Importar o al menos agregar la direccion de donde vienen esas funciones
*/