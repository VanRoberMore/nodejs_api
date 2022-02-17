import AppErrors from '../../../shared/errors/AppErrors';
import Product from '../infra/typeorm/entities/Product';
import ProductRepository from '../infra/typeorm/repositories/ProductRepository';
export default class FindProductByIdService {
    
    public async execute(product_id: number): Promise<Product> {
        const productRepository = new ProductRepository();
    
        const productById = await productRepository.findById(Number(product_id));

        if (!productById) {
            throw new AppErrors("PRODUCT_ID not found | Product not found", 404);
        }

        return productById;
    }


}

