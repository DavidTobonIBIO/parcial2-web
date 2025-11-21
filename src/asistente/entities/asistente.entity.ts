import { EventoEntity } from "src/evento/entities/evento.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AsistenteEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nombre: string;

    @Column()
    codigoEstudiante: string;

    @Column()
    email: string;

    @ManyToOne(() => EventoEntity, evento => evento.asistentes)
    evento: EventoEntity;
    
}
