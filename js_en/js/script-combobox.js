/*
 *  Curso basico de javascript
 * 
 *  .options - an array with possible options to choose
 *  .length - how many elements are inside combo box
 *  .text - text of option
 * 
 *  .value; - value of value attribute or text value if there is no value attribute
 * 
 *  .selectedIndex - index of chosen element
 *  .add - a function adding new option for example var newOption = document.createElement("option"); newOption.text = "Compass";
 *  .remove(index) - a function remove option on position (index)
 *  
 */

window.onload = function(){
    var myform = document.getElementById("myForm");
    var info = document.getElementById("info");
    var newOption = document.getElementById("option");
    
    // myform.videoCourses.options[0].text += "cambio en texto";
    // alert(myform.videoCourses);
    // alert(myform.videoCourses.options[0]);
    // alert(myform.videoCourses.options[0].text);
    // alert(myform.videoCourses.options[0].value);
    // alert(myform.videoCourses.selectedIndex);  // solo funciionara en la primera carga, para eso creamos un evento

    var videoCourses = myform.videoCourses;

    // videoCourses.remove(0);

    var newOption = this.document.createElement("option");
    newOption.text = "COMPASS";
    // videoCourses.add(newOption); // se agrega al final
    videoCourses.add(newOption,0);  // agregamos un indice, esta vez se crea al inicio

    videoCourses.onchange = function(){
        // alert(myform.videoCourses.selectedIndex);
        // info.innerHTML = videoCourses.selectedIndex;
        // info.innerHTML = videoCourses.options[videoCourses.selectedIndex].value;
        info.innerHTML = this.value;
    }
}
