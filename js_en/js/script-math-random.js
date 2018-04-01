/*
 *  Curso basico de javascript
 *  
 * Math.round() - rounds the number to the norest integer
 * Math.ceil() - ceiling is up - so you round always up
 * Math.floor() - floor is down - so you round always down
 * toFixed(howManyNumbersAfterTheDot);
 * 
 * Math.abs() - absolute value (always positive)
 * Math.pow(x,y) - x to the power of y
 * 
 * parseInt
 * parseFloat("2.567hahshahsffhs");
 * typeof
 * 
 * Math.random() - return random value from 0 to 1
 * 
 */

 window.onload = function(){
     var info = document.getElementById("info");
     // var x = 2.251;
     // var x = -2.251;
     // var x = 3;
     // var x = parseInt("3.2323safsaf"); // solamente el entero
     // var x = parseFloat("3.2323safsaf"); // tambienn flotante
     // var x = "3.2323safsaf"; 
     // var randomNumber = Math.random();
     // var randomNumber = Math.random() * 2;  // si queremos generar numeros mayores multiplicamos por el deseado
     // var randomNumber = Math.round(Math.random() * 2); // obtiene numeros randomicos enteros 0-2
     // var randomNumber = Math.floor(Math.random() * 2); // obtiene numeros randomicos enteros 0-1
     var randomNumber = Math.floor(Math.random() * 2) + 2; // obtiene numeros randomicos enteros 2-3
     // la formula es 2 final + 2(o cualquier otro numero) dentro del random -1 (siempre)

     // info.innerHTML = Math.round(x);
     /*
     info.innerHTML = Math.ceil(x);  // redondea hacia arriba, sin importar si el decimal es menor que 5
     info.innerHTML = Math.floor(x); // redondea hacia abajo, sin importar si el decimal es mayor que 5
     info.innerHTML = x.toFixed(3);  // mantiene 3 decimales y redondea el tercero
     info.innerHTML = Math.abs(x);   // valor absoluto
     info.innerHTML = Math.pow(x,3); // valor elevado a 3
     */
     // info.innerHTML = typeof(x);    // retorna el tipo de variable
     info.innerHTML = randomNumber;   // genera numero randomicos entre 0 y 1
 }