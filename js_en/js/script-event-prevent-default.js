/*
 *  Curso basico de javascript
 * 
 *  PREVENT - STOP
 *  var e = e || window.event;
 *  if(e.preventDefault)
 *      e.preventDefault();
 *  else
 *      e.returnValue = false;
 * 
 */

window.onload = function(){
    var email = document.getElementById("email");
    var submitFormButton = document.querySelector("#newsletter input[type='submit']");

    submitFormButton.onclick = function(e){

        // detenemos el comportamiento por defecto del boton submit
        // e.preventDefault();

        // si queremos soporte para IE 6 7 8
        var e = e || window.event;
        if(e.preventDefault)
            e.preventDefault();
        else
            e.returnValue = false;        

        var newsletter = document.getElementById("newsletter");
        var tmp = document.getElementById("tmp");

        // ejecutamos cualquier accion antes de submit la informacion
        if(email.value === "marcecarta@hotmail.com")
            newsletter.submit();
        else
            tmp.innerHTML = "THE MAIL IS WRONG!!!";
    }

    // si querermos bloquear el contextmenu para el boton
    submitFormButton.oncontextmenu = function(e){
        // si queremos soporte para IE 6 7 8
        var e = e || window.event;
        if(e.preventDefault)
            e.preventDefault();
        else
            e.returnValue = false;              
    }

}