/*
 *  Curso basico de javascript
 */

// Variable

var VAT = 20;
var calculateVAT = (1 + VAT * 1/100);
var netPriceOfShoes = 100;
var netPriceOfTV = 959;

var grossPriceOfShoes = netPriceOfShoes * calculateVAT;
var grossPriceOfTV = netPriceOfTV *  calculateVAT;

var nombre = 'Marcelo';
var apellido = 'Cartagena';

alert(nombre + ' ' + apellido);

/* types of varialbes
 * 1) numbers - integer
 * 2) string - continous characters
 * 3) boolean - true / false
 * 4) arrays - objects
 * 5) null - empty
 * 6) undefined
 */