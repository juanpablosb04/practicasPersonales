/*
 * Crea un programa que invierta el orden de una cadena de texto
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

let cadenaTxt = "JuanPablo";
let separacion = cadenaTxt.split('');
let invertir = separacion.reverse();
let unir = invertir.join('');

console.log(unir);