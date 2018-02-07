/*
 *  Curso basico de javascript
 *  
 *  Objects - containers for storing variables (properties) and functions (called methods)
 *            thematically related to each other for easier re-using
 * 
 *  Class (constructor function)
 *          Shortly class is a form for creating objects.
 *          A form like that is used to collect objects into one "class".
 *          You can create because of it many different from each other objects.
 *          but with the same properties and methods.
 */

var div = document.getElementById("test");

div.innerHTML = "This is new text";

// var person = {
//     name : "Marcelo", 
//     surname: "Cartagena",
//     age: 47,
//     isAdult: function(){
//         if(this.age<18)
//             return false;

//         return true;
//     },
//     toString: function(){
//         return this.name + " " + this.surname;
//     }
// };

// var person2 = {
//     name : "Heidi", 
//     surname: "Sarco",
//     age: 15,
//     isAdult: function(){
//         if(this.age<18)
//             return false;

//         return true;
//     },
//     toString: function(){
//         return this.name + " " + this.surname;
//     }
// };

function person(name, surname,age){
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.isAdult = function()
    {
        if(this.age<18)
            return false;

        return true;       
    };
    this.toString = function()
    {
        return this.name + " " + this.surname + " AGE:" + this.age;
    }
}

var x = new person("Marcelo","Cartgena","47");
var y = new person("Leonor","Cartgena","3");
var z = new person("Heidi","Sarco","15");

// div.innerHTML = person.isAdult();
div.innerHTML = x.age;
div.innerHTML = x["name"];
div.innerHTML = x + "<br>" + y + "<br>" + z;