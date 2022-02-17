import ProductRepository from '../infra/typeorm/repositories/ProductRepository';
import Product from '../infra/typeorm/entities/Product';
import AppErrors from '../../../shared/errors/AppErrors';


export default class FindAllProductsService {
    public async execute(): Promise<Product[]> {
        const productRepository = new ProductRepository();
        const allProducts = await productRepository.index();

        if(Object.keys(allProducts).length === 0) {
            throw new AppErrors("No products found", 404);
        }

        return allProducts;
    }

}

