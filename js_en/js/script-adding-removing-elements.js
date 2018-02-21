/*
 *  Curso basico de javascript
 * 
 *  adding and removing elements on your website
 * 
 *  createElement("name of the tag")
 * 
 *  appendChild
 *  
 *  removeChild
 * 
 *  tmp.parentNode.removeChild(tmp)
 * 
 */

 var p = document.createElement("p");
 p.style.color = "red";
 p.className = "test";
 p.innerHTML = "<p id='test2'>something new</p>";

 var body = document.querySelector("body");

 body.appendChild(p);

 var test2 = document.getElementById("test2");

 p.innerHTML += "4";

 var test2 = document.getElementById("test2");

 test2.style.fontSize = "28px";

//  var programmingCourses = document.querySelector("#programmingCourses");

//  programmingCourses.parentNode.removeChild(programmingCourses);

var programmingCourses = document.querySelector("#programmingCourses");

programmingCourses.remove();  // solamente para browsers nuevos