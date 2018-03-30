/*
 *  Curso basico de javascript
 *  
 *  Manipulation of time using DATE object
 * 
 * new Date()
 * new Date(milliseconds) - you can create Date typing how many milliseconds has passed from 1st January 1970
 * new Date(year, month, day, hours, minutes, seconds, milliseconds) - only first 3 argments are required,
 *                                                                 we start counting months from ZERO!
 * new Date(datestring) where datestring is in format like:
 * np. YYYY-MM-DD, YYYY-MM, YYYY
 *     YYYY/MM/DD, MM/DD/YYYY 
 */

function getStringMonthFromNumber(monthNumber){
    var months = ["January","February","March","April","May","June",
                  "July","August","September","November","December"];
    return months[monthNumber];
}

Date.prototype.getMonthInString = function(){
    var months = ["January","February","March","April","May","June",
                  "July","August","September","November","December"];
    return months[this.getMonth()];
}

window.onload= function(){

    var info = document.getElementById("info");

    var today = new Date();

    // info.innerHTML = today;  // fecha completa format utc
    // info.innerHTML = today.getMonth();  // obtiene el mes contando desde 0
    // info.innerHTML = (today.getMonth() + 1) + "/" + today.getDay() + "/" + today.getFullYear(); 
    // info.innerHTML = getStringMonthFromNumber(today.getMonth()) + "/" + today.getDay() + "/" + today.getFullYear(); 
    // info.innerHTML = today.getMonthInString() + "/" + today.getDay() + "/" + today.getFullYear(); 
    // info.innerHTML = today.toLocaleTimeString();
    // info.innerHTML = today.toLocaleDateString();

    today.setDate(today.getDate()+1);
    info.innerHTML = today.toLocaleString();

    // var tomorrow = new Date(today.getTime() + 10000);
    // var tomorrow = new Date(today.getTime() + 1000 * 60 * 60); // adicione una hora
    // var tomorrow = new Date(today.getTime() + 1000 * 60 * 60 * 24); // adicione una día
    // info.innerHTML = tomorrow.toLocaleString();

    // info.innerHTML = tomorrow - today;  // respuesta en  milisegundos
    // info.innerHTML = (tomorrow - today) / 1000;  // respuesta en  segundos
    // info.innerHTML = (tomorrow - today) / 1000 / 60;  // respuesta en  minutos
    // info.innerHTML = (tomorrow - today) / 1000 / 60 / 60;  // respuesta en  horas
    // info.innerHTML = (tomorrow - today) / 1000 / 60 / 60 / 24; // respuesta en dias

    // var tomorrow = new Date(today.getFullYear(),today.getMonth(),today.getDay() + 1);
    // info.innerHTML = (tomorrow - today) / 1000 / 60 / 60 / 24;
    // info.innerHTML = tomorrow;  // Wed Mar 07 2018 00:00:00 GMT-0500 (EST) es 0 min, 0 sec, etc

    var tomorrow = new Date("2018-03-31");
    info.innerHTML = tomorrow; 
}
