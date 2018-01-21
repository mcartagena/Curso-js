/*
 *  Curso basico de javascript
 *  
 *  Switch (toggle)
 */

var dayOfWeek = 1;

// importante es notar que cada sentencia necesita un break caso contrario se ejecutaran todas las sentencias.
// switch(dayOfWeek)
// {
//     case 1:
//         alert("Monday");
//         break;
//     case 2: 
//         alert("Thuesday");
//         break;
//     case 3:
//         alert("Wenesday");
//         break;
//     case 4:
//         alert("Thursday");
//         break;
//     case 5:
//         alert("Friday");
//         break;
//     case 6:
//         alert("Saturday");
//         break;
//     case 7:
//         alert("sunday");
//         break;
//     default:
//         alert("this is not day of the week");
// }

switch(dayOfWeek){
    case 1:
        alert("Oh NO! is Monday");
    case 2:
    case 3:
    case 4:
    case 5:
        alert("working day");
        break;
    case 6:
    case 7:
        alert("weekend day");
        break;
    default:
        alert("this is not a weekend day");
}
