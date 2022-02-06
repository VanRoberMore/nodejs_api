import { DeleteResult,  } from "typeorm";
import ICategoryDTO from '../../categories/dtos/ICategoryDTO';
import Category from "../infra/typeorm/entities/Category";

export default interface ICategoryRepository {
    create(data: ICategoryDTO): Promise<Category>;
    index(): Promise<Category[]>;
    findById(category_id: number): Promise<Category | undefined>;
    update(data: ICategoryDTO): Promise<Category>;
    delete(category_id: number): Promise<DeleteResult>;
}

