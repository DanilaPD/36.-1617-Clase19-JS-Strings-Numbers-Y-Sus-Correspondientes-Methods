// https://wwww.w3schools.com/js/js_number_methods.asp

const num1 = 5;
const num2 = 8;
const pi = 3.141516;
const str = "145";

console.log(`Suma: 5 + 8`);

//Dentro del ${}, nos va a hacer la operación.
console.log(`Suma: ${5 + 8}`);

console.log(`Suma: ${num1 + num2}`);

console.log(`Resta: ${num1 - num2}`);

console.log(`Multiplicacion: ${num1 * num2}`);

console.log(`Division: ${num1 / num2}`);

console.log(`Potencia: ${num1 ** num2}`);

//Resto: Es lo que queda restante es UNA DIVISIÓN.
console.log(`El resto de 8 / 5 es lo que nos sobra: ${num2 % num1}`);

//Decidir la cantidad de decimales que queremos:
//2 suele ser lo que más se usa porque son los centavos. Se pueden poner tantos como necesitemos.
console.log(`ToFixed: ${pi.toFixed(2)}`);

//A veces, cuando lo "fijamos" a muchos más de los decimales que trae... hace cosas raras:
console.log(`ToFixed: ${pi.toFixed(30)}`);

//Para redondear:
//"Floor" es piso, "Ceil" es techo. Uno va para abajo, otro, para arriba.
//Usamos "Math" y el "parámetro" es el número que quiero.
console.log(`ToFloor: ${Math.floor(pi)}`);
console.log(`ToCeil: ${Math.ceil(pi)}`);

//Métodos "Math": https://wwww.javatpoint.com/javascript-math

//Sacar una "raíz cuadrada" con "Math" (square root):
console.log(`Sacando la raíz: ${Math.sqrt(36)}`);

//Sacar número "random" entre 0 y 1 y hacer que solo sea de 2 decimales de largo:
console.log(`Número random: ${Math.random().toFixed(2)}`);

//Sacar "random" del 1 al 10:
let random = Math.random().toFixed(1);
console.log(parseFloat(random) * 10);

//Cambiar el "type":
//Con "number", hay 2 formas principales:
console.log("To number: ", Number(str));

console.log("To number: ", parseInt(str));

console.log("To number: ", typeof Number(str), Number(str));

// Si salgo de esas operaciones, va a seguir siendo un "string":
console.log(typeof str);

//"Número" a "string":
console.log("To string: ", num1.toString());
