import ICategoryDTO from '../../../../categories/dtos/ICategoryDTO';
import ICategoryRepository from '../../../../categories/repositories/ICategoryRepository';

import { DeleteResult, getRepository, Repository } from 'typeorm';

import Category from '../../../../categories/infra/typeorm/entities/Category';


export default class CategoryRepository implements ICategoryRepository {
  private ormRepository: Repository<Category>;

  constructor() {
    this.ormRepository = getRepository(Category);
  }

  public async create(data: ICategoryDTO): Promise<Category> {
    const category = this.ormRepository.create(data);

    await this.ormRepository.save(category);

    return category;
  }

  public async index(): Promise<Category[]> {
    const categories = await this.ormRepository.find();

    return categories;
  }

  public async findById(category_id: number): Promise<Category | undefined> {
    const category = await this.ormRepository.findOne(Number(category_id));

    return category;
  }

  public async update(data: Partial<ICategoryDTO>): Promise<Category> {
    const category = await this.ormRepository.save(data);

    return category;
    }

  public async delete(category_id: number): Promise<DeleteResult> {
    const category = await this.ormRepository.delete(Number(category_id));

    return category;
  }

  
}
