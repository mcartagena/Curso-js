/*
 *  Curso basico de javascript
 *  
 * REGEXP 
 * regular expressions - formulas
 * 
 * stringToSearch.search(formula) - searches and return the index
 * stringToSearch.match(formula) - searches and returns an array
 * regExpVar.exec(stringToSearch) - same as above but it returns only one result after each execution
 * stringToSearch.replace(formula, "forWhat"); - replacing things in formula by "forWhat"
 * formula.test(stringToSearch); - testing if something from formula exists in stringToSearch
 * 
 * g - global - searching through full string
 * i - insensitive - case Insensitive 
 */

 window.onload = function(){
    var info = document.getElementById("info");
    
    var test = document.getElementById("myForm").test;

    // var pw = " ";
    // var pw = "12345678";
    // var pw = "a2345678"; // "12345678"; // solamente numeros esta vez no aceptara necesita al menos un caracter
    // var pw = "12a45678";  // ahora el caracter no solo esta al inicio sino al medio o al final
    // var pw = "12a45A678"; // se reemplazara con el input pw

    // var formula = / /; // solamente valida el espacio en blanco
    // var formula = /.{8,}/; // valida que tenga 8 caracteres, puede ser cualquiera
    // var formula = /(?=[a-z]).{8,}/;
    
/*    
    var formula = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}/;  // ahora aceptara cualquier caracter incluso si no viene

    info.innerHTML = formula.test(pw); */

/*     test.onclick = function(){
        var formula = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}/; 
        var pw = document.getElementById("myForm").pw.value;

        info.innerHTML = formula.test(pw);        
    }; */

    test.onclick = function(e){
        e.preventDefault();
        var formula = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}/; 
        var pw = document.getElementById("myForm").pw.value;

        if(formula.test(pw)){
            document.getElementById("myForm").submit();
        } else {
            info.innerHTML = "Your password is not strong enough";
        }
      
    };
 };

