// Funciones en JS

function createMovie(title = 'Default', release = '2020', time = 0) {
    // Crear un objeto JS. Inicializacion, notacion literal
    return {
        title: title,
        release: release,
        time: time
    };
}

// Invocar la funcion
const movie = createMovie('Star Wars', '2019-12-25', 2);
console.log('movie', movie);
console.log(createMovie('Spiderman'));

// Arrow Functions / Notacion flecha ES6
const createActor = (id=0, name='Default', age=0) => {
    return {
        id,
        name,
        age
    };
};

const actor = createActor(1, 'Robert Downey Jr.', 54);
console.log(actor);

const increment = value => value + 1; // return value + 1

let value = 10;
console.log('value', value, increment(value));

const movies = [
    {
        id: 1,
        title: 'Joker',
        runtime: 2.2,
        releaseDate: '2019-10-04',
        adult: false
    }, 
    {
        id: 2,
        title: 'Star Wars',
        runtime: 2.5,
        releaseDate: '2019-12-25',
        adult: false
    },
    {
        id: 3,
        title: 'The Invisible Man',
        runtime: 1.8,
        releaseDate: '2020-02-26',
        adult: false
    }
];

console.log(movies);

// Ciclo via forEach
movies.forEach(movie => console.log(movie.title));

const titles = movies.map(movie => ({
    ...movie, // Spread Operator: Copiar todas las propiedades
    title: movie.title.toUpperCase(),
    date: new Date(movie.releaseDate)
}));
console.log('titles', titles);


// Filtrado de elementos: filter
const shortMovies = movies.filter(movie => movie.runtime < 2);

console.log(shortMovies);

const concatResult = 
     movies
     .filter(movie => movie.runtime < 2)
     .map(movie => ({
        title: movie.title.toUpperCase(),
        runtime: movie.runtime
    }));
console.log(concatResult);