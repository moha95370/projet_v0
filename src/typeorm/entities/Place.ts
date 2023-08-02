import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "places"})
export class Place {

    @PrimaryGeneratedColumn({ type: 'bigint'})
    id: number;

    @Column({ default:null})
    name: string;

    @Column({ default: null})
    description: string;

    @Column({ type: 'decimal', precision: 10, scale: 6 })
    latitude: number;

    @Column({ type: 'decimal', precision: 10, scale: 6 })
    longitude: number;
}





