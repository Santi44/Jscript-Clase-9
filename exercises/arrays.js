//Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
//"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por
//consola los meses 5 y 11 (utilizar console.log).

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var meses2 = Array.from(meses);

console.log(meses[5]);
console.log(meses[11]);

//Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

console.log(meses.sort());

//Agregar un elemento al principio y al final del array (utilizar unshift y push).

meses.unshift("Primero");
meses.push("Ultimo");
console.log(meses);

//Quitar un elemento del principio y del final del array (utilizar shift y pop)

meses.shift();
meses.pop();
console.log(meses);

//Invertir el orden del array (utilizar reverse).

meses.reverse();
console.log(meses);

//Unir todos los elementos del array en un único string donde cada mes este
//separado por un guión - (utilizar join).

console.log(meses.join("-"));

//Crear una copia del array de meses que contenga desde Mayo hasta Noviembre
//(utilizar slice)
console.log(meses2.slice(4,11));