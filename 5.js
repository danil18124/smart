let numberOfFilms
function start(){
numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
}
}
start();

const personalMovieDB = {
count: numberOfFilms,
movies: {},
actors: {},
genres: [],
private: false
};

for (let i = 0; i < 2; i++) {
const a = prompt('Один из последних просмотренных фильмов?'),
b = prompt('На сколько оцените его?');
/* Если пользователь:
- НЕ оставил пустыми поля для ввода И
- НЕ нажал Отмена И
- название фильма меньше 50 символов, то...
*/
if(a != '' && b != '' && a != null && b != null && a.length < 50) {
personalMovieDB.movies[a] = b; // ...информация заносится в объект movies, иначе...
console.log('done');
}
else{
console.log('error');
i--; // ...декремент, то есть возвращаемся к вопросам.
}
}

if (personalMovieDB.count < 10) {
console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
console.log('Вы киноман');
} else {
console.log('Произошла ошибка');
}

console.log(personalMovieDB);