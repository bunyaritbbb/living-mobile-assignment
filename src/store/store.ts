import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsString, IsNumber, MinLength, Min, IsDefined } from 'class-validator'

@Entity()
export class Store {
    @PrimaryGeneratedColumn('uuid')
    id: number;
  
    @Column()
    name: string;

    @Column()
    @MinLength(50)
    description: string;

    @Column()
    @IsNumber()
    rating: number;
   
}