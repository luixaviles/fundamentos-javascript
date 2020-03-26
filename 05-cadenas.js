// CADENAS
const course = 'JavaScript';
const attendees = 100;

// Concatenacion. Operador '+' concatenacion
let message = 'The course ' + course + ' has ' + attendees + ' attendees.';
console.log('message', message);

// ES6(ECMAScript 2015)
// Template String
// backticks: ``
message = `The course ${course} has ${attendees} attendees.`;
console.log('message', message);

// Cadenas multilinea
message = `
The course ${course} 
has ${attendees} 
attendees.
`;

console.log('message', message);

// Operar con Cadenas
console.log('course.length', course, course.length);
console.log('course.toUpperCase()', course, course.toUpperCase());
console.log(course.split(''));
console.log(course.substring(4));
console.log(course.substring(4, course.length-1));

