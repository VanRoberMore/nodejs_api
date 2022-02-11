import AppErrors from '../../../shared/errors/AppErrors';
import IProductDTO from '../dtos/IProductDTO';

import ProductRepository from '../infra/typeorm/repositories/ProductRepository';

import Product from '../infra/typeorm/entities/Product';

import FindProductByIdService from '../services/FindProductByIdService';

export default class UpdateProductService {
    public async execute(data: IProductDTO): Promise<Product> {
        const productRepository = new ProductRepository();

        const findProductById = new FindProductByIdService();

        if (!Number(data.product_id)) {
            throw new AppErrors("PRODUCT_ID not found | Product not found", 404);
        }

        await findProductById.execute(Number(data.product_id));

        const productPatch = await productRepository.update(data);

        return productPatch;
    }
}
