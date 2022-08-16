/*

*Programacion Orientada a Objetos en Javascript

Paradigma de programacion que nos permite crear soluciones a problemas que se nos presentan, tomando como ejemplo los objetos del mundo real. 

Otras formas de programar:

- Programacion funcional
- Programacion imperativa
- Programacion declarativa

Elementos de la Programacion Orientada a Objetos

    - Clases: Plantilla que nos sirve para crear objetos. 
    - Objetos: Elementos creados a partir de la plantilla.
    - Propiedades o atributos: Informacion que tiene un elemento.
    - Metodos o funciones: Lo que hacen y como lo hacen. (accines que puede realizar)
    - Constructores: Son quienes construyen al objeto tomando en cuanta a la plantilla
    - Instanciar: Crear o materializar el objeto.
    

Ejemplo de los gatitos:

    - Mama y papa gatitos: Clase
    - Gatitos bebes: Objeto
    - Color de los gatitos: Atributos o caracteristicas
    - Maullar y ronronear: Metodos o funciones
    - Tener un gatito para darle todo nuestro amor: Instanciacion o materializacion


Ejemplo de las casas:
    
    - Plano de la casa: Clase o plantilla
    - Casitas: Objetos
    - Cantidad de niveles que hay en una casa: atributos
    - Abrir estacionamiento: Metodo o funcion
    - Personal de construccion: Constructores
    - Tener la casa lista para vivir: Instanciacion o materializacion


*/

//EJEMPLO DE GATITOS

const Felix = {
    nombre:"Felix",
    color:"Naranja",
    peso:"10kg",
    edad:"5 años",
    colorOjos:"verdes",
    raza:"fold escoses",
    sexo:"hembra",
    vacunas: true,
    numeroBigotes: "20",
    tipoPelo: "largo",
    manchas: true,
    imagen: "felix.jpg"
};
const Bigotes = {
    nombre:"Bigotes",
    color:"Naranja",
    peso:"10kg",
    edad:"5 años",
    colorOjos:"verdes",
    raza:"fold escoses",
    sexo:"hembra",
    vacunas: true,
    numeroBigotes: "20",
    tipoPelo: "largo",
    manchas: true,
    imagen: "Bigotes.jpg"
};

console.log(Felix);//toda la info del gatito
console.log(Felix.nombre);//imprime el nombre
console.log(Felix.vacunas);
console.log(Felix.numeroBigotes);


//plantilla para crear muchos gatitos

//1.- Defino mi plantilla con las propieades como variables, para despues agregar valores
class gatito {
    nombre = "";
    color = "";
    edad = 0;
    raza = "";

//3.- Crear un constructor
constructor(nombre, color, edad, raza) { //necesitamos pasar los parametros
    this.nombre = nombre;
    this.color = color;
    this.edad = edad;
    this.raza = raza;
    } //fin del constructor


//this (este o esto): Nos va a indicar el lugar donde estamos (ciudad o en el campo). Necesitamos saber que esta palabra es reservado, y nos ayuda a saber el aqui y el ahora. hace referencia a la clase en la que estamos, y los objetos que estamos creando.


// 2.- Defino mis metodos como FUNCIONES porque con estas podemos realizar acciones.
 maullar 
 dormir 
 ronronear 
}//fin de la clase

//mandamos a imprimir

imprimirInfo(div,bg){
    div.innerHTML += `<div class="card ${bg} mb-3" style="max-width: 18rem;"> 
    <div class="card-header">${this.nombre} <span class="badge badge-secondary">${this.color}</span></div>
    <div class="card-body">
      <h5 class="card-title">${this.edad}</h5>
      <p class="card-text">${this.raza}.</p>
      
    </div>
  </div>`; 
}


//4.- Crear gatitos

let Kitty = new gatito ("Kity", "Blanco", 666, "japonesa");
let Garfield = new gatito ("Garfield", "Chettos", 15, "Persa");
let Lucas = new gatito ("Lucas", "chocolate", 2, "callejero");
let perejil = new gatito ("perejil", "Blanco", 8, "kawaii");

console.log(Kitty);
console.log(Garfield);
console.log(Lucas);
console.log(perejil);
imprimirInfo(div,bg){
    div.innerHTML += `<div class="card ${bg} mb-3" style="max-width: 18rem;"> 
    <div class="card-header">${this.nombre} <span class="badge badge-secondary">${this.color}</span></div>
    <div class="card-body">
      <h5 class="card-title">${this.edad}</h5>
      <p class="card-text">${this.raza}.</p>
      
    </div>
  </div>`; 
}

