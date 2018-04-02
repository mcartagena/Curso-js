/*
 *  Curso basico de javascript
 * 
 */

 window.onload = function(){
    var info = document.getElementById("info");
    var sample = document.getElementById("sample");

    sample.onclick = function(e){
        e.preventDefault();
        /*
        *
        * OPERATIONS
        * 
        */
       // window.location = "sample.html";
       window.location = this.getAttribute("href");  // tambien funciona obteniendo el atributo href
    };
    info.innerHTML = window.location;
 };
