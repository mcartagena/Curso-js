/*
 *  Curso basico de javascript
 *  
 *  Prototype - prelimanary model
 * 
 */

var div = document.getElementById("test");

div.innerHTML = "This is new text";

function person(name, surname,age){
    this.name = name;
    this.surname = surname;
    this.age = age;
//    this.somethingNew = 5;
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

//x.somethingNew = 5;
person.prototype.somethingNew = 2018;

div.innerHTML = x.somethingNew + "<br>" + y.somethingNew + "<br>" + z.somethingNew;