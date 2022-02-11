import { DeleteResult } from 'typeorm';
import AppErrors from '../../../shared/errors/AppErrors';
import IProductDTO from '../../products/dtos/IProductDTO';

import ProductRepository from '../infra/typeorm/repositories/ProductRepository';

import FindProductByIdService from './FindProductByIdService';

export default class DeleteProductService {
    public async execute(data: IProductDTO): Promise<DeleteResult> {
        const productRepository = new ProductRepository();

        if(!Number(data.product_id)){
            throw new AppErrors("The PRODUCT_ID field should not be sent as it is handled by the DBMS!", 422);
        }

        const findProductById = new FindProductByIdService();

        await findProductById.execute(Number(data.product_id));

        const deleteResult = await productRepository.delete(Number(data.product_id));

        return deleteResult;

    }

}
