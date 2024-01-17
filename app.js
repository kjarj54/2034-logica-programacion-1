alert('Hello world!');
let secretNum = 5;
let numUsu = prompt("Me indicas un número entre 1 y 10 por favor:");
console.log(numUsu);


if (numUsu == secretNum) {
    //cumple
    alert(`Acertaste, el número es: ${numUsu}`);
} else {
    //no cumple
    alert('Lo siento, no acertaste el número');
}



/*
alert('¡Bienvenida y bienvenido a nuestro sitio web!');

let nombre = "Luna";

let edad = 25;

let numeroDeVentas = 50;

let saldoDisponible = 1000;

alert('¡Error! Completa todos los campos');

let mensajeDeError = '¡Error! Completa todos los campos';

alert(mensajeDeError);

nombre = prompt('Por favor, ingresa tu nombre:');

edad = prompt('Por favor, ingresa tu edad:');
if (edad >= 18) {
  alert('¡Puedes obtener tu licencia de conducir!');
}
*/
