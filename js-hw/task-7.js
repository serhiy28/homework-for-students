/*
    Функція з колбеком:
    Створити функцію calculate, яка приймає два числа і колбек.
    Колбек визначає дію: додавання або віднімання.
*/

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}


function calculate(x, y, callback) {
    return callback(x, y);
}

console.log(calculate(5, 3, add)); // 8
console.log(calculate(5, 3, subtract)); // 2
