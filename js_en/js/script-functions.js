/*
 *  Curso basico de javascript
 *  
 *  Functions - function is a simply code block which can be invoked (executed)
 *              as meny times as we want in different places in our code by us or even other people
 * 
 * 
 */

// function test(){
//     alert("sample");
//     alert("sample2");
//     alert("sample3");
// }

// test();

// function test(){
//     // return 5;
//     return "string";
// }

// var resultado = test();

// //alert(resultado);
// alert(test());

// las funciones tambien aceptan argumentos

function add(a,b){
    return a+=b;
}
function divide(a,b){
    return (b==0)?alert("you can't divide by 0"): a/b;
}

var sumOfVariables = add(3,5);
var divOfVariables = divide(1,0);

alert(sumOfVariables);
alert(divOfVariables);


