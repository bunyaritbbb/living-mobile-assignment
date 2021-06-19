import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { StoreModel } from './store.model';
import { StoreController } from './store.controller';
import { StoreService } from './store.service';


@Module({
    imports: [SequelizeModule.forFeature([StoreModel])],
    exports: [SequelizeModule],
    controllers: [StoreController],
    providers: [StoreService],
})
export class StoreModule {}