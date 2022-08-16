/*

Dentro de los navegadores tenemos 2 tipos de APIs:

- APIs nativas: Como el DOM que es el API que nos permite acceder al codigo HTML de nuestros documentos a traves de JavaScript.

- APIs externas: Como las APIs de Twitter que nos permite obtener los ultimos tweets del usuario, o la de GitHub que nos permite obtener la informacion de los repositorios de una cuenta.


Ejemplos de APIs WEB

    - DOM
    - XMLHttpRequest: Peticiones al servidor
    - fetch: API nos permite hacer peticiones al servidor
    - sessionStorage
    - localStorage


    FETCH API

    -Asincronismo(cuando le pido una torta al señor de las tortas con mucho tiempo de anyicipacion)
    
    JavaScript usa un modelo asincrono y no bloqueante, con un loop de eventos implementado en un solo hilo.
  - Single Thread
    - Operaciones de entrada y salida
    - Bloqueo
    - No bloqueo


     Ejemplo de aeropuerto
     Pista de aterrizaje = hilo o thread
     Input = cuando un avion va aterrizar
     Output = cuando el avion tiene que despegar
     Manejador de eventos = la torre de control

     Gracias al asincronismo, vamos a tener una pista de aterrizaje liberada, porque no vamos a poder aterrizar dos aviones al mismo tiempo, con lo que mantenemos un flujo constante de trabajo.




    
    -Sincronismo (cuando le pido una torta al señor de las tortas para ya porque tengo poco tiempo para comer)
*/

//ejemplo de javaScript sincrono

/*
console.log ("Inicio Sincrono");//1 se ejecuta
function dosSincrono(){
    console.log("Dos");
}
function unoSincrono(){
    console.log("uno");//2
    dosSincrono();//se ejecuta 3
    console.log("tres");//4
}

unoSincrono();
console.log("Fin de Sincrono");//5

//cual es la salida de este codigo: 1, 2, 3.


/*

/*
//Ejemplo de JS asincrono

console.log("inicio de asincrono")
function dos (){
    setTimeout(function(){
        console.log("Dos"); //5
    }, 2000);
}
function uno(){
    setTimeout(function(){
        console.log("uno");
    }, 0); //4
    dos();
    console.log("Tres"); //2
}
uno();
console.log("Fin de Asincrono");//3

//¿cual es la salida de este codigo?: 3, 1 y 2.

*/
/*
Ejemplo de unas tareas asincronas 

-Fetch a una URL para obtener un archivo JSON
-tareas programadas con setTimeout
-Spotify, al momento de reproducir un .mp3


Mecanismo o formas de hacer esto asincronos de JAVASCRIPT

Pasa controlas la asincronia de JS, podemos usar alguno de estos mecanismos:

   -Callbacks
   -Promises
   -Async/Await

Promesas (promises)

es algo que al principio no sabemos si se cumplira, por que pueden pasar muchas cosas. la gran cventaja de usar promesas, es poder usar una sola funcion que haga todo el trabajo, que el codigo sea mas estilizado y poder manejar de la mejor forma los dos escenarios posibles; si la promesa se cumple o no.

Una promesa es el resultado de la operacion asincrona, este resultado es en la forma de objeto el cual puede estar disponible AHORA o en el FUTURO . Aunque esta operacion puede finalizar exitosamente o fallar, la promesa nos permite saber cuando una operacion finaliza, independientemente del resultado.

las promesas tienen tres estados posibles.
   -pending/pendiente: estado inicial cuando se crea la promesa.
   *como el ejemplo de las tortas 
   -Fullfilled: cuando la operacion asincrona se completa con exito (resolve)
   -Rejected: Cuando la operacion asincrona falla (reject)
Ejemplo archivos de Felipe

- Pending: Cuando Felipe promete enviar los archivos (o cuando nos deja en visto)
- Fullfilled: Cuando Felipe los envia
- Rejected: Cuando no los envia o cuando avisa que no los puede enviar.
Ejemplo de los archivos de Felipe
    - then (funcion archivosEnviados)
    - catch (funcion felipeNoCumple)
    - finally (funcion promesaTerminada)

   Nuestras promesas tiene algunos metodos:

   -then (function resolve): Ejecuta la funcion resolve cuando la promesa se cumple.
   -catch (funtion resolve): ejecuta la funcion rechazado cuando la promesa no se cumple.
   -then (function resolve, function reject): Ejecutar las dos funciones resolve y reject
   -finally (function end): Ejecutar la funcion end si se cumple o no la promesa.
*/
/*
//Ejemplo de promesa para saber el nombre
let nombre = "Jazmin" ;

const promesaNombre = new Promise((resolve, reject) => {
    if (nombre !=="Jazmin") reject("Error!!, el nombre no es Jazmin");
    resolve(nombre);
}
);
console.log(promesaNombre);
*/
//Promesa de AMOR donde nos dejan en visto un ratito, y Luego nos aceptan la invitacion
/*
var promesaDeAmor = new Promise(function (resolve, reject){
    setTimeout(function(){
        resolve ("Si quiero salir contigo, te amo");
    }, 5000);
});

promesaDeAmor.then(function(valor){
    console.log("si quiero salir contigo, te amo");
});

console.log(promesaDeAmor);

//Ejemplo de promesa para ir por unas tortas
let decision ="si";

const promesaTortas = new Promise((resolve, reject) => {
    if (decision !== "Si") reject:("NO, no me gustas, no quiero ir contigo por tortas");
    resolve(decision);
}
);
console.log(promesaTortas);
*/


