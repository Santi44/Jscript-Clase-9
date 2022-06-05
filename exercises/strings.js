//Crear una variable de tipo string con al menos 10 caracteres y convertir todo el
//caso en mayúscula (utilizar toUpperCase) 

var caso1 = "variable de tipo string en minuscula y se convierte en mayuscula";
var caso1Mayuscula = caso1.toUpperCase();

// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
//string con los primeros 5 caracteres guardando el resultado en una nueva
//variable (utilizar substring) 


var caso2 = "generar un nuevo string contando los primeros 5 caracteres";
var caso2Cortar = caso2.substring(0, 5);

//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
//string con los últimos 3 caracteres guardando el resultado en una nueva variable
//(utilizar substring)

var caso3 = "generar un nuevo string con los 3 caracteres guardados";
var caso3Cortar = caso3.substring(caso3.length-3, caso3.length);

//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
//string con la primera letra en mayúscula y las demás en minúscula. Guardar el
//resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y
//el operador +)

var caso4 = "se debe crear una variable del tipo string y generar un nuevo string con la primera letra en mayuscula";
var caso4Modificado = caso4.substring(0, 1).toUpperCase() + caso4.substring(1, caso4.length).toLowerCase();

//Crear una variable de tipo string con al menos 10 caracteres y algún espacio en
//blanco. Encontrar la posición del primer espacio en blanco y guardarla en una
//variable (utilizar indexOf)

var caso5 = "variable tipo string con espacios";
var caso5PrimerEspacio = caso5.indexOf(" ");

//Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y
//algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para
//generar un nuevo string que tenga la primera letra de ambas palabras en
//mayúscula y las demás letras en minúscula (utilizar indexOf, substring,
//toUpperCase, toLowerCase y el operador +)

var caso6 = "lenguaje programacion ";
var caso6Espacio = caso6.indexOf(" ");
var caso6Modificado = caso6.substring(0, 1).toUpperCase() + caso6.substring(1, caso6Espacio).toLowerCase() + " " +
    caso6.substring(caso6Espacio+1, caso6Espacio+2).toUpperCase() + caso6.substring(caso6Espacio+2, caso6.length).toLowerCase();

