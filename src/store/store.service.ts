import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateStoreDto } from './dto/create-store.dto';
import { Store } from './store';
import { StoreModel } from './store.model';

@Injectable()
export class StoreService {
  constructor(
    @InjectModel(StoreModel)
    private storeRepo: typeof StoreModel
  ) {}


  async create(createStoreDto: CreateStoreDto): Promise<Store> {
    const store = new this.storeRepo(createStoreDto);
    return store.save();
  }

  findAll() {
    return this.storeRepo.findAll();
  }

  findOne(id: string): Promise<Store> {
    return this.storeRepo.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: string): Promise<Store> {
    const store = this.storeRepo.findOne({
      where: {
        id,
      },
    });

    (await store).destroy()
    return
  }

  async update(id: string, newData): Promise<Store>{

    const store = await this.storeRepo.findOne({
      where: {
        id,
      },
    });

    store.name = newData.name;
    store.description = newData.description;
    store.rating = newData.rating;

    store.save()

    return
  }
 
   
}
