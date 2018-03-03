/*
 *  Curso basico de javascript
 * 
 *  Events - things that happen in your website
 * 
 *  DHTML DYNAMIC
 */

 var result = document.getElementById("result");

 // result.onmouseover = alert('test');  // solamente funcionara la primera vez que se carga esto es porque js ejecuta inmediatamente

 // la solucion es crear una funcion anonima
result.onmouseover = function(){
    alert('test');
};

// una solucion mas elegante sería crear una funcion aparte que centralice todos los cambios

function sample(arg){
    alert(arg);
};

result.onmouseover = function(){
    sample('test con funcion centralizada');
};

