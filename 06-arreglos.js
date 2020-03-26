// Arreglos 

// Sintaxis: []
const movies = ['spiderman', 'batman', 'jumanji'];
console.log(movies);

// new Array()
const years = new Array(2016, 2017, 2018, 2019, 2020);
console.log(years);

const mix = ['hello', true, 10];

// Accediendo a los datos
console.log(movies[0]); // primera posicion
console.log(movies[1]);
console.log(movies[movies.length-1]); // ultima posicion


// Cambiar datos
movies[2] = 'parasite'; // modificando una posicion
movies = ['a', 'b']; 
console.log(movies);

// Agregar elementos al final
movies.push('joker');
console.log(movies);

// Agrerar elementos al inicio
movies.unshift('frozen');
console.log(movies);

// Eliminar elementos(ultimo)
movies.pop();
console.log(movies);

// Buscar 'batman'
console.log(movies.indexOf('batman'));

// Invertir un arreglo
movies.reverse();
console.log(movies);

// Ordenar
movies.sort();
console.log(movies);

