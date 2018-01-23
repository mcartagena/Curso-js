/*
 *  Curso basico de javascript
 *  
 * Anonimous fucntions 
 * 
 * Function as an expression (as the value of the variable)
 * 
 */

 /*
 var x = function test(arg){
     alert("sample " + arg);
 }

 //test(); // la llamada a esta funcion no funcionara ya que la funcion test esta definida dentro de la variable x.

 x(5);  // para invocar la funcion debemos instanciar la variable x.
*/

/*
function test(f,arg){
    f(4 + arg);
}

test(function(x){
    alert('sample ' + x);
},20);
*/

var hi = function(type){
    if(type==="boss")
        return function(name){
            alert("Hi boss, " + name);
        };
    else
    return function(name){
        alert("Hi, " + name);
    };
};

// hi("boss");  // no existe ningun resultado ya que la funcion anonima se encuentra dentro del return

var returnedFunction = hi("employee");

// returnedFunction();  el resultado va hacer Hi boss, undefined

returnedFunction("Arek");

