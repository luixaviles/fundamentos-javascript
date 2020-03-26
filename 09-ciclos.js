// Ciclos en JS

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

// Uso de Ciclos
// inicialiacion; condicion de finalizacion; incremento/control
for(let i=0; i<movies.length; i++) {
    if(movies[i].runtime > 2) {
        // console.log(i, movies[i].title);
    }
}

// Ciclo While
let i = 0;
while(i < movies.length) {
    // console.log(i, movies[i].title);
    i++;
}

// Sintaxis For of Loop/Ciclo
for(let movie of movies) {
    // console.log('movie', movie.title); // movies[i]. NO necesitamos indice!
}

// Ciclo via forEach
movies.forEach(function(movie) { // callback
    console.log(movie.title);
});

const titles = movies.map(function(movie){
    // return movie.title;
    return newMovie = {
        ...movie, // Spread Operator: Copiar todas las propiedades
        title: movie.title.toUpperCase(),
        date: new Date(movie.releaseDate)
    };
});
console.log('titles', titles);


// Filtrado de elementos: filter
const shortMovies = movies.filter(function(movie){
    return movie.runtime < 2; // If true, seleccionamos la pelicula
});

console.log(shortMovies);

const concatResult = 
     movies.filter(function(movie){
         return movie.runtime < 2;
     }).map(function(movie){
        //  return movie.title;
        return {
            title: movie.title.toUpperCase(),
            runtime: movie.runtime
        };
     });


console.log(concatResult);

