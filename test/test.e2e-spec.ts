import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { CategoryModule } from '../src/category/category.module';
import { CategoryService } from '../src/category/category.service';
import { INestApplication } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CategoryController } from 'src/category/category.controller';

describe('UsersController (e2e)', () => {
    let app: INestApplication;
    let service: CategoryService;
    beforeAll(async () => {
        const module = await Test.createTestingModule({
            imports: [
                SequelizeModule.forRoot({
                    dialect: 'sqlite',
                    autoLoadModels: true,
                    synchronize: true,
                    logging: false,
                }),
                CategoryModule,
            ],
            providers: [CategoryService],
        }).compile();

        app = module.createNestApplication();
        await app.init();

        service = module.get<CategoryService>(CategoryService);
    });

    afterAll(async () => {
        await app.close();
    });


    describe('findAll', () => {
        it('Get all category', async () => {

            return await request(app.getHttpServer())
            .get('/category')
            .expect(200);

        });
    });


    describe('findOne', () => {
        it('Get one from Id', async () => {
            const id = "1"

            return request(app.getHttpServer())
            .get('/category')
            .expect(200);

        });
    });

    describe('Create', () => {
        it('Create', async () => {
            const createInput = {
                id: 0,
                name: 'menu',
                storeId: 50,
            };

            await service.create(createInput);

            return request(app.getHttpServer())
                .get('/category')
                .expect(200);

        });
    });

    describe('Update', () => {
        it('Update with id', async () => {
            const newData = {
                id: 0,
                name: 'menu_update',
                storeId: 50,
            };

            const id = "1"

            await service.update(`${id}` , newData)

            return request(app.getHttpServer())
                .put(`/category/${id}`)
                .expect(200);

        });
    });


    describe('Delete', () => {
        it('Delete', async () => {

            const id = "1";

            await service.remove(`${id}`);

            await request(app.getHttpServer())
                    .get(`/category/${id}`)
                    .expect(200);
        });
    });


});