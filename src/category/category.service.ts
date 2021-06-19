import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './category';
import { CategoryModel } from './category.model';



@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(CategoryModel)
    private categoryRepo: typeof CategoryModel
  ) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const category = new this.categoryRepo(createCategoryDto);
    return category.save();
  }

  findAll() {
    return this.categoryRepo.findAll();
  }

  findOne(id: string): Promise<Category> {
    return this.categoryRepo.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: string): Promise<Category> {
    const category = this.categoryRepo.findOne({
      where: {
        id,
      },
    });

    (await category).destroy()
    return
  }

  async update(id: string, newData): Promise<Category>{

    const category = await this.categoryRepo.findOne({
      where: {
        id,
      },
    });

    category.name = newData.name;

    category.save()

    return
  }
 
   
}
