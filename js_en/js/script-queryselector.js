/*
 *  Curso basico de javascript
 * 
 *  getElementById()
 *  getElementByTagName()
 * 
 *  less supported:
 *  getElementByClassName() - not supported in ie6, 7, 8
 *  getElementByName() - not supported in ie6, 7, 8
 * 
 *  not supported in ie 6 i 7 i half supported in ie8:
 *  querySelector() - selecting the first ocurrence of query and returning it as single variable
 *  querySelectorAll() - selecting all possible ocurrences of query and returning the array
 * 
 */

 // var programmingCourses = document.getElementById("programmingCourses").getElementsByTagName("li");
 // var programmingCourses = document.querySelectorAll("#programmingCourses li:nth-child(3)");
 // var programmingCourses = document.querySelector("#programmingCourses li:nth-child(3)");
 // var programmingCourses = document.querySelector("#programmingCourses li");
 var programmingCourses = document.querySelectorAll("li");

 // alert(programmingCourses[0].innerHTML);
 // alert(programmingCourses.innerHTML);  // no es necesario apuntar a un primer elemento de un array con selector
 alert(programmingCourses[6].innerHTML);