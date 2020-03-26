// Objetos

// Notacion Literal: Inicializacion de objetos
const movie = {
    name: 'Joker',
    releaseDate: '2019-10-04',
    time: 2,
    adult: false,
    genres: ['crime', 'drama'],
    status: {
        released: true,
        score: 0.82
    }
};

console.log('movie', movie);

// Accediendo a las propiedades de un objeto
console.log('name', movie.name);
console.log('status.released', movie.status.released);

// Object destructuring
const {time, genres} = movie;
console.log('time', time);
console.log('genres', genres);

// Asignacion sin declaracion
({movieName, release} = {movieName: movie.name, release: movie.releaseDate});
console.log(movieName, release);

// Agregar propiedades
movie.director = 'Todd Phillips';
console.log(movie);

// Objeto a Cadena
const movieString = JSON.stringify(movie);
console.log(movieString);

// Cadena a Objeto
const movieObj = JSON.parse(movieString);
console.log(movieObj);
console.log(movieObj.name);