/*
Fetch API

FUENTES DE LO QUE VAMOS A TENER EN EL NAVEGADOR 

Es el nombre de una nueva API(nativa) para JS con la cual podemos realizar peticiones HTTP asincronas utilizando promesas, y de forma que el codigo sea un poco mas sencillo y legible. La forma de utilizar una peticion fetch es sencilla, solo debemos llamar a fetch y pasarle por parametro una URL de la peticion a realizar 
*/
//const solicitud = fetch('la url que vamos a consultar')
//Guardo en una constante llamada solicitud, la consulta que hago a una pagina externa

/*
fetch ('https://pokeapi.co/api/v2/pokemon/pikachu')
//realizamos la peticion a la URL de la API pokemon
         .then(datos =>{ //cuando te conectes al servidor, ejecutamos la siguiente funcion
            return datos.json(); //traeme todos los pokemon, y como se que los traes en texto, yo los convierto a formato JOSON
         })
         .then(info =>{ //cuando la promesa se resuelve, entonces ejecutamos esta fuccoin. Usamos el metodo then para obtener la respuesta de la promesa y guardarla en una variable llamada info. Gracias a esta variable, puedo almacenar la info de mi pokemos y sacar de ahi los datos que necesite.
            console.log("El nombre de nuestro pokemon es:",info.name, "y su numero es:", info.id);
         });

*/
         /*cuando hablamos de la API fetch, tambien debemos hablar de los endpoints, que son las direcciones de las peticiones que se realizan.
         
         por ejemplo, en nuestra URL https://pokeapi.co/api/v2/pokemon/pikachu, nosotros nos conectamos a la pokeapi, buscamos dentro de la categoria pokemon, y traemos la informacion de pikatchu. En este caso, pikachu es nuestro endpoint
         
         */
