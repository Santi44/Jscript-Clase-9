//Crear una functionión suma que reciba dos valores numéricos y retorne el resultado.
//Ejecutar la functionión y guardar el resultado en una variable, mostrando el valor de
//dicha variable en la consola del navegador

function suma(value1, value2) {
    return value1 + value2;
}
var resultado = suma(4, 2);
console.log(resul);

//A la función suma anterior, agregarle una validación para controlar si alguno de
//los parámetros no es un número, mostrar una alerta aclarando que uno de los
//parámetros tiene error y retornar el valor NaN como resultado

function suma2(value1, value2) {
    if (isNaN(value1) || isNaN(value2)) {
        return "NaN";
    } else {
        return value1+value2;
    }    
}
console.log(suma2("perro", 7));
console.log(suma2(9, "gato"));
console.log(suma2(3,6));

//Crear una functionión validate integer que reciba un número como parámetro y
//devuelva verdadero si es un número entero.

function valEnt(value1) {
    return !isNaN(value1) && value1 == Math.floor(value1);
}
console.log(valEnt("televisor"));
console.log(valEnt(4.7));
console.log(valEnt(6));

//A la functionión suma del ejercicio 6b) agregarle una llamada que valide que los
//números sean enteros. En caso que haya decimales mostrar un alerta con el
//error y retorna el número convertido a entero (redondeado).

//Convertir la validación del ejercicio 6d) en una functionión separada y llamarla
//dentro de la función suma probando que todo siga functionionando igual
function suma3(value1, value2) {
    if (isNaN(value1) || isNaN(value2)) {
        return "NaN";
    } else if (valEnt(value1) && valEnt(value2)) {
        return value1+value2;
    } else {
        alert("Error valores decimales");
    }    
}
console.log(suma3("como va?", 2));
console.log(suma3(4, 6.3));
console.log(suma3(1,5));