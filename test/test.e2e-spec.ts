// // users.e2e-spec.ts
// import * as request from 'supertest';
// import { Test } from '@nestjs/testing';
// import { UsersModule } from '../src/users/users.module';
// import { UsersService } from '../src/users/users.service';
// import { INestApplication } from '@nestjs/common';
// import { SequelizeModule } from '@nestjs/sequelize';

// describe('UsersController (e2e)', () => {
//     let app: INestApplication;
//     let service: UsersService;
//     beforeAll(async () => {
//         const module = await Test.createTestingModule({
//             imports: [
//                 SequelizeModule.forRoot({
//                     dialect: 'sqlite',
//                     autoLoadModels: true,
//                     synchronize: true,
//                     logging: false,
//                 }),
//                 UsersModule,
//             ],
//             providers: [UsersService],
//         }).compile();

//         app = module.createNestApplication();
//         await app.init();

//         service = module.get<UsersService>(UsersService);
//     });

//     afterAll(async () => {
//         await app.close();
//     });
// });


// users.e2e-spec.ts
import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { StoreModule } from '../src/store/store.module';
import { StoreService } from '../src/store/store.service';
import { INestApplication } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { StoreController } from 'src/store/store.controller';

describe('UsersController (e2e)', () => {
    let app: INestApplication;
    let service: StoreService;
    beforeAll(async () => {
        const module = await Test.createTestingModule({
            imports: [
                SequelizeModule.forRoot({
                    dialect: 'sqlite',
                    autoLoadModels: true,
                    synchronize: true,
                    logging: false,
                }),
                StoreModule,
            ],
            providers: [StoreService],
        }).compile();

        app = module.createNestApplication();
        await app.init();

        service = module.get<StoreService>(StoreService);
    });

    afterAll(async () => {
        await app.close();
    });


    describe('findAll', () => {
        it('Get all store', async () => {

            return request(app.getHttpServer())
                .get('/store')
                .expect(200)
                .then((response) => {
                    expect(service.findAll()) ;
                });
                
        });
    });

    describe('findOne', () => {
        it('Get just select from Id', async () => {
            const id = "1"

            return request(app.getHttpServer())
            .get('/store')
            .expect(200)
            .then((response) => {
                expect(service.findOne(id)) ;
            });

        });
    });

    describe('Create', () => {
        it('Create store', async () => {
            const createInput = {
                id: 0,
                name: 'john',
                description: 'Doe',
                rating: 88,
            };

            await service.create(createInput);

            return request(app.getHttpServer())
                .get('/store')
                .expect(200);

        });
    });

    describe('Update', () => {
        it('Update with id', async () => {
            const newData = {
                name: "update",
                description: "update",
                rating: 99,
            };

            const id = "1"

            await service.update(`${id}` , newData)

            return request(app.getHttpServer())
                .put(`/store/${id}`)
                .expect(200);

        });
    });


    describe('Delete', () => {
        it('Delete with id', async () => {

            const id = "1";

            await service.remove(`${id}`);

            await request(app.getHttpServer())
                    .get(`/store/${id}`)
                    .expect(200);

        });
    });
   

});