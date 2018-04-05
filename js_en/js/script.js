/*
 *  Curso basico de javascript
 * 
 * How to preload an image and display in the browser
 *   
 */

// var i = 1;
var i = 2;

function loadMoreImages(){
    if(i<4){
        var images = document.getElementById("images");
        var image = new Image();
        var loadMoreButtonClone = this.cloneNode(true);
    
        image.src = "img/screen" + (i++) +".jpg";
    
        images.appendChild(image);
        if(i !== 4){
            loadMoreButtonClone.onclick = loadMoreImages;
    
            document.body.appendChild(loadMoreButtonClone);    
        }
    
        this.parentNode.removeChild(this);
    
    }

};

window.onload = function(){
    var loadMoreButton = document.getElementById("loadMoreButton");

    loadMoreButton.onclick = loadMoreImages;
};