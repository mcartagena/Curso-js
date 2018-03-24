/*
 *  Curso basico de javascript
 * 
 *  onkeydown - when you press whatever key
 *  onkeypress - when press whatever key but you can get only info about character keys with event object
 *  onkeyup - when you press down a key and then release it
 * 
 *  onfocus - when the use enters (focus) the input 
 *  onblur - when you lost focus (blur - leave) the input - there is no need for a change in input
 *  onchange - when the user changes something in input and change the focus
 * 
 *  e.which - they keycode of pressed key.  In order to support ie6-7 var charPressed = e.which || e.keycode
 * 
 *  e.charCode - keycode like above (just a few events) - DO NOT USE - IT'S OLD, MOST TIME NOT SUPPORTED - it's gonna be deleted
 *
 */

//isNaN
function isNumber(valueToCheck){
    return !isNaN(valueToCheck);
}

window.onload = function(){
    var numberField = document.getElementById("myForm").numberField;  //.element[0]; util cuando se quiere recorrer todos los elementos, no util cuando se quiere solo uno de ellos
    var textField = document.getElementById("myForm").textField; 
    var submitMyFormButton = document.getElementById("myForm").submitMyFormButton; 

    var info = document.getElementById("info"); 
    var i = 0;

    var isEverythingOK = true;

    //numberField.onkeydown = function(e){
    // numberField.onkeydown = function(e){  // mismo efecto que el anterior
    /* numberField.onkeyup = function(e){ 
        info.innerHTML = e.which;// se puede mostrar el numero de key presionada ++i;
    }; */
    // numberField.onfocus = function(e){ 
    // numberField.onblur = function(e){ 
    /* numberField.onchange = function(e){ 
        info.innerHTML = ++i;
    }; */
    /*
    numberField.onkeyup = function(e){ 
        if(!isNumber(this.value)){
            info.innerHTML = "Please, type a number";
            this.style.backgroundColor = "red";
        } else {
            info.innerHTML = "";
            this.style.backgroundColor = "green";
        }        
    }; */    
    numberField.onkeydown = function(e){ 
        if(!isNumber(String.fromCharCode(e.which)) && e.which !== 8 || e.which === 32){
            info.innerHTML = "Please, type a number";
            this.style.backgroundColor = "red";
            isEverythingOK = false;
            e.preventDefault();
        } else {
            info.innerHTML = "";
            this.style.backgroundColor = "green";
            isEverythingOK = true;
        }        
    };

    submitMyFormButton.onclick = function(e){
        if(!isEverythingOK)
            e.preventDefault();
    };
};