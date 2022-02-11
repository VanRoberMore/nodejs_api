import AppErrors from "../../../shared/errors/AppErrors";
import ICategoryDTO from "../dtos/ICategoryDTO";
import Category from "../infra/typeorm/entities/Category";
import CategoryRepository from "../infra/typeorm/repositories/CategoryRepository";


export default class CreateCategoryService {
    public async execute(data: ICategoryDTO): Promise<Category> {
        const categoryRepository = new CategoryRepository();

    
        if (Number(data.category_id)) {
            throw new AppErrors("The ID field should not be sent as it is handled by the DBMS!", 422);
        }

        const newCategory = await categoryRepository.create(data);

        return newCategory;
    }
}