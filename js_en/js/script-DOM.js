/*
 *  Curso basico de javascript
 *  
 *  DOM  Dominio object model interfaz de plataforma que proporciona un conjunto estándar de objetos para representar documentos HTML, XHTML y XML
 * 
 *  nodeName  name of the node (most of the time tag name)
 *  nodeValue  value of the node
 *  parentNode  node up from this node in hierarchy
 *  childNodes  an array of nodes that are one level below in hierarchy
 *  firstChild  first node child
 *  lastChild   last node child
 *  previousSibling returns previous node on the same level (its sibling)
 *  attributes  an array of attributes
 *              attributes[index].value returns value of attribute
 *              it's better to use getAttribute("nameOfAttributeToGetValueFrom")
 *  textContent text content of element IE 9 >
 *  innerHTML   text content with tags
 * 
 *  setAttribute("nameOfAttributeToAdd","value of Attribute");
 *  removeAttribute("nameOfAttributeToRemove");
 * 
 */

 // var x = document.getElementById("programmingCourses");

// alert(x.attributes[0].nodeValue);
// alert(x.getAttribute("id"));  // mismo efecto que la sentencia anterior

// // tambien podemos setear objetos.  Mucho mas poderoso ya si cambiamos esto dinamicamente podemos
// // aplicar un estiolo css
// x.setAttribute("class","test");
// // tambien podemos remover atributos dinamicamente
// x.removeAttribute("class");
// alert(x.getAttribute("id"));

// var x = document.getElementById("programmingCourses").childNodes[1].firstChild;
// var x = document.getElementById("programmingCourses").childNodes[1].firstChild.nodeValue;
// var x = document.getElementById("programmingCourses").getElementsByTagName("li")[0].firstChild.nodeValue;
//var x = document.getElementById("programmingCourses").getElementsByTagName("li")[0].innerHTML;  // <b>C++</b>
// var x = document.getElementById("programmingCourses").getElementsByTagName("li")[0].textContent;  // C++

// como agregamos el tag <b> el firstChild cambio
// var x = document.getElementById("programmingCourses").getElementsByTagName("li")[0].firstChild.firstChild.nodeValue;

// var x = document.getElementById("programmingCourses").childNodes[0].nextSibling;  //[object HTMLLIElement]
var x = document.getElementById("programmingCourses").childNodes[0].parentNode;

alert(x);