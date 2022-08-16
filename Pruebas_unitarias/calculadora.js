//programa para emular una calculadora

const sumar = (num1, num2) => {
    return num1 + num2;
}

const restar = (num1, num2) => {
    return num1 - num2;
}

const multiplicar = (num1, num2) => {
    return num1 * num2;
}

const dividir = (num1, num2) => {
    return num1 / num2;
}


//Necisito crear una constante del tipo objeto donde voy almacenar las variables que quiero testear
const operaciones = {
    sumar,
    restar,
    multiplicar,
    dividir,
}

//Debemos exportar todo el objeto
module.exports =operaciones;