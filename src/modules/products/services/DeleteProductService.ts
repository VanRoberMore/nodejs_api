import { DeleteResult } from 'typeorm';
import AppErrors from '../../../shared/errors/AppErrors';

import ProductRepository from '../infra/typeorm/repositories/ProductRepository';

import FindProductByIdService from './FindProductByIdService';

export default class DeleteProductService {
    public async execute(product_id: number): Promise<DeleteResult> {
        const productRepository = new ProductRepository();

        const findProductById = new FindProductByIdService();

        await findProductById.execute(Number(product_id));

        if(!Number(product_id)){
            throw new AppErrors("The PRODUCT_ID not found | Product not found", 404);
        }

        const deleteResult = await productRepository.delete(Number(product_id));

        return deleteResult;

    }

}
