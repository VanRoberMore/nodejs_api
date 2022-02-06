import { Request, Response } from "express";
import CategoryRepository from "../../typeorm/repositories/CategoryRepository";

import CreateCategoryService from "../../../services/CreateCategoryService";
import UpdateCategoryService from "../../../services/UpdateCategoryService";

class CategoriesController {

    public static async create(request: Request, response: Response): Promise<Response> {
        const data = request.body;
    
        const createCategory = new CreateCategoryService();
        const category = await createCategory.execute(data);
    
        return response.json(category);
    }
    
    public static async update(request: Request, response: Response): Promise<Response> {
        const { category_id } = request.params;
        const data = request.body;
    
        const updateCategory = new UpdateCategoryService();
    
        const dataToUpdate = { ...data, category_id: Number(category_id) };
    
        const categoryUpdated = await updateCategory.execute(dataToUpdate);
    
        return response.json(categoryUpdated);
    }
    
    public static async index(request: Request, response: Response): Promise<Response> {
        const categoryRepository = new CategoryRepository();
        const categories = await categoryRepository.index();
    
        return response.json(categories);
    }
    
    public static async findById(request: Request, response: Response): Promise<Response> {
        const { category_id } = request.params;
    
        const categoryRepository = new CategoryRepository();
        const categoryById = await categoryRepository.findById(Number(category_id));
    
        return response.json(categoryById);
    }

    public static async delete(request: Request, response:Response): Promise<Response> {
        const { category_id } = request.params;
    
        const categoryRepository = new CategoryRepository();
        const categoryById = await categoryRepository.findById(Number(category_id));
    
        await categoryRepository.delete(Number(category_id));
    
        return response.json(categoryById);
    }
   
}

export default CategoriesController;