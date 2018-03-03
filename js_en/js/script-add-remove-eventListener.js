/*
 *  Curso basico de javascript
 * 
 *  para codigo limpio y facil de mantener podemos utilizar 
 * 
 *  addEventListener
 *  removeEventListener
 * 
 *  IE 6, 7, 8
 *  attachEvent
 *  detachEvent
 */

function changeColor(){
    this.className = "test";
}

function changeColorOut(){
    this.removeAttribute("class");
    //this.removeAttribute("style");
}
function increaseFontSize(){
    //alert(window.getComputedStyle(this).getPropertyValue("font-size"));
    var fontSize = parseInt(window.getComputedStyle(this).getPropertyValue("font-size"));
    //alert(fontSize);
    //this.style.fontSize = "18px";
    this.style.fontSize = (++fontSize) + "px";
}

window.onload = function(){
    var result = document.getElementById("result");
    var stop = document.getElementById("stop");
    /*
    result.onmouseover = changeColor;
    result.onmouseout = changeColorOut; */

    result.addEventListener("mouseover",changeColor);
    result.addEventListener("mouseover",increaseFontSize);
    result.addEventListener("mouseout",changeColorOut);

    stop.addEventListener("click",function(){
        result.removeEventListener("mouseover",increaseFontSize);
    });
}