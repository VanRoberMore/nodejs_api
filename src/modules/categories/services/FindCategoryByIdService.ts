import AppErrors from "../../../shared/errors/AppErrors";
import Category from "../infra/typeorm/entities/Category";
import CategoryRepository from "../infra/typeorm/repositories/CategoryRepository";


export default class FindCategoryByIdService {
    public async execute(category_id: number): Promise<Category | undefined> {
        const categoryRepository = new CategoryRepository();

        const categoryById = await categoryRepository.findById(category_id);
        
        if (!categoryById) {
            throw new AppErrors("ID not valid bla bla | Category not found", 404);
        }

        return categoryById;
    }
}