/*

         function fetchPokemon(id){
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`) //la peticion a la URL, donde usamos el parametro id para obtener la informacion del pokemon.
            .then(respuesta => respuesta.json()) //almacenamos la respesta en un formato .json}
            .then(dato => console.log(dato)) //Imprimimos la respuesta en consola
         }
         fetchPokemon(666);
*/
/*
        //Solicitud GET 
    fetch("https://fakestoreapi.com/products/10") //realizamos la peticion a una URL
    .then((datos) => {
      //cuando la promesa es resuelta, entonces ejecutamos esta funcion
      return datos.json(); //convertimos la respuesta a un formato JSON
    })
    .then((info) => {
      //cuando la promesa es resuelta, entonces ejecutamos esta funcion. Estamos usando el metodo .then para obtener la respuesta de la promesa y guardarla en la variable info. Gracias a esto podre obtener la informacion que queremos.
      console.log(
        "El nombre de nuestro producto es:",
        info.title,
        " y su precio es: ",
        info.price
      ); //imprimimos el nombre del producto. esto es posible por que la respuesta ya esta en formato JSON, y podemos acceder a los datos directamente, especificando el nombre del campo que queremos.
    });
 */
 /*
    //Solicitud POST para enviar informacion
    fetch('https://fakestoreapi.com/products',{
            method:"POST",  //ppr default es get para cambiarlo debemos especificar el metodo 
            body:JSON.stringify( //como la informacion que voy a manejar es un objeto, necesito combertirlo a un texto o un string

            //cuerpo de la solicitud
                {
                    title: 'chettos naranjas',
                    price: 3.0,
                    description: 'deliciosos chettos naranjas',
                    image: 'https://i.pravatar.cc',
                    category: 'jewelery'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
*/
/*
            APIS DE ALMACENAMIENTO WEB

            La API de almacenamiento web define dos mecanismos de almacenamiento que son muy importantes.
            -almacenamiento local
            -almacenamiento de sesiones
    
            tanto el almacenamiento local como el de saesiones, proporcionan un area privada para sus datos, esto quiere decir que otros sitios web no pueden acceder a esta informacion.
    
    
            ALMACENAMIENTO LOCAL (LocalStorage)
    
            La informacion almacenada con localStorage se guarda indefinidamente hasta que sea eliminada mediante codigo o bien borrada desde el navegador.
    
            El almacenamiento local es similiar a las cookies, pero se borra con menos frecuencia y puede almacenar mas datos. Por lo tanto, se puede utilizar en situaciones similares, tales como: almacenar articulos que un usuario de comercio electronico agrego a un carrito, almacenar historial de uso, etc.
    
            La informacion que almacenamos en localStorege se elimina hasta que se haga explicitamente, ya sea por nostros o por el usuario. Nunca se limpia automaticamente y se comparte en todas las sesiones que acceder al sitio.
    
    
    
            ALMACENAMIENTO DE SESION (SessionStorage)
    
            La informacion que guardamos en sessionStorage solo se guarda durante la sesion del navegador (es decir, se elimina cuando se cierra el navegador). Si tenemos varias ventanas o pestañas abiertas, la informacion se guarda en cada una de ellas, asi que si cerramos una ventana, la informacion se borra de la misma.
    
            COMO ACCEDEMOS AL ALMACENAMIENTO?
    
            wiondow.localStorage
            windows.sessionStorage
            */
    
   /*Guardar datos (localStorage.setItem(key,value)

La sintaxis para guardar datos en un localStorage es: localStorage.setItem(key, value);, donde key es la clave (o el identificador) y value es el valor que queremos guardar.
*/
/*
    
   
    {
    localStorage.setItem("nombre", "Jazmin");          
    localStorage.setItem("Apellido","De La Fuente");
    localStorage.setItem("Edad",27);
    localStorage.setItem("¿Es programador?","true");
    }

    {
    
    localStorage.setItem("nombre1", "Gabriel");          
    localStorage.setItem("Apellido1","Campos");
    localStorage.setItem("Edad1",28);
    localStorage.setItem("¿Es programador?1","true");
    }

    {
    localStorage.setItem("nombre2", "Andrea");          
    localStorage.setItem("Apellido2","Perez");
    localStorage.setItem("Edad2",28);
    localStorage.setItem("¿Es programador?2","true");
    }


   */ 
//podemos almacenar objetos?



/*
RECUPERAR DATOS (localStorage.getItem(key, value))
*/
/*
let recuperarNombre = localStorage.getItem("nombre");
console.log(recuperarNombre);

let recuperarEdad = localStorage.getItem("Edad");
console.log(recuperarEdad);

let recuperarProgramador = localStorage.getItem("¿Es programador?2");
console.log(recuperarProgramador);
*/
/*
//remover datos de localStorage (localStorage.removeItem(key))

localStorage.removeItem("nombre"); //me borre :´(
localStorage.removeItem("Apellido"); // borre mi apellido

//conoecer el largo de nuestro almacenamiento (localStorage.length)
let longitudlocalStorage = localStorage.length;
console.log(longitudlocalStorage);

//limpiar datos localStorage (local.storage.clear())
localStorage.clear();

//agregar elementos con sessionStorage

sessionStorage.setItem("perrito", "Rocky");
sessionStorage.setItem("gatito", "Bigotes");
sessionStorage.setItem("nutria", "Hernesto");
sessionStorage.setItem("caracol", "Gary");
sessionStorage.setItem("conejo", "Griselo");

let longitudSessionStorage = sessionStorage.length;
console.log(longitudSessionStorage);
*/

function guardarDatos(){
localStorage.nombre = document.getElementById
("nombre").value; //vamos a guardar el valor de nombre en localStorage
localStorage.password = document.getElementById
("password").value;
}

{
document.getElementById("datos").innerHTML = ("Datos guardados correctamente"); //sobreescribimos el contenido del parrafo por este nuevo mensaje

//Revisar el funcionamiento correcto de mi codigo
 console.log(typeof localStorage.nombre);
 console.log(typeof localStorage.password);
}

//intentar esto: localStorage.length == 0

function recuperaDatos(){

//si en la llave nombre de mi localStorage y ademas en la llave password los datos son diferentes de undefined (significa que si hay datos), voy a mostrar el mensaje con esa informacion    
    if(localStorage.nombre != undefined && localStorage.password != undefined){
        document.getElementById("datos").innerHTML = "nombre:" + localStorage.nombre + "password:" + localStorage.password;
    }else{
        document.getElementById("datos").innerHTML = "No has introducido tu nombre y password!!!";
    }
    
}