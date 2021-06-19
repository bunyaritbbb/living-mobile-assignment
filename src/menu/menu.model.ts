import { Column, Model, Table } from 'sequelize-typescript';
import { SequelizeModule } from '@nestjs/sequelize';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Table({
    tableName: 'menu',
})
export class MenuModel extends Model {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column
    categoryId: number

    @Column
    name: string

    @Column
    price: number

}