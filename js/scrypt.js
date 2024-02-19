// Записать данные в локальное хранилище
localStorage.setItem('key', 'Hello World!');

// Получить данные из локального хранилища
let str = localStorage.getItem('key');

console.log(str);

/* Напишите скрипт, который сохранит в локальном хранилище три числа под тремя разными ключами.
Запустите этот скрипт, чтобы данные сохранились.
Затем напишите скрипт, который получит ваши три числа из локального хранилища и найдет их сумму.
Запустите второй скрипт и убедитесь в его работоспособности. */

localStorage.setItem('a', 10);
localStorage.setItem('b', 20);
localStorage.setItem('c', 30);

let sum = +localStorage.getItem('a') + +localStorage.getItem('b') + +localStorage.getItem('c');
console.log(sum);

let time = localStorage.getItem('time');

console.log(time);

// метод Date.now(), возвращающий текущую метку времени.
// количество миллисекунд с 1 января 1970 года

if (time === null) {
    let now = Date.now();
    localStorage.setItem('time', now);
}

localStorage.setItem('key', '1');
let value1 = localStorage.getItem('key');

console.log(value1);

localStorage.setItem('key', '2');
value1 = localStorage.getItem('key');

console.log(value1);

// Удалить данные из LS
localStorage.removeItem('a');

// Сделайте счетчик обновления страницы. Пусть счетчик обнуляется после того, как дойдет до 10.

// localStorage.setItem('count', +localStorage.getItem('count') + 1);
// console.log(+localStorage.getItem('count') + 1);

let count = +localStorage.getItem('count') + 1;
if (count > 10) {
    count = 0;
}
localStorage.setItem('count', count);
console.log(`Вы ${count} раз обновили страницу`);

// Количество записей в LS
console.log(`Количество записей в LS ${localStorage.length}`);

// Получение ключа по номеру
let key = localStorage.key(0);
console.log(key);
let value = localStorage.getItem(key);
console.log(value);

console.log('Перебор данных в хранилище')
// Перебор хранилища по индексам
for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);
    console.log(value);
}

// Получить массив ключей и значений хранилища
let keys = Object.keys(localStorage);
let values = Object.values(localStorage);

console.log(`Массив ключей `, keys);
console.log(`Массив значений `, values);

// Хранение структур в LS
let arr = [1, 2, 3, 4, 5];

// JSON.stringify для преобразования объектов в JSON.
// Метод JSON.stringify(student) берёт объект и преобразует его в строку.
// Полученная строка json называется JSON - форматированным объектом.
// Мы можем отправить его по сети или поместить в обычное хранилище данных.
// JSON.parse() - преобразорвать JSON в структуру данных javaScrypt

console.log(arr);
localStorage.setItem('arr', JSON.stringify(arr));

arr = localStorage.getItem('arr');
console.log(`${arr} тип ${typeof arr}`);

arr = JSON.parse(arr);
console.log(`${arr} тип ${typeof arr}`);
// проверка на массив, возвращает true или false
console.log(Array.isArray(arr))

arr.push(1);











