/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

function filmViewNumber(){
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');  
    }
}

filmViewNumber();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function checkViewFilmInfo(){
    for(let i = 0; i < 2; i++){
        const lastViewFilm = prompt('Один из последних просмотренных фильмов?',''),
        lastViewFilmRating = prompt('На сколько оцените его?','');
    
        if(lastViewFilm != null && lastViewFilmRating != null && lastViewFilm != '' && lastViewFilmRating != '' && lastViewFilm.length < 50){
            personalMovieDB.movies[lastViewFilm] = lastViewFilmRating; 
        }else{
            i--;
        }
    }
}

checkViewFilmInfo();

function personalLevel(){
    if(+personalMovieDB.count < 10){
        console.log('Просмотрено довольно мало фильмов');
    }else if(+personalMovieDB.count >= 10 && +personalMovieDB.count < 30){
        console.log('Вы классический зритель');
    }else if(+personalMovieDB.count >= 30){
        console.log('Вы киноман');
    }else{
        console.log('Произошла ошибка');
    }
}

personalLevel();

function writeYourGenres(){
    for(let i = 1; i <= 3; i++){

        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`,'');

    }
}

writeYourGenres();

const showMyDB = () => {
    if(personalMovieDB.privat){
        return;
    }

    console.log(personalMovieDB);
}

showMyDB();