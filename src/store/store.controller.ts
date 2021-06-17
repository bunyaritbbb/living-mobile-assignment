import { Controller, Get, Post, Put, Delete, Body, Req , Res, Param} from '@nestjs/common';
import { CreateStoreDto } from './dto/create-store.dto';
import { Request, Response} from 'express';

@Controller('store')
export class StoreController {

    @Get()
    findAll() :string {
        return 'Get all'
    }

    @Get(':id')
    findOne(@Param('id') id) :string {
        return `Are looking for ${id} ?`
    }

    @Post()
    create(@Body() createStoreDto:CreateStoreDto ): String {
        return `Name:${createStoreDto.name} Desc:${createStoreDto.description} Rating:${createStoreDto.rating}`;
    }

    @Delete(':id')
    delete(@Param('id') id):string{
        return `Delete ${id}`
    }


    @Put(':id')
    update(@Body() updateStoreDto:CreateStoreDto, @Param('id') id) :string {
        return `Update ${id} - ${updateStoreDto}`;
    }
}


