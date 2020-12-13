import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity('foods')
export default class Food {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    image_url: string;

    @Column()
    price: number;

    @Column()
    description: string;
    
}