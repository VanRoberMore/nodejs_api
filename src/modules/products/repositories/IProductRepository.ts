import IProductDTO from './IProductDTO';
import IProductRepository from '../../../../../shared/repositories/IProductRepository';

import { DeleteResult } from 'typeorm';
import Product from '../infra/typeorm/entities/Product';


export default interface IProductRepository {
    create(data: IProductDTO): Promise<IProduct>;
    update(data: IProductDTO): Promise<IProduct>;
    findAll(): Promise<IProduct[]>;
    findById(product_id: number): Promise<IProduct | undefined>;
    findByCategory(category_id: number): Promise<IProduct[]>;
    delete(product_id: number): Promise<DeleteResult>;
}
