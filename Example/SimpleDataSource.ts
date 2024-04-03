import { Product } from "./Product";

export class SimpleDataSource{
    private products: Array<Product>;

    constructor() {
        this.products = new Array<Product>(
            new Product(1, "Samsung S5", "Phone", 1000),
            new Product(2, "Samsung S6", "Phone", 2000),
            new Product(3, "Samsung S7", "Phone", 3000),
            new Product(4, "Samsung S8", "Phone", 4000)
        );   
    }

    getProducts(): Product[] {
        return this.products;
    }
}