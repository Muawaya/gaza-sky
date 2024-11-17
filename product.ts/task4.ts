interface Product {
    name: string;
    price: number;
}

function calculateTotalPrice(products: Product[]): number {
    let total = 0; 
    for (let i = 0; i < products.length; i++) {
        total += products[i].price; 
    }
    return total; 
}


