import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { MenuModule } from '../src/menu/menu.module';
import { MenuService } from '../src/menu/menu.service';
import { INestApplication } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

describe('UsersController (e2e)', () => {
    let app: INestApplication;
    let service: MenuService;
    beforeAll(async () => {
        const module = await Test.createTestingModule({
            imports: [
                SequelizeModule.forRoot({
                    dialect: 'sqlite',
                    autoLoadModels: true,
                    synchronize: true,
                    logging: false,
                }),
                MenuModule,
            ],
            providers: [MenuService],
        }).compile();

        app = module.createNestApplication();
        await app.init();

        service = module.get<MenuService>(MenuService);
    });

    afterAll(async () => {
        await app.close();
    });


    describe('findAll', () => {
        it('Get all', async () => {
            return request(app.getHttpServer())
                .get('/menu')
                .expect(200);
                
        });
    });

    describe('findOne', () => {
        it('Get one from Id', async () => {
            const id = "1"

            return request(app.getHttpServer())
            .get('/menu')
            .expect(200);

        });
    });

    describe('Create', () => {
        it('Create', async () => {
            const createInput = {
                id: 0,
                categoryId: 1,
                name: 'Doe',
                price: 88,
            };

            await service.create(createInput);

            return request(app.getHttpServer())
                .post('/menu')
                .expect(201);

        });
    });

    describe('Update', () => {
        it('Update with id', async () => {
            const newData = {
                id: 0,
                categoryId: 1,
                name: 'menu update',
                price: 88,
            };

            const id = "1"

            await service.update(`${id}` , newData)

            return request(app.getHttpServer())
                .put(`/menu/${id}`)
                .expect(200);

        });
    });


    describe('Delete', () => {
        it('Delete with id', async () => {

            const id = "1";

            await service.remove(`${id}`);

            await request(app.getHttpServer())
                    .get(`/menu/${id}`)
                    .expect(200);

        });
    });



});