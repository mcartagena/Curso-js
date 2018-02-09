/*
 *  Curso basico de javascript
 * 
 *  Array Methods
 * 
 */

var videoCourses = [
    "PHP",
    "MySql",
    "Javascript",
    "PDO",
    "Grunt.js",
    "SASS"
];
var numbers = [
    4, -54, 24, 12, 12, 55
]

// document.getElementById("result").innerHTML = videoCourses;  

// mismo resultado para metodo toString

// document.getElementById("result").innerHTML = videoCourses.toString();  

// mismo resultado para metod valueOf

//document.getElementById("result").innerHTML = videoCourses.valueOf();  

// podemos agregar elementos cuando obtenemos los valores del array

/*
* join - is used to join elements by send argument length
*/

// document.getElementById("result").innerHTML = videoCourses.join("<br/>");  

// el metodo concat concatena conecta

// document.getElementById("result").innerHTML = videoCourses.concat(numbers);  

// el metodo pop retira el ultimo elemento del array

// document.getElementById("result").innerHTML = videoCourses.pop();  

// el metodo shift remueve el primer elemento

// document.getElementById("result").innerHTML = videoCourses.shift();  

// unshift - moviendo todos los elementos en el array por 1 y adicionando un elemento al inicio

// document.getElementById("result").innerHTML = videoCourses.unshift("MySql1");  

// el metodo sort ordena el array y el metodo reverse ordena el array en sentido contrario

// document.getElementById("result").innerHTML = videoCourses.sort();  

// el metodo slice obtiene una rebanada o una porcion del array, excluye al primero e incluye al ultimo

// document.getElementById("result").innerHTML = videoCourses.slice(2,5);  

// el metodo splice remueve los elementos indicados como parametros, el primer argumento indica desde donde,
// el segundo argumento indica cuantos elementos, y el tercer argumento opcional indica que agregue a los
// elementos al rango dicho entre el inicio y el final.

document.getElementById("result").innerHTML = videoCourses;  

document.getElementById("result").innerHTML += "<br>------------------------------<br>";

document.getElementById("result").innerHTML += videoCourses.splice(1,3,"add1",2,"add3",4);  

document.getElementById("result").innerHTML += "<br>------------------------------<br>";

document.getElementById("result").innerHTML += videoCourses;

// document.getElementById("result").innerHTML = videoCourses.length;  

// notese que el operador de concatenacion funciona diferente que el join, ya que agrega un solo elemento al final

document.getElementById("result").innerHTML += "<br>------------------------------<br>";

document.getElementById("result").innerHTML += videoCourses.reverse();

document.getElementById("result").innerHTML += "<br>------------------------------<br>";

// el metodo sort y reverse no funcionan para arreglos de numeros

// document.getElementById("result").innerHTML += numbers.sort();

// para que funcione debemos enviar como parametro para que utilice esta y ordene

document.getElementById("result").innerHTML += numbers.sort(function(a,b){return a-b;});

document.getElementById("result").innerHTML += "<br>------------------------------<br>";

// si queremos ordenar en reversa simplemente cambiamos el sentido de las variables

document.getElementById("result").innerHTML += numbers.sort(function(a,b){return b-a;});
