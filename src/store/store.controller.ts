import { Controller, Get, Post, Put, Delete, Body, Req , Res, Param} from '@nestjs/common';
import { CreateStoreDto } from './dto/create-store.dto';
import { Request, Response} from 'express';
import { Crud } from '@nestjsx/crud';
import { Store } from './store';
import { StoreService } from './store.service';
import { StoreModel } from './store.model';

@Controller('store')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Post()
  create(@Body() createStoreDto: CreateStoreDto): Promise<Store> {
    return this.storeService.create(createStoreDto);
  }

  @Get()
  async findAll() {
    const store = await this.storeService.findAll();
    return store;
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Store> {
    return this.storeService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Store> {
    return this.storeService.remove(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateStoreDto: CreateStoreDto) {
    return this.storeService.update(id, updateStoreDto);
  }

}



