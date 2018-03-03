/*
 *  Curso basico de javascript
 * 
 *  Events - things that happen in your website
 * 
 *  this
 */

 function changeColor (){
     // result.style.color = "red"; // para evitar la dependenia de un solo elemento se puede utilizar this
     // this.style.color = "red";  // lo cual significa que cambiara aquel elemento que invoca la funcion
     // ahora es mejor utilizar la clase
     this.className = "test";
 }

 function changeColorOut (){
    // this.style.color = "black";  
    // this.className = "";
    // aunque no es aconsejable debido a que podria haber mas clases declaradas se puede utilizar 
    this.removeAttribute("class");
}

 var result = document.getElementById("result");

 result.onmouseover= changeColor;

 result.onmouseout = changeColorOut;
