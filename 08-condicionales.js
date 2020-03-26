// Condicionales

const counter = 50;

if(counter === 100) { // number === number
    console.log('counter is 100');
} else if(counter < 100) {
    console.log('counter is less than 100');
} else {
    console.log('counter is greater than 100');
}

// Asignar valores basados en una condicion
let costTicket;
let isMember = true;
if(isMember) {
    costTicket = 50;
} else {
    costTicket = 100;
}
console.log('costTicket', costTicket);
// Operador ternario en JS
// <condicion>? valor1: valor2
// <true> => ticketPrice = valor1
// <false> => ticketPrice = valor2
const ticketPrice = isMember? 50: 100;
console.log('ticketPrice', ticketPrice);
