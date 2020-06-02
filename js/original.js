/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания


'use strict';

const numberOfQuestions = 2;
let countOfAnswers = 0;

const numberOfFilms = prompt('Сколько фильмов вы посмотрели?', '');

const personalMovieDB = {
    count: +numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

do {
    
	const   lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
            ratingFilm = prompt('На сколько оцените его?', '');
	
	if (lastFilm.length == 0 || ratingFilm.length == 0)
		continue;
	if (lastFilm.length > 50)
		continue;
			
    personalMovieDB.movies[lastFilm] = ratingFilm;
	countOfAnswers++;
	
} while (countOfAnswers < numberOfQuestions)

console.log('personalMovieDB: ', personalMovieDB);

if (personalMovieDB.count < 10) {
	console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count <= 30) {
	console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
	console.log('Вы киноман');
} else {
	console.log('Произошла ошибка');
};











