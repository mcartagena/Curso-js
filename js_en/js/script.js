/*
 *  Curso basico de javascript
 *  
 *  Best practice
 * 
 * 1. Getting elements from DOM using getElementById, querySelector, etc. is SLOW
 * 
 *  faster
 * 
 *  var thumbnails = document.getElementByClass("thumbnails");
 *  for(var i =0; i < thumbnails.length; i++)
 * 
 *  slower
 *  for(var i =0; i < document.getElementByClass("thumbnails").length; i++)
 *  {
 *      // document.getEle...  mismo efecto, busca en toda la pagina por n veces
 *  }
 * 
 * 2. Keep your HTML file small
 * 3. if you can initialize your array at once:
 * 
 *  var tab=['value1','value2','value3'];
 * 
 *  slower
 *  var tab2=[];
 *  tab2[0]='value1';
 *  tab2[1]='value2';
 *  tab2[2]='value3';
 * 
 * 4. do not use global variables because getting to them is slower
 * 5. do not use everywhere jQuery, if not need.  Javascript is most time faster.
 *    this.value is thousand time faster than $(this).val();
 * 6. keep one js file.  The HTML has to take only one js.  Se puede utilizar grunt js, para recopilar
 *    todos los js en uno solo.  Esto es pq HTTP, permite solo bajar un js por vez.
 * 7. Compress your js files.  
 * 8. 7 most common mistakes you should avoid
 *    a. Cuando rescata un input y su valor, este es un string, por lo que en una suma con un entero
 *       se sumara el string:  5 + document.getElementById("sample").value -> 1005 aun cuando el
 *       valor era 100.  Se debe utilizar parseInt(elemento).
 *    b. utilizar en una condicion el operador = y no ==, el = significa asignar y no comparar.
 *    c. Es mejor utilizar === para chequear incluso el tipo.
 *    d. A veces una condicion finaliza con un ; haciendo que se ejecuta el condicional siempre.
 *           if(i===0);
 *               alert("condicional");
 *    e. confundir bitwise operator con comparators operators & y &&.
 *    f. las funciones document son case sensitive.  getElementById es distingo de getElementByid.
 *    g. Los arreglos no terminan con una coma, se debe eliminar la ultima coma:
 *         var numeros = [1,2,3,4,]  no funcionara.
 * 9. Utilice IDE con background oscuro para cuidar su vista.
 * 10. Siguientes pasos, que aprender:  Gruntjs, jquery, html5, css3, sass (similar to css), compass.
 */

            