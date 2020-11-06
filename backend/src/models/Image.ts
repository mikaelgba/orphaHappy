import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Orphanage from './Orphanage';
/*  strictPropertyInitialization no tsconfig.ts precisa ser false*/
/*  e também habilitar  "experimentalDecorators" e "emitDecoratorMetadata", ambos precisam ser true */

@Entity('images')
export default class Image {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    path: string;

    @ManyToOne(() => Orphanage, orphanage => orphanage.images)
    @JoinColumn({name: 'id_orphanage'})
    orphanage: Orphanage;
}