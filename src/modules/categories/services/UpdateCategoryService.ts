import AppErrors from '../../../shared/errors/AppErrors';

import ICategoryDTO from '../dtos/ICategoryDTO';
import Category from '../infra/typeorm/entities/Category';
import CategoryRepository from '../infra/typeorm/repositories/CategoryRepository';

import FindCategoryByIdService from './FindCategoryByIdService';

export default class UpdateCategoryService {
    public async execute(data: ICategoryDTO): Promise<Category> {
        const categoryRepository = new CategoryRepository();
        const findCategoryById = new FindCategoryByIdService();

        if (!data.category_id) {
            throw new AppErrors("ID not valid | Category not found", 404);
        }

        await findCategoryById.execute(Number(data.category_id));

        const categoryPatch = await categoryRepository.update(data);

        return categoryPatch;
    }
}
