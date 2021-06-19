import { Controller, Get, Post, Put, Delete, Body, Req , Res, Param} from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Request, Response} from 'express';
import { Category } from './category';
import { CategoryService } from './category.service';
import { CategoryModel } from './category.model';

 
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto): Promise<Category> {
    return this.categoryService.create(createCategoryDto);
  }

  @Get()
  async findAll() {
    const category = await this.categoryService.findAll();
    return category;
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Category> {
    return this.categoryService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Category> {
    return this.categoryService.remove(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateStoreDto: CreateCategoryDto) {
    return this.categoryService.update(id, updateStoreDto);
  }

}



