/////////////////////////
//EJERCICIO 01
function idCard () {
  var nombre = "Jazmin";
  var ubicacion = "Mty, NuevoLeon";
  var  pasatiempo = "dormir";

  console.log(` Hola mi nombre es: Jazmin vivo en: ${ubicacion} y disfruto ${pasatiempo}`);
}

/////////////////////////
//EJERCICIO 02


function caicMascotAge (edadHum){
    var nomMascota = prompt("¿Como se llama tu perro?");
    const edadCan = 7;
    let edadPerro= prompt("ingresa la edad de tu perro");
    var resultado = edadPerro*edadCan;
    return `La edad de tu perro ${nomMascota} es ${resultado}`
}
console.log(caicMascotAge());