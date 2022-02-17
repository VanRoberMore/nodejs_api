import { DeleteResult } from 'typeorm';
import IProductDTO from './IProductDTO';

import Product from '../infra/typeorm/entities/Product';


export default interface IProductRepository {
    create(data: IProductDTO): Promise<IProduct>;
    update(data: IProductDTO): Promise<IProduct>;
    index(): Promise<IProduct[]>;
    findById(product_id: number): Promise<IProduct | undefined>;
    delete(product_id: number): Promise<DeleteResult>;
}
