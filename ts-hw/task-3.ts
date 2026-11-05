/*
    Масив машин:
    Є масив cars. 
    Створи інтерфейс Car і типізуй цей масив.
*/

interface Car {
    name: string;
    price: number;
}

const cars: Car[] = [
    { name: "BMW", price: 85000 },
    { name: "Porsche", price: 130000 },
    { name: "Audi", price: 80000 },
    { name: "Mercedes", price: 90000 }
];