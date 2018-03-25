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
        info.innerHTML += tmpString + "<br>";

        e.preventDefault();
     };

     /*
     myform.acceptationOfToS[0].onclick = function(){
        submitButton.disabled = false;
     };
     myform.acceptationOfToS[1].onclick = function(){
        submitButton.disabled = true;
     };
     */
    for(var i=0; i<myform.acceptationOfToS.length;i++){
        myform.acceptationOfToS[i].onclick = function(){
            submitButton.disabled = this.value === "true";    
        }            
    }
     
 }