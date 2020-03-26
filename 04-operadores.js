// Operadores en JavaScript

// Operadores de Igualdad: ==, ===
console.log(1 == 1); // true == true
console.log(1 == true); // true == true
console.log(1 === true); // number === boolean

console.log(1 == '1');// '1' == '1'
console.log(1 === '1');// number === string

console.log(10 != '10');// '10' != '10': false
console.log(10 !== '10');// number != string: true

// Recomendacion: usar ===, !==

// Operadores Unarios

let count = 100;
// ++variable: Operador de PRE incremento
// variable++: Operador de POST incremento
// --variable: Operador de PRE decremento
// variable--: Operador de POST decremento
console.log(++count); // primero incremento -> luego uso de variable
console.log(count++);// primero se usa la variable -> luego incremento
console.log(count);

// +, -
let age = '25';
console.log(typeof age);
console.log(typeof +age);// +'' => number
console.log(+age + 1); // 25 + 1

// Operadores Logicos/Booleanos: &&, || -> true o false
//true AND true
if(10 === 10 && 20 === 21) {
    console.log(true);
}else {
    console.log(false);
}
// true OR false
if(10 === 10 || 2 === 20) {
    console.log('true');
}else {
    console.log('false');
}

const defaultMovie = 'Spiderman';
let movie = 'Batman';

const movieName = movie || defaultMovie; // 'Batman' || 'Spiderman'
console.log('movieName', movieName);

// Operadores Relacionales
// <, >, <=, >=
const result = 2 >= 3; //false
console.log('result', result);

// Tabla ASCII: http://hyperphysics.phy-astr.gsu.edu/hbasees/Electronic/ascii.html
let stringA = 'abc'; // 'abc'
let stringB = 'Cdf'; // 'cdf'
console.log(stringA.toLowerCase() < stringB.toLowerCase());

// Operadores de Asignacion
// +=, -=
let counter = 200;
counter += 10; // counter = counter + 10
console.log('counter', counter);
counter -= 10; // counter = counter - 10
console.log('counter', counter);




