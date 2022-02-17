import ICategoryDTO from '../../../../categories/dtos/ICategoryDTO';
import ICategoryRepository from '../../../../categories/repositories/ICategoryRepository';

import { DeleteResult, getRepository, Repository } from 'typeorm';

import Category from '../entities/Category';


export default class CategoryRepository implements ICategoryRepository {
  private categoryRepository: Repository<Category>;

  constructor() {
    this.categoryRepository = getRepository(Category);
  }

  public async create(data: ICategoryDTO): Promise<Category> {
    const createCategory = this.categoryRepository.create(data);

    await this.categoryRepository.save(createCategory);

    return createCategory;
  }


  public async index(): Promise<Category[]> {
    const categories = await this.categoryRepository.find();

    return categories;
  }

  public async findById(category_id: number): Promise<Category | undefined> {
    const category = await this.categoryRepository.findOne(Number(category_id));

    return category;
  }

  public async update(data: Partial<ICategoryDTO>): Promise<Category> {
    const category = await this.categoryRepository.save(data);

    return category;
    }

  public async delete(category_id: number): Promise<DeleteResult> {
    const category = await this.categoryRepository.delete(Number(category_id));

    return category;
  }

  
}
