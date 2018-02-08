/*
 *  Curso basico de javascript
 * 
 *  Arrays - series of values that are next to each other
 * 
 * TAB
 * ------------------------------
 *  [0] | [2] | [3] | [4] | [5] |
 * ------------------------------
 * 
 * Associative arrays, utilizan una clave para acceder a sus elementos en vez de un indice
 */

// var product1, product2, product3, product4, product5;
var products = [
    "XHTML",  //0
    "PHP",    //1
    "MySQL"   //2
];

// si queremos ingresar un cuarto elemento
products[3] = "Javascript";

// si queremos modificar un elemento existente
products[1]="Rubby";

//alert(products[0]);
//alert(products[3]);
//alert(products);

// si queremos agregar al final un elemento
products.push("Grunt.js");

// si queremos acceder al ultimo elemento
//alert(products[products.length-1]);

var person=[];

person["name"] = "Marcelo";
person["surname"] = "Cartagena";

// alert(person.name + " " + person.surname);

var programmingCourses = document.getElementById("programmingCourses").getElementsByTagName("li");

// obtenemos un HTMLCollection
alert(programmingCourses); 
// obtenemos un elemento del collection (HTML li)
alert(programmingCourses[0]); 
// obtenemos el contenido interno del elemento
alert(programmingCourses[0].innerHTML);

// tambien podriamos obtener todos los elementos de tipo li

var allLiElements = document.getElementsByTagName("li");

alert(allLiElements[allLiElements.length-1].innerHTML);