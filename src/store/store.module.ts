import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { StoreModel } from './store.model';
import { StoreController } from './store.controller';


@Module({
    imports: [SequelizeModule.forFeature([StoreModel])],
    exports: [SequelizeModule],
    controllers: [StoreController],
})
export class StoreModule {}