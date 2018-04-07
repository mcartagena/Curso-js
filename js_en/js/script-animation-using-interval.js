/*
 *  Curso basico de javascript
 * 
 *  SlideShow
 *  
 */

window.onload = function(){
    var box = document.getElementById("box");

    box.onclick = function(){
        var self = this;
        var i = 0;

        var animationId = setInterval(function(){
            self.style.left = (i++) + "px";

            if(i>100)
                clearInterval(animationId);
        },30)
    };

}