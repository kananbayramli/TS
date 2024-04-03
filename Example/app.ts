import { Product } from "./Product";
import { ProductService } from "./ProductService";

let _productService = new ProductService();

let result;

result = _productService.getProducts();
console.log(result);
result = _productService.getById(2);
_productService.deleteProduct(result);
console.log(result);


let p = new Product();

p.name = "IPhone 5s";
p.price = 1200;
p.category = "Phone";

//_productService.saveProduct(p);

console.log(result);
