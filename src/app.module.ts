import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { MenuModule } from './menu/menu.module';

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
    MenuModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
