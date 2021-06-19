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

  findOne(id: string): Promise<Menu> {
    return this.menuRepo.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: string): Promise<Menu> {
    const menu = this.menuRepo.findOne({
      where: {
        id,
      },
    });

    (await menu).destroy()
    return
  }

  async update(id: string, newData): Promise<Menu>{

    const menu = await this.menuRepo.findOne({
      where: {
        id,
      },
    });

    menu.name = newData.name;
    menu.categoryId = newData.categoryId;
    menu.price = newData.price;

    menu.save()

    return
  }

   
}
