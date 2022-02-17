import AppErrors from "../../../shared/errors/AppErrors";
import IProductDTO from '../../products/dtos/IProductDTO';
import Product from '../../products/infra/typeorm/entities/Product';
import ProductRepository from '../infra/typeorm/repositories/ProductRepository';

export default class CreateProductService {
    public async execute(data: IProductDTO): Promise<Product> {
        const productRepository = new ProductRepository();
          
        if(data.product_id) {
            throw new AppErrors("The PRODUCT_ID field should not be sent as it is handled by the DBMS!", 422);
        }
         
        const newProduct = await productRepository.create(data);

        return newProduct;
    }


}
