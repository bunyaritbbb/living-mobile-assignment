import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsString, IsNumber, MinLength, Min, IsDefined } from 'class-validator'

@Entity()
export class Category {
    @PrimaryGeneratedColumn('uuid')
    id: number;
  
    @Column()
    name: string;

    @Column()
    storeId: number;

   
}