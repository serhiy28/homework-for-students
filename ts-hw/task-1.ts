/*
    Створення інтерфейсу:
    Є об'єкт user. 
    Створити для нього інтерфейс User та призначити його тип об'єкту user.
*/

interface User {
    name: string;
    age: number;
}

const user: User = {
    name: "Іван",
    age: 25
};
