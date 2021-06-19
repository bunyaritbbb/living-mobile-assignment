import { Column, Model, Table } from 'sequelize-typescript';
import { SequelizeModule } from '@nestjs/sequelize';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Table({
    tableName: 'category',
})
export class CategoryModel extends Model {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column
    name: string;

    @Column
    storeId: number;
}