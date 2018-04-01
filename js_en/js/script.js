/*
 *  Curso basico de javascript
 *  
 * Math.round() - rounds the number to the norest integer
 * Math.ceil() - ceiling is up - so you round always up
 * Math.floor() - floor is down - so you round always down
 * toFixed(howManyNumbersAfterTheDot);
 * 
 * Math.abs() - absolute value (always positive)
 * Math.pow(x,y) - x to the power of y
 * 
 * parseInt
 * parseFloat("2.567hahshahsffhs");
 * typeof
 * 
 * Math.random() - return random value from 0 to 1
 * 
 * Random quotes
 * 
 */

 window.onload = function(){
     var info = document.getElementById("info");

     var randomNumber = Math.floor(Math.random() * 4) + 3; 

     info.innerHTML = randomNumber;  
 }