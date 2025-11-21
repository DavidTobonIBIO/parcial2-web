import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PonenteEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    cedula: number;

    @Column()
    nombre: string;

    @Column()
    email: string;

    @Column()
    tipoPonente: string; // Interno, Invitado

    @Column()
    especialidad: string;
}
