/*
 *  Curso basico de javascript
 *  
 *  Scope of variables within the script / functions
 * 
 *  Scope (range) means where the variable is available
 * 
 */

// var a = 5;

// function test(){
//     a = 3;
//     alert(a);
// }

// test();

// alert("a is now changed it equals: " + a);

//var a = 5;  Si comentamos la declaración global a aun sigue siendo una variable global, es decir podemos declarar variables sin aplicar var

//function test(a){
function test(){    
    // var a = 3;     // funciona igual que al declararlo como argumento solamente vive dentro de la función
    a = 3;
    alert(a);
}

test();

alert("a : " + a);
