import { DeleteResult } from "typeorm";
import AppErrors from "../../../shared/errors/AppErrors";
import CategoryRepository from "../infra/typeorm/repositories/CategoryRepository";


import FindCategoryByIdService from "./FindCategoryByIdService";

export default class DeleteCategoryService {
    public async execute(category_id: number): Promise<DeleteResult> {
        const categoryRepository = new CategoryRepository();
    
        if (!category_id) {
        throw new AppErrors("ID not valid | Category not found", 404);
        }
    
        const findCategoryById = new FindCategoryByIdService();
    
        await findCategoryById.execute(category_id);
    
        await categoryRepository.delete(category_id);

        const deleteResult = await categoryRepository.delete(category_id);
    
        return deleteResult;
    }

}