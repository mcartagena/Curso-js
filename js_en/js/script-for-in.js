/*
 *  Curso basico de javascript
 * 
 *  for /in
 * 
 */

person = {
    name: "Marcelo",
    surname: "Cartagena",
    age: "47"
};

var programmingCourses = document.getElementById("programmingCourses").getElementsByTagName("li");

courses = [
    "Compass",
    "C++",
    "SASS",
    "Grount.js",
    "javascript"
]

// for(var property in person){
//     alert(person[property]);
// }

// var x = "";

// for(var property in person){
//     x += person[property];
// }

// alert(x);

// for(var property in courses){
//     alert(courses[property]);
// }

for(var property in programmingCourses){

    if(typeof(programmingCourses[property])!== "object")
        continue;

    alert(programmingCourses[property].innerHTML);
}
