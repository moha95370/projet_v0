import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity({name:'users'})
export class User {
    @PrimaryGeneratedColumn({ type : 'bigint' })
    id: number;

    @Column()
    firstname : string;

    @Column()
    lastname : string;

    @Column()
    email : string;

    @Column()
    password : string;

    @Column()
    phone : string;

    @Column()
    createdAt : Date;

}