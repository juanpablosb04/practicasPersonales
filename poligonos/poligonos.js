/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

const Triangulo = {base: 10, altura: 5};
const Cuadrado = {lado: 15};
const Rectangulo = {base: 15, altura: 8};
let calculo;

function calcPoligono(poligono){
    
    if(poligono === Triangulo){
        calculo = (poligono.base * poligono.altura)/2;
        console.log(calculo);
    }else if(poligono === Cuadrado){
        calculo = poligono.lado * 4;
        console.log(calculo);
    }else if(poligono === Rectangulo){
        calculo = (poligono.base * poligono.altura)/2;
        console.log(calculo);
    }
};

console.log(calcPoligono(Triangulo));
console.log(calcPoligono(Cuadrado));
console.log(calcPoligono(Rectangulo));