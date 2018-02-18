/*
 *  Curso basico de javascript
 * 
 *  STYLES in DOM
 * 
 *  Si bien es cierto se pueden maninular elementos con query selector se aconseja manipularlos con clases definidas
 *  en el archivo css, de esta manera se puede modificar todos los elementos que pertenecen a esa clase de una vez y 
 *  facilmente.
 */

var courses = document.querySelectorAll("li");
var courses = document.querySelectorAll("#programmingCourses li")

// courses[0].style.color = "red";
// courses[6].style.color = "red";
// courses[6].style.display = "none";

// for(var index in courses){
//     courses[index].style.display = "none";
// }

for(var index in courses){
    courses[index].style.color = "red";
}
