/*
 *  Curso basico de javascript
 *  
 *  checked - property informing if the checkbox was checked or not
 * 
 */

 window.onload = function(){
     var myform = document.getElementById("myForm");
     var submitButton = document.getElementById("myForm").submitButton;

     var info = document.getElementById("info");

     submitButton.onclick = function(e){

        var tmpString = "";
        for(var i=0; i < myform.courseName.length; i++){
            if(myform.courseName[i].checked)
                tmpString += myform.courseName[i].value + " ";
        }
        info.innerHTML += tmpString + "<BR>";

        e.preventDefault();
     };
 }