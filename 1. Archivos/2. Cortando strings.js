const texto = "Este es Un tExto de pruebA, sarasa, sarasa.";

//Vamos a cortar "strings":
console.log("Usando slice para cortar: ", texto.slice(0, 26));

console.log("Usando slice para cortar: ", texto.slice(27, 41));

console.log("Usando slice para cortar: ", texto.slice(27));

console.log("Usando slice para cortar al revés: ", texto.slice(-6));

console.log("Usando slice para cortar al revés: ", texto.slice(-13, -6));

//Reemplazar palabras:
console.log(
  "Reemplazar la primera ocurrencia: ",
  texto.replace("sarasa", "gatitos")
);

//La "g" es de global (todas las ocurrencias) y la "i" es de insensitive (mayúsc./minúsc.). Sin la "g", solo reemplaza el primero. Sin la "i", si hay mayúsculas, no las reemplaza.
console.log(
  "Reemplazar todas las ocurrencias: ",
  texto.replace(/sarasa/gi, "gatitos")
);

console.log("Reemplazar todas las ocurrencias: ", texto.replace(/a/gi, "o"));

//Mayúsc.-Minúsc.
console.log("A minúscula: " + texto.toLowerCase());

console.log(`A mayúscula: ${texto.toUpperCase()}`);

//No es lo más usado, pero el "locale" tiene en cuenta el idioma del usuario (Si les hace cosas raras con los acentos, pueden usar esto).
console.log(`A mayúscula: ${texto.toLocaleUpperCase()}`);

//Convertir a "array":

//Con esto, separa todos:
console.log("A array: ", texto.split(""));

//Con esto, separa usando los "espacios":
console.log("A array: ", texto.split(" "));

//Con esto, separa con la "coma":
console.log("A array: ", texto.split(","));

//Ahora quiero separar y que me traiga el segundo elemento del "array". Ojo con no ponerle punto al elegir qué elemento agarrar:
console.log("A array: ", texto.split(",")[1]);

//"Undefined" no es un error, es el estado en el que están las cosas.
console.log("A array: ", texto.split(",")[5]);
