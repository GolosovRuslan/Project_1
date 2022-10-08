'use strict'

let numberOfFilms = +prompt('Как много фильмов ты посмотрел?');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres:[],
	privat: false
};

const a = prompt('Какой последний фильм ты посмотрел?', ''),
	  b = +prompt('На сколько оцените его?', ''),
	  c = prompt('Какой последний фильм ты посмотрел?', ''),
	  d = +prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);