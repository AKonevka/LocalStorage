// Записать данные в локальное хранилище

//localStorage.setItem('key', 'Hello World!');

// Получить данные из локального хранилища

//let str = localStorage.getItem('key');

localStorage.setItem('num1', '1');
localStorage.setItem('num2', '2');
localStorage.setItem('num3', '3');



let num1 = +localStorage.getItem('num1');
let num2 = +localStorage.getItem('num2');
let num3 = +localStorage.getItem('num3');

console.log(num1 + num2 + num3);

let time = localStorage.getItem('time');
console.log(time);

// метод Date.now, возвращающий текущую метку времени. 
// количество миллисекунд с 1 января 1970 года

if (time === null) {
    let now = Date.now();
    localStorage.setItem('time', now);
}

// Добавление значения
localStorage.setItem('key', '1');
let value1 = localStorage.getItem('key');
console.log(value1);

// презапись значения
localStorage.setItem('key', '2');
value1 = localStorage.getItem('key')
console.log(value1);

// удаление данных из LS (localStorage)
localStorage.removeItem('a');
//------------------------------------------
let counter = 0;

localStorage.setItem('counter', counter + 1);

let count = localStorage.getItem('counter');


























