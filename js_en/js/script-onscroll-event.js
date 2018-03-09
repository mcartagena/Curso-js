/*
 *  Curso basico de javascript
 * 
 *  window.pageYOffset;
 *  window.scrollBy(xaxis,yaxis);
 */

window.onload= function(){
    var toTopButton = document.getElementById("toTopButton");

    window.onscroll = function() {
        var test = document.getElementById("test");
        var toTopButton = document.getElementById("toTopButton");

        if(window.pageYOffset > 300)
            toTopButton.style.display = "block";
        else
            toTopButton.style.display = "none";
            
        test.innerHTML = window.pageYOffset;
    }

    toTopButton.onclick = function(){
        // window.scrollBy(0,100); // avanza el scroll
        // window.scrollBy(0,-100); // retrocede hasta el top de la ventana
        // pero queremos ir directo al top
        window.scrollBy(0, -1 * window.pageYOffset);
    }

}