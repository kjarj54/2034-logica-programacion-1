

//Variables
let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 6;


while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroMaximoPosible}  por favor:`));

    console.log(typeof(numeroUsuario));
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        //intentos = intentos + 1;
        //intentos += 1;
        intentos++;

        //palabraVeces = 'veces';
        if (intentos > maximosIntentos) {
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }
        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
    }
}

/*

alert("Hello world!");
let secretNum =  Math.floor(Math.random()*10)+1;;
let intentos = 1;
let numUsu = 0;
//let palabra = "vez";
let maximosIntentos = 3;

while (numUsu != secretNum) {
  numUsu = prompt("Me indicas un número entre 1 y 10 por favor:");
  console.log(numUsu);
  if (numUsu == secretNum) {
    //cumple
    alert(`Acertaste, el número es: ${numUsu}.  Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`);
  } else {
    if(numUsu > secretNum){
      alert("El número es menor");

    }else{
      alert("El número es mayor");
    }
    intentos++;
    // if (intentos > 1) {
    //   palabra = "veces";
    // }
    if (intentos > maximosIntentos) {
      alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
      break;
  }
  }
}


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


// Pregunta al usuario qué día de la semana es.
let diaSemana = prompt("¿Qué día de la semana es?");

// Verifica la respuesta y muestra un mensaje apropiado.
if (diaSemana === "Sábado" || diaSemana === "Domingo") {
    alert("¡Buen fin de semana!");
} else {
    alert("¡Buena semana!");
}


let numero = parseFloat(prompt("Ingresa un número:"));

// Muestra una alerta informativa sobre el signo del número.
if (numero > 0) {
    alert("El número es positivo.");
} else if (numero < 0) {
    alert("El número es negativo.");
} else {
    alert("El número es cero.");
}

let puntuacion = parseInt(prompt("Ingresa tu puntuación:"));

// Muestra un mensaje según la puntuación.
if (puntuacion >= 100) {
    alert("¡Felicidades, has ganado!");
} else {
    alert("Intenta nuevamente para ganar.");
}

let saldoCuenta = 500; // Reemplaza con el saldo real del usuario.

// Muestra un mensaje utilizando un template string.
alert(`Tu saldo actual es: $${saldoCuenta.toFixed(2)}`);

let nombreUsuario = prompt("Ingresa tu nombre:");

// Muestra una alerta de bienvenida usando el nombre ingresado.
alert(`¡Bienvenido, ${nombreUsuario}!`);

*/
