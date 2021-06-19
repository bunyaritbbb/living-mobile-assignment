import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'secret',
    database: 'backend-rest',
    autoLoadModels: true,
    synchronize: true,
    }),
    CategoryModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
