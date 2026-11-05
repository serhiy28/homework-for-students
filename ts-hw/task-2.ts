/*
    Обов'язкові й необов'язкові поля:
    Створи інтерфейс Product з ключами:
    title (string), price (number), description (string, необов'язковий) 
    та призначити його тип об'єкту product.
*/

interface Product {
    title: string;
    price: number;
    description?: string;
}

const product: Product = {
    title: "Телефон",
    price: 1000
};
