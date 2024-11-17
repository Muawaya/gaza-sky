interface Product {
    name: string;
    price: number;
}

function calculateTotalPrice(products: Product[]): number {
    return products.reduce((total, product) => total + product.price, 0);
}
//____________________________________________________________
const products: Product[] = [
    { name: "Apple", price: 10 },
    { name: "Banana", price: 5 },
    { name: "Orange", price: 7 }
];

const totalPrice = calculateTotalPrice(products);
console.log(totalPrice); // 22
