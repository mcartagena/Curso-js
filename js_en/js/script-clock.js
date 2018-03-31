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

 Date.prototype.getFormattedTime = function(){
    var hours = this.getHours();
    var minutes = this.getMinutes();
    var seconds = this.getSeconds();

    if(hours < 10)
        hours = "0" + hours;
    if(minutes < 10)
        minutes = "0" + minutes;
    if(seconds < 10)
        seconds = "0" + seconds;

    /* No tomar en cuenta este codigo sino solo por practica 
       para manejar el tiempo deberiamos utilizar metodos de locale time o time zone */
    var suffix = "";
    if(hours < 12)
        suffix = "AM";
    else {
        suffix = "PM";
        hours -= 12;
    }
        
    return hours + ":" + minutes + ":" + seconds + " " + suffix;
 
 }

 function Clock(elementHandler){
     this.elementHandler = elementHandler;
     this.actualDate = new Date();

     this.start = function(){
        this.updateElementHandlerContent();
        var self = this;
        setInterval(function(){
            self.addSecond();
            self.updateElementHandlerContent();
        },1000);
     };
     this.addSecond = function(){
        this.actualDate = new Date();
     };
     this.updateElementHandlerContent = function(){
        // this.elementHandler.innerHTML = this.actualDate;  // reloj con fecha incluida
        // this.elementHandler.innerHTML = this.actualDate.toLocaleTimeString(); // local time solamente
        // this.elementHandler.innerHTML = this.getFormattedDate(); // con formato personallizado
        this.elementHandler.innerHTML = this.actualDate.getFormattedTime();  // utilizando date prototype
     };
     this.getFormattedDate = function(){
        var hours = this.actualDate.getHours();
        var minutes = this.actualDate.getMinutes();
        var seconds = this.actualDate.getSeconds();

        if(hours < 10)
            hours = "0" + hours;
        if(minutes < 10)
            minutes = "0" + minutes;
        if(seconds < 10)
            seconds = "0" + seconds;

        /* No tomar en cuenta este codigo sino solo por practica 
           para manejar el tiempo deberiamos utilizar metodos de locale time o time zone */
        var suffix = "";
        if(hours < 12)
            suffix = "AM";
        else {
            suffix = "PM";
            hours -= 12;
        }
            
        return hours + ":" + minutes + ":" + seconds + " " + suffix;
     };
 }

window.onload= function(){

    var info = document.getElementById("info");
    var info2 = document.getElementById("info2");

    var clock = new Clock(info);
    var clock2 = new Clock(info2);

    clock.start();
    clock2.start();
}
