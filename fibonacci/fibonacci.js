/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */
let i = 0;
let num = 1;
console.log(i)
console.log(num)

for(c=2; c < 50; c++){      
    let siguienteNum = i + num;
    console.log(siguienteNum)
    i = num;
    num = siguienteNum;
};
