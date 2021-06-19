// import { Repository, EntityRepository } from 'typeorm';
// import { Store } from '../store';
// import { CreateStoreDto } from '../dto/create-store.dto';
// import { UpdateStoreDto } from '../dto/update-store.dto';
// import { Injectable } from '@nestjs/common';
// // @EntityRepository(Store)
// // export class ProductsRepository extends Repository<Store> {}


// @Injectable()
// @EntityRepository(Store)
// export class ProductsRepository extends Repository<Store> {

//     public async findAll(): Promise<Store[]> {
//         return await this.find({});
//     } 

//     public async findById(productId: number): Promise<Store> {
//         return await this.findOne(productId);
//     }

//     public async createStore(
//         createStoreDto: CreateStoreDto,
//     ): Promise<Store> {
//         const { name, description, rating } = createStoreDto;
//         const store = new Store();
//         store.name = name;
//         store.description = description;
//         store.rating = rating;

//         await this.save(store);
//         return store;
//     }

//     public async editStore(
//         productId: number,
//         updateStoreDto: UpdateStoreDto,
//     ): Promise<Store> {
//         const { name, description, rating } = updateStoreDto;
//         const store = await this.findOne(productId);
//         store.name = name;
//         store.description = description;
//         store.rating = rating;
//         await this.save(store);

//         return store;
//     }

//     public async destroy(productId: number): Promise<void> {
//         const product = await this.findOne(productId);
//         await this.remove(product);
//     } 
// }
