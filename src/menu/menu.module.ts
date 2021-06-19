import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { MenuModel } from './menu.model';
import { MenuService } from './menu.service';

@Module({
    imports: [SequelizeModule.forFeature([MenuModel])],
    exports: [SequelizeModule],
    providers: [MenuService],
})
export class MenuModule {}