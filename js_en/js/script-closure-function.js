/*
 *  Curso basico de javascript
 * 
 * closure
 *  
 */

 // las variables de esta funcion no son visibles dedibo
 // a que se declaro una funcion closure
 function product(name, price){
     var name = name;
     var price = price;
     var id = 0;

     //function getInfo() // closure
     // function getInfo(id) // closure
     function getInfo()
     {
        // return name + " " + price; 
        return name + " " + price + " " + (++id);
     }

     return getInfo;
 }

 // las variables declaradas en esta funcion pueden ser 
 // accedidas una vez declarada una variable de tipo product2
 function product2(name, price){
     this.name = name;
     this.price = price;
 }

 window.onload = function(){
     var a = product("video course",49);
     var b = product("ball",20);
     var c = product2("something",50);

     // alert(a(1));
     a();
     a();
     a();
     alert(a());  // imprimira 4

     alert(b());  // imprimira 1

     // c.name  // la variable es visible externamente

     var clickMe = document.getElementById("clickMe");

     // var counter = 0;

     clickMe.onclick = (function(e){

        var counter = 0; // con la declaracion de ejecucion en si misma ahora funciona esta declaracion

        function closure(){
            counter++;
            if(counter===2){
                counter = 0;
                alert("contador reseteado");
            }
        }

        return closure;
     })();

 }