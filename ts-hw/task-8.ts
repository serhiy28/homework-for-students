/*
    Функція для створення об'єкта Book:
    Створити інтерфейс Book з ключами:
    title (string), pages (number)
    
    Написати функцію createBook, яка приймає title і pages
    і повертає об'єкт типу Book.

    Приклад використання:
    const myBook: Book = createBook("TypeScript для початківців", 120);
*/

interface Book {
    title: string;
    pages: number;
}

function createBook(title: string, pages: number): Book {
    return { title, pages };
}

const myBook: Book = createBook("TypeScript для початківців", 120);
console.log(myBook);
