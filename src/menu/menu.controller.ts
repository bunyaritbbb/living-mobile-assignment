import { Controller, Get, Post, Put, Delete, Body, Req , Res, Param} from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { Menu } from './menu';
import { MenuService } from './menu.service';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  create(@Body() createMenuDto: CreateMenuDto): Promise<Menu> {
    return this.menuService.create(createMenuDto);
  }

  @Get()
  async findAll() {
    const menu = await this.menuService.findAll();
    return menu;
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Menu> {
    return this.menuService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Menu> {
    return this.menuService.remove(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateStoreDto: CreateMenuDto) {
    return this.menuService.update(id, updateStoreDto);
  }

}



