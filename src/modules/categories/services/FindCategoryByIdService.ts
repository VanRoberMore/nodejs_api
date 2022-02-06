import AppErrors from "../../../shared/errors/AppErrors";
import Category from "../infra/typeorm/entities/Category";
import CategoryRepository from "../infra/typeorm/repositories/CategoryRepository";


export default class FindCategoryByIdService {
    public async execute(category_id: number): Promise<Category | undefined> {
        const categoryRepository = new CategoryRepository();

        if (!category_id) {
            throw new AppErrors("ID not valid | Category not found", 404);
        }

        const category = await categoryRepository.findById(category_id);

        return category;
    }
}
