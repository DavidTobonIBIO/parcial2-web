import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EventoEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    titulo: string;

    @Column()
    descripcion: string;

    @Column()
    fecha: Date;

    @Column()
    duracionHoras: number;

    @Column()
    estado: string; // Propuesto, Aprobado, Rechazado

    
}
