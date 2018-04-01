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

     var randomNumber = Math.floor(Math.random() * 4); 

     var quotes = ["A person who never made a mistake never tried anything new.",
                   "It does not matter how slowly you go as long as you do not stop.",
                   "We may encounter many defeats but we must not be defeated.",
                   "If you can dream it, you can do it."];
 
    var authors = ["Albert Einstein",
                   "Confucius",
                   "Maya Angelou",
                   "Walt Disney"];

     info.innerHTML = "Quote: " + quotes[randomNumber] + " Author: " + authors[randomNumber];
 }