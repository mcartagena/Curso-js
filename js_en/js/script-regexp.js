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

    //var result = indexes.match(/A/);  // por defecto encuentra la primera ocurrencia dentro de la regexp
    //var result = indexes.match(/A/g); // para encontrar todas las coincidencias tengo que utilizar un modificador que es g
    //var result = indexes.match(/A/gi);  // agregamos el modificador i si queremos que sea insenstive
    //var result = indexes.match(/./gi);  // cualquier simple caracter
    //var result = indexes.match(/A-[0-9]/gi); // A seguida de un guion y cualquier numero de 0 a 9 el primer caracter
    //var result = indexes.match(/A-[0-9]{1,}/gi); // busca no solo el primer numero sino 1 o mas
    //var result = indexes.match(/A-[0-9]+/gi); // mismo efecto que el anterior
    //var result = indexes.match(/A-\d+/gi); // mismo efecto con el pattern \d
    //var result = indexes.match(/A.[0-9]+/gi); // si queremos buscar elementos diferentes al - inclusible
    //var result = indexes.match(/A(-|#)[0-9]+/gi); // solamente aquellos que tienen - y #
    var result = indexes.match(/A(\.)[0-9]+/gi);  // solamente aquellos que tienen punto

    var telephoneNumber = "22 555 555 5554";

    result = telephoneNumber.match(/^\d{2}\s[0-9]{3}\s[0-9]{3}\s[0-9]{3}$/);  // para encontrar el fono

    // info.innerHTML = result.join("<br>");

    var resultTest = (/^\d{2}\s[0-9]{3}\s[0-9]{3}\s[0-9]{3}$/).test(result);

    info.innerHTML = resultTest;

    /*
    var d = "ViolaArkadiusz";
    var e = d.replace(/(V)(i)(o)(la)/gi, "$4$3$2$1");
    
    info.innerHTML = e; */
 };

