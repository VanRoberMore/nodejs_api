import { DeleteResult, Like, getRepository, Repository } from "typeorm";

import IProductDTO from "../../../dtos/IProductDTO";
import IProductRepository from '../../../repositories/IProductRepository';

import Product from "../entities/Product";


export default class ProductRepository implements IProductRepository {
    
        private productRepository: Repository<Product>;

        constructor() {
            this.productRepository = getRepository(Product);
  
        }

    public async create(data: IProductDTO): Promise<Product> {
        const createProduct = this.productRepository.create(data);

        await this.productRepository.save(createProduct);

        return createProduct;
    }

    public async update(data: Partial<IProductDTO>): Promise<Product> {
        const updateProduct = await this.productRepository.save(data);

        return updateProduct;
    }


    public async index(): Promise<Product[]> {
        const products = await this.productRepository.find();

        return products;
    }

    public async findById(product_id: number): Promise<Product | undefined> {
        const byIdProduct = await this.productRepository.findOne(Number(product_id));

        return byIdProduct;
    }

    public async delete(product_id: number): Promise<DeleteResult> {
        const deleteResult = await this.productRepository.delete(Number(product_id));

        return deleteResult;
    }
}