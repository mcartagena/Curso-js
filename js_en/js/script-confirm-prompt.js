/*
 *  Curso basico de javascript
 *  
 * alert
 * confirm
 * prompt
 * 
 * \n
 * 
 */

 window.onload = function(){

    //alert("hello Marcelo!");
    //alert("hello \nMarcelo!");
    var answer = confirm("Are you sure about deleting your account?");

    if(answer){
        // alert("Good bye :-(");
        var result = prompt("what is your name?");
        alert("goodby "+result+" :-(");
    }

 };