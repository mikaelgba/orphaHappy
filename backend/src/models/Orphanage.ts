import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

/*  strictPropertyInitialization no tsconfig.ts precisa ser false*/
/*  e também habilitar  "experimentalDecorators" e "emitDecoratorMetadata", ambos precisam ser true */

@Entity('orphanages')
export default class Orphanage {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    latitude: number;

    @Column()
    longitude: number;

    @Column()
    about: string;

    @Column()
    instructions: string;

    @Column()
    opening_hours: string;

    @Column()
    open_on_weekends: boolean;
}