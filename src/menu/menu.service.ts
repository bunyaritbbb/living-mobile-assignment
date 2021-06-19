import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateMenuDto } from './dto/create-menu.dto';
import { MenuModel } from './menu.model';
import { Menu } from './menu'

@Injectable()
export class MenuService {
  constructor(
    @InjectModel(MenuModel)
    private menuRepo: typeof MenuModel
  ) {}


  async create(createMenuDto: CreateMenuDto): Promise<Menu> {
    const menu = new this.menuRepo(createMenuDto);
    return menu.save();
  }

  findAll() {
    return this.menuRepo.findAll();
  }

   
}
