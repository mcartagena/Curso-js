/*
 *  Curso basico de javascript
 * 
 *  tooltips
 *  
 */

function createTooltips(){

    var elementsWithToolTip = document.getElementsByClassName("tooltip");

    var tooltipContainer = document.createElement("div");
    tooltipContainer.id = "tooltipContainer";

    document.body.appendChild(tooltipContainer);

    var tmpTitles = [];

    for(var i=0;i< elementsWithToolTip.length;i++){

        // no funciona ya que se sobre-escribe con el codigo mouseover de la funcion principal
        // necesitamos agregar un listener
        // elementsWithToolTip[i].onmouseover = function(){
        //     alert("pasando por el elemento");
        // };

        tmpTitles[i] = elementsWithToolTip[i].title;
       
        elementsWithToolTip[i].tmpId = i;
        
        elementsWithToolTip[i].addEventListener("mouseover", function(e){
            // tooltipContainer.innerHTML = "frase a mostrar...";
            tooltipContainer.innerHTML = this.title;

            this.title = "";

            tooltipContainer.style.left = e.clientX + document.documentElement.scrollLeft + "px";
            tooltipContainer.style.top = e.clientY + document.documentElement.scrollTop + "px";

            tooltipContainer.style.display = "block";
        });
        elementsWithToolTip[i].addEventListener("mouseout", function(e){
            tooltipContainer.style.display = "none";

            this.title = tmpTitles[this.tmpId];
        });           
    }

}

window.onload = function(){

    createTooltips();

    var mainImage = document.getElementById("mainImage");

    var image = new Image();

    mainImage.appendChild(image);

    var thumbnails = document.getElementsByClassName("thumbnail");
    //image.src = "img/mechanism-fi17.jpg";
    image.src = thumbnails[0].src;
    var currentThumbnail = thumbnails[0];
    currentThumbnail.className += " current";

    for(var i=0; i < thumbnails.length;i++){
        thumbnails[i].onmouseover = function(){
            currentThumbnail.className = currentThumbnail.className.replace(" current","");

            currentThumbnail = this;
            currentThumbnail.className += " current";

            image.src = this.getAttribute("src");
        };     
    }

}