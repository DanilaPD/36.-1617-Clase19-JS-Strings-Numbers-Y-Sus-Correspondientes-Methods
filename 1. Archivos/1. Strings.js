const texto = "Este es un texto de prueba sarasa, sarasa.";
const num = 145;

//Tiene 42 de largo.
console.log(texto.length);

//Pero si el primero es 0, el último es 41.
console.log(texto.charAt(41));

//Es lo mismo que usar "charAt". Corchete sin punto adelante, solo punto al final. Podemos acumular varios métodos.
console.log(texto[6].toUpperCase());

//Es una constante, puedo aplicarle métodos, ver el largo, etc., pero sigue siendo el mismo texto al final del día.
console.log(texto);

//Esto no va a andar:
console.log(num.length);
