/*
 *  Curso basico de javascript
 * 
 *  defer atributo en html cuando carga el javascript indica al browser que carge el script en paralelo
 *  por esta razon funciona los eventos, si no se adjunta este atributo no funcionara
 *  <script src="js/script.js" defer>
 * 
 */

function changeColor(){
    this.className = "test";
}

function changeColorOut(){
    this.removeAttribute("class");
}

// sin embargo del atributo defer, con la funcion onload nos aseguramos que el scrip se ejecute cuando todos 
// los elementos esten cargados, con el atributo defer no hay certeza de que los elementos ya se hayan cargado
// cuando el script ya se cargo, por tanto no funcionara

window.onload = function(){
    var result = document.getElementById("result");
    result.onmouseover = changeColor;
    result.onmouseout = changeColorOut;
}