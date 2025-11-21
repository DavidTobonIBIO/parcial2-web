import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AuditorioEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nombre: string;

    @Column()
    capacidad: number;

    @Column()
    ubicacion: string;

}
