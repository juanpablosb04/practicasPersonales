/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

function anagrama (palabra, palabra1){
    
    const strPalabra = palabra;
    const strPalabra1 = palabra1;

    if(strPalabra === strPalabra1){
        console.log("Las palabras son iguales");
        return false;
    }else{
        const ordPalabra = strPalabra.split('').sort().join('');
        const ordPalabra1 = strPalabra1.split('').sort().join('');

        return ordPalabra === ordPalabra1;
    }

};

console.log(anagrama("roma","amor"));