import ProductRepository from '../infra/typeorm/repositories/ProductRepository';
import Product from '../infra/typeorm/entities/Product';


export default class FindAllProductsService {
    public async execute(): Promise<Product[]> {
        const productRepository = new ProductRepository();
        const allProducts = await productRepository.findAll();

        return allProducts;
    }

}