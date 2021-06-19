import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsString, IsNumber, MinLength, Min, IsDefined } from 'class-validator'

@Entity()
export class Menu {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column()
    categoryId: number

    @Column()
    name: string

    @Column()
    @IsNumber()
    price: number
   
}