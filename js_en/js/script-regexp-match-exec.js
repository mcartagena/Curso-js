/*
 *  Curso basico de javascript
 *  
 * REGEXP
 * 
 * stringToSearch.search(formula) - searches and return the index
 * stringToSearch.match(formula) - searches and return an array
 * regExpVar.exec(stringToSearch) - same as above but it returns only one result after each execution
 * stringToSearch.replace(formula,"forWhat"); - replace things in formula by "forWhat"
 * formula.test(stringToSearch); - testing if something from formula exists in stringToSearch
 * 
 * g - global - searching through full string
 * i - insensitive - case Insensitive
 */

 window.onload = function(){
    var info = document.getElementById("info");
    var indexes = "A-565 B-12 K-51 A-53 A#58 A.51 a-98 a-4124 Aj244";

    // var result = indexes.match(/A\.[0-9]+/gi);

    // var regexp = /A\.[0-9]+/gi;
    var regexp = /A.[0-9]+/gi;

    // var result = regexp.exec(indexes); // solamente retorna un resultado, si se quiere el siguiente resultado se debe ejecutar nuevamente exec

    var result = "";

    var row = "";

    var i = 0;

    // while(row = regexp.exec(indexes)){ // funcionan de la misma manera
    while((row = regexp.exec(indexes)) !== null){
        if(++i>3){
            break;
        }
        result += row + " ";
    }

    info.innerHTML = result;
    
 };

