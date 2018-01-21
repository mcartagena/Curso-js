/*
 *  Curso basico de javascript
 *  CONDITIONAL statements
 * 
 */

//  if(2<3)
//     alert('test');

// cualquier valor despues del cero es verdadero pero con cero es false

// if(0)
//     alert('test'); 

// if(23432)
//     alert('test');

// if(-14)
//     alert('test');    

// if("sfsafs")
//     alert('test');

var a = 5,
    b = 3;

// if(a<b)
//     alert(b + ' is bigger than ' + a);
// else if (a > b)
//     alert(a + ' is bigger than ' + b);
// else
//     alert('a == b');

// para agrupar sentencias utilizamos {}

if(a<b)
    alert(b + ' is bigger than ' + a);
else if (a > b) {
    alert(a + ' is bigger than ' + b);
    alert('test');
}
else
    alert("a==b");
