
'use strict';

const numberOfFilms = prompt('Сколько фильмов вы посмотрели?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i=0; i<=1; i++) {
    const   lastFilm = prompt('Один из последних просмотренных фильмов?'),
            ratingFilm = prompt('На сколько оцените его?');
    personalMovieDB.movies[lastFilm] = ratingFilm;
}

console.log('personalMovieDB: ', personalMovieDB);