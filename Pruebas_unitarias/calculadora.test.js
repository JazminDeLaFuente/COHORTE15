//Importar la funcionalidad a testear *objeto

const calculadora = require('./calculadora');

//empezamos con el testing

test ('sumar dos numeros', () =>{
    expect (calculadora.sumar(5,5)).toBe(10); //
})

test ('restar dos numeros', () =>{
    expect (calculadora.restar(5,5)).toBe(0);
})

test ('multiplicar dos numeros', () =>{
    expect (calculadora.multiplicar(5,5)).toBe(25);
})

test ('Dividir dos numeros', () =>{
    expect (calculadora.dividir(5,5)).toBe(1);
})
