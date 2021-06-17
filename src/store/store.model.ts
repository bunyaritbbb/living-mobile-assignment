import { Column, Model, Table } from 'sequelize-typescript';
import { SequelizeModule } from '@nestjs/sequelize';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Table({
    tableName: 'Store',
})
export class StoreModel extends Model {
    @PrimaryGeneratedColumn('uuid')
    id: number;
  
    @Column
    name: string;

    @Column
    description: string;

    @Column
    rating: number;
}