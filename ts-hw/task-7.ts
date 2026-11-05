/*
    Pick і Omit:
    Є інтерфейс Product з ключами:
    id, title, price, description
    
    Задача:
    a) Створити тип ProductPreview за допомогою Pick, який містить тільки title і price.
    b) Створити тип ProductWithoutDescription за допомогою Omit, який містить всі ключі, крім description.
*/

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
}

type ProductPreview = Pick<Product, "title" | "price">;

type ProductWithoutDescription = Omit<Product, "description">;
