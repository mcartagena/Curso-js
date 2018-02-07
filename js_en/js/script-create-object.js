/*
 *  Curso basico de javascript
 *  
 *  Objects - containers for storing variables (properties) and functions (called methods)
 *            thematically related to each other for easier re-using
 * 
 */

var div = document.getElementById("test");

div.innerHTML = "This is new text";

// alert(div);

// var person = {
//     name : "Marcelo", 
//     surname: "Cartagena",
// //    age: 47,
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

var person = new Object({
    name : "Marcelo", 
    surname: "Cartagena",
    age: 15,
    isAdult: function(){
        if(this.age<18)
            return false;

        return true;
    },
    toString: function(){
        return this.name + " " + this.surname;
    }
});

// person.name = "Fernando";
// person.age = 47;

// alert(person.name);

// alert(person.age);

div.innerHTML = person.isAdult();