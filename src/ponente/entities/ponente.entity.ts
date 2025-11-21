import { EventoEntity } from "src/evento/entities/evento.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

    @OneToMany(() => EventoEntity, evento => evento.ponente)
    eventos: EventoEntity[];
}
