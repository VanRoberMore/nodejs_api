import AppErrors from "../../../shared/errors/AppErrors";
import Category from "../infra/typeorm/entities/Category";
import CategoryRepository from "../infra/typeorm/repositories/CategoryRepository";


export default class FindAllCategoriesService {
    async execute(): Promise<Category[]> {
        const categoryRepository = new CategoryRepository();
        const categories = await categoryRepository.index();
        return categories;
    }
}
