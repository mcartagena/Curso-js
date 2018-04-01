/*
 *  Curso basico de javascript
 *  
 * Cookies - cookies are containers that can store key=value1; key2=value2;
 * 
 * values like that are available to us even if the user leave our website
 * when the user visit your website again this value is still gonna be there
 * because of it we can identify the person visiting us
 * 
 * path=/
 * expires= - when the cookie expires (default when you close the session) (toUTCString() format)
 * max-age= - how old can the cookie be in seconds (not supported in ie6-8)
 * 
 * localstorage = for local 
 * 
 */
function createCookie(name,value,days){
    var expirationDate = ""
    if(days){
        var expirationDateOfCookie = new Date();
        expirationDateOfCookie.setDate(expirationDateOfCookie.getDate() + days);
        expirationDate = ";expires=" + expirationDateOfCookie.toUTCString();
    }

    // document.cookie = name + "=" + value + expirationDate + ";path=/;"
    document.cookie = name + "=" + encodeURIComponent(value) + expirationDate + ";path=/;";
}
function removeCookie(name){
    var expirationDateOfCookie = new Date();
    expirationDateOfCookie.setTime(expirationDateOfCookie.getTime());

    document.cookie = name + "=;expires=" + expirationDateOfCookie.toUTCString() + ";path=/;";

}
function getCookieByKeyName(name){
    var cookies = document.cookie.split(";");

    for(var i=0; i < cookies.length; i++){
        var splittedCookie = cookies[i].split("=");
        var cookieName = splittedCookie[0].trim();
        if(name===cookieName){
            var cookieValue = splittedCookie[1];
            // return cookieValue;
            return decodeURIComponent(cookieValue);
        } else { alert(">" + name + "< >" + cookieName + "<");}
    }

    // return cookies;
    // return cookies[0];
    // return cookies[1].split("=");
    // return cookies[1].split("=")[0];
    return;

}

 window.onload = function(){
    var info = document.getElementById("info");
    var createCookieButton = document.getElementById("createCookie");
    var removeCookieButton = document.getElementById("removeCookie");

    // info.innerHTML = document.cookie;
    info.innerHTML = getCookieByKeyName("age");
    info.innerHTML = getCookieByKeyName("lastname");  // para decodificar caracteres especiales

    createCookieButton.onclick = function(){

        var expirationDateOfCookie = new Date();
        expirationDateOfCookie.setTime(expirationDateOfCookie.getTime() + 1000*60);

        // document.cookie = "key=value1; key2=value2;";  // solamente puedo crear una cookie a la vez, en este caso key2 no se creara
        // document.cookie = "name=Marcelo;expires=" + expirationDateOfCookie.toUTCString() + ";path=/;";
        // document.cookie = "name=Marcelo;max-age=" + 60 + ";path=/;";  // expira en 1 minuto
        // document.cookie = "name=Marcelo;max-age=" + 60*60 + ";path=/;";  // expira en 1 hora
        // document.cookie = "name=Marcelo;max-age=" + 60*60*24 + ";path=/;";  // expira en 1 minuto
        // document.cookie = "surname=Fernando;path=/;";
        createCookie("age",26);
        createCookie("surname","Cartagena",1);
        createCookie("lastname","Cartagena;Orellana");  // para utilizar especiales caracteres como ;
        info.innerHTML = document.cookie;
    }

    removeCookieButton.onclick = function(){

        // var expirationDateOfCookie = new Date();
        // expirationDateOfCookie.setTime(expirationDateOfCookie.getTime() -1);

        // document.cookie = "key=value1; key2=value2;";  // solamente puedo crear una cookie a la vez, en este caso key2 no se creara
        // document.cookie = "name=Marcelo;expires=" + expirationDateOfCookie.toUTCString() + ";path=/;";
        // document.cookie = "surname=Fernando;expires=" + expirationDateOfCookie.toUTCString() + ";path=/;";

        removeCookie("age");
        removeCookie("surname");
        removeCookie("name");
        removeCookie("lastname");
        info.innerHTML = document.cookie;
    }    
 };
