import { Request, Response } from 'express';
import ProductRepository from '../../typeorm/repositories/ProductRepository';


import CreateProductService from '../../../services/CreateProductService';
import UpdateProductService from '../../../services/UpdateProductService';
import FindProductByIdService from '../../../services/FindProductByIdService';
import DeleteProductService from '../../../services/DeleteProductService';


class ProductsController {
    public async create(request: Request, response: Response): Promise<Response> {
        const data = request.body;

        const createProduct = new CreateProductService();

        const newProduct = await createProduct.execute(data);

        return response.json(newProduct);
    }


    public async update(request: Request, response: Response): Promise<Response> {
        const { product_id } = request.params;
        const data = request.body;

        const updateProduct = new UpdateProductService();

        const dataToUpdate = { ...data, product_id: Number(product_id) };

        const productUpdated = await updateProduct.execute(dataToUpdate);

        return response.json(productUpdated);
    }

    public async index(request: Request, response: Response): Promise<Response> {
        const productRepository = new ProductRepository();

        const allProducts = await productRepository.index();

        return response.json(allProducts);

    }

    public async findById(request: Request, response: Response): Promise<Response> {
        const { product_id } = request.params;

        const findProductById = new FindProductByIdService();

        const productById = await findProductById.execute(Number(product_id));

        return response.json(productById);

    }

  
    public async delete(request: Request, response: Response): Promise<Response> {
        const { product_id } = request.params;

        const deleteProduct = new ProductRepository();

        await deleteProduct.delete(Number(product_id));

        return response.json({message: 'Product deleted successfully!'});

    }

}

export default new ProductsController();
