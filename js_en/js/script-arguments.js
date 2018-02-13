/*
 *  Curso basico de javascript
 * 
 *  arguments object
 * 
 */

// function addNumbers(){
//     //alert(arguments.length);
//     alert(arguments[0]);
// }

function addNumbers(){
    var sum = 0;
    for(var property in arguments){
        //alert(arguments[property]);
        sum += arguments[property];
    }
    return sum;
}

var sum = addNumbers(3,7,6,4);

alert(sum);