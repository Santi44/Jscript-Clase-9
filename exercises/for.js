//Crear un array que contenga 5 palabras y recorrer dicho array utilizando un
//bucle for de JavaScript para mostrar una alerta utilizando cada una de las
//value

var value = ["sol","luna","nube","lluvia","cielo"];
value.forEach(element => {
    alert(element);
});

value.forEach(element => {
    alert(element.substring(0, 1).toUpperCase() + element.substring(1, element.length).toLowerCase());
});

var query = "";
value.forEach(element => {
    query = query + element + " ";
});
alert(query);

var numbers = [];
for (let index = 0; index < 10; index++) {
    numbers.push(index)    
}
console.log(numbers);
