//necesito que este contador haga 3 cosas
//incremente de uno en uno.
//que decremente de uno en uno
//borre toda la cuenta
//necesitamos inicial en 0


var valorContador = 0; //inicializamos nuestra variable en 0

function incrementar (){
    valorContador++; //vamos a incrementar de uno en uno
    document.getElementById("contador").innerHTML = valorContador;
}
function decrementar(){
    valorContador--;   
    document.getElementById("contador").innerHTML = valorContador;
}
function resetear(){
//algo aqui tiene que pasar 
      valorContador = 0;
      document.getElementById("contador").innerHTML = valorContador;
}