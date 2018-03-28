/*
 *  Curso basico de javascript
 * 
 * charAt(index) - what character is at index
 * substring / slice (from, to) - cut
 * split - splitting string into array
 * join - joining (connecting) an array into a string
 * replace(whatToReplace, forWhat) - replacing content of string for
 * trim - removing spaces before and after the string
 * lastIndexOf("value") - the last place where the "value" is in string
 * indexOf - the first place where the "value" is in string
 * search - the same as above can use regexp
 *  
 */

 window.onload = function(){
     var info = this.document.getElementById("info");
     var tmp = "a text about nothing";
     // var link = "http://video-courses-online.com/video-course-cpp.html"
     var link = window.location + " ";

     var tmpString = "XHTML PHP COMPASS SASS GRUNT.js";

     var tmpArray = tmpString.split(" ");
     tmpArray[2] = "CSS";

     var newArray = tmpArray.join(", ");

     info.innerHTML = tmp.charAt(0).toUpperCase() + tmp.substring(1);
     info.innerHTML = tmp.charAt(0).toUpperCase() + tmp.substring(1,3); // de la posicion 1 hasta la 3
     info.innerHTML = tmp.charAt(0).toUpperCase() + tmp.substr(1,3); // desde la posicion 1 mas 3 caracteres
     info.innerHTML = link.lastIndexOf("/") // retorna la posicion de la ultima ocurrencia
     info.innerHTML = link.substring(link.lastIndexOf("/") + 1); // retorna el resto desde el resultado anterior
     info.innerHTML = tmpArray[0];
     info.innerHTML = tmpArray[2];
     info.innerHTML = newArray;

     tmpString = "     " + tmpString.replace("XHTML","HTML 5") + "  "; 
     
     info.innerHTML = "**" + tmpString + "**";
     info.innerHTML = "**" + tmpString.trim() + "**";  // elimina los espacios en blanco
 }

