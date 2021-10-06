// este es un comentario simple //
/* comentario doble */

// mostrar un mensaje en la consola
console.log("hola comision")

// mostrar un mensaje en la pag HTML
document.write("Este es un mensaje");

// mostrar un mensaje en una ventana emergente
//alert("Esto es una alerta");

// crear o declarar variables (var - let - const)
var alumno = "Rodrigo";
let edad = 27;

document.write("<br>Alumno: "+alumno)
document.write("<br>Edad: "+edad)

alumno = "Marta";
document.write("<br>Alumno: "+alumno)

// pedir a un usuario que ingrese un nombre de un alumno
edad = prompt("Ingrese la edad de un alumno/a");
document.write("<br>Edad: "+edad);

const url = "https://campus.rollingcodeschool.com"
document.write("<br>URL: "+url);

let numero1 = 20;
let numero2 = parseInt(prompt("Ingrese el número"))

document.write("<br>Resultado: "+ (numero1 + numero2))

