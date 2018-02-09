/*
 *  Curso basico de javascript
 * 
 * loop
 * 
 */

var videoCourses = [
    "PHP",
    "MySql",
    "Javascript",
    "PDO",
    "Grunt.js",
    "SASS"
];

var result = document.getElementById("result");

// result.innerHTML += videoCourses[0];
// result.innerHTML += videoCourses[1];
// result.innerHTML += videoCourses[2];
// result.innerHTML += videoCourses[3];
// result.innerHTML += videoCourses[4];
// result.innerHTML += videoCourses[5];

// var i = 0;

/*
while(i < videoCourses.length){
    if(videoCourses[i]=="MySql")
    result.innerHTML += "hellooo  ";    
    result.innerHTML += videoCourses[i++] + "<br>";
} */

// var programmingCourses = document.getElementById("programmingCourses").getElementsByTagName("li");

// while(i < programmingCourses.length){
//     result.innerHTML += programmingCourses[i++].innerHTML + "<br>";
// }

function printCoursesWhile(idOfCourse){
    var courses = document.getElementById(idOfCourse).getElementsByTagName("li");
    var i = 0;

    while(i < courses.length){
        if(courses[i].innerHTML==="PHP" || courses[i].innerHTML==="Java")
            result.innerHTML += "THIS IS MY LANGUAGE: ";
        result.innerHTML += courses[i++].innerHTML + "<br>";
    }
}

function printCoursesDoWhile(idOfCourse){
    var courses = document.getElementById(idOfCourse).getElementsByTagName("li");
    var i = 0;

    // la diferencia con el while es que se ejecuta siempre una primera vez aunque la condición no sea true
    do{
        result.innerHTML += courses[i++].innerHTML + "<br>";
    }while(i < courses.length);
}

function printCoursesFor(idOfCourse){
    var courses = document.getElementById(idOfCourse).getElementsByTagName("li");
    
    // la diferencia con el while es que se ejecuta siempre una primera vez aunque la condición no sea true
    for(var i = 0;i<courses.length;i++){
        result.innerHTML += courses[i].innerHTML + "<br>";
    };
}

// printCoursesWhile("programmingCourses");
// printCoursesWhile("webDevelopmentCourses");

// printCoursesDoWhile("programmingCourses");
// printCoursesDoWhile("webDevelopmentCourses");

// printCoursesFor("programmingCourses");
// printCoursesFor("webDevelopmentCourses");

// for(var i = 0, j = 5;i<5 && j > 0 ;i++,j--){
//     if(i==3 || j==2){
//         alert(i + " " + j);        
//         break;
//     }
//     alert(i + " " + j);
// }

// for(var i = 0, j = 5;i<5 && j > 0 ;i++,j--){
//     if(i==3 || j==2){
//         alert("...continue...");        
//         continue;
//     }
//     alert(i + " " + j);
// }

var programmingCourses = document.getElementById("programmingCourses").getElementsByTagName("li");

for(var i = 0;i<programmingCourses.length;i++){
    if(i%2===0) 
        programmingCourses[i].innerHTML = "even " + programmingCourses[i].innerHTML;
    else    
        continue;
    /*
    *
    * muchas instrucciones
    *
    *
    */
    alert(i);
}