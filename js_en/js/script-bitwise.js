/*
 *  Curso basico de javascript
 *  
 * BITWISE OPERATORS
 * 
 * & - bitwise and
 * | - bitwise or
 * 
 * ^ - XOR exclusive OR
 * 
 * x << 1 - moving bits to left by 1 (left shift)
 * x >> 2 - moving bits to right by 2 (right shift)
 * 
 * ~ - bitwise negation
 * 
 * 1 0 1 0 = 1*2^3 + 1*2^1 = 8 + 2 = 10
 * 
 * 8 4 2 1
 */

 // 14 = 1 1 1 0
 // 10 = 1 0 1 0
 // ------------
 // &  = 1 0 1 0

 alert(14 & 10);  // deberia ser 10

 // 14 = 1 1 1 0
 // 10 = 1 0 1 0
 // ------------
 // |  = 1 1 1 0

 alert(14 | 10);  // deberia ser 14

 // estos operadores generalmente son utilizados para merge privilegiios en linux

 // 14 = 1 1 1 0
 // 10 = 1 0 1 0
 // ------------
 // ^  = 0 1 0 0
 
 alert(14 ^ 10);  // deberia ser 4

 // 14 = 1 1 1 0
 // ------------
 // >> 1 = 0 1 1 1

 alert(14 >> 1);  // deberia ser 7

 // 14 = 1 1 1 0
 // ------------
 // << 1 = 1 1 1 0 0 

 alert(14 << 1);  // deberia ser 28

 // 14 = 1 1 1 0
 // ------------
 // ~ 1 = 0 0 0 1  

 alert(~14);  // deberia ser -15 Esto se debe a que inclusive el primer bit 0 cambia a 1 (1111 0 0 0 1)
              // es decir se convierte en negativo
              

