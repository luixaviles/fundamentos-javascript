// Tipado: Tipos de Datos
// JS tiene un tipado dinamico

let course = 'JavaScript'; // string
course = 123;   // number
course = false; // boolean

// tipos en JS: Number, Boolean, String, undefined, BigInt, Symbol

const movieId = 123;
const isAvailable = true;
const movie = 'Avengers';
let actor;

// Consultar el Tipo de Dato: typeof <variable>/<valor>
console.log(movieId, typeof movieId);
console.log(isAvailable, typeof isAvailable);
console.log(movie, typeof movie);
console.log(actor, typeof actor);
console.log(10, typeof 10);

// Uso de BigInt
let maximo = Number.MAX_SAFE_INTEGER; // 2^53 - 1
console.log('maximo', maximo);
console.log('maximo+1', maximo+1);
console.log('maximo+2', maximo+2);
console.log('maximo+3', maximo+3);

let bigInt = 9007199254740991n; // BigInt
console.log('bigInt', bigInt);
console.log('bigInt+1', bigInt+1n);
console.log('bigInt+2', bigInt+2n);
console.log('bigInt+3', bigInt+3n); 

bigInt = 2n ** 100n;
console.log('bigInt', bigInt);



