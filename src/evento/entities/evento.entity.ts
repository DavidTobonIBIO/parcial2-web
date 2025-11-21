import { AsistenteEntity } from "src/asistente/entities/asistente.entity";
import { AuditorioEntity } from "src/auditorio/entities/auditorio.entity";
import { PonenteEntity } from "src/ponente/entities/ponente.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

    @ManyToOne(() => PonenteEntity, ponente => ponente.eventos)
    ponente: PonenteEntity;
    
    @ManyToOne(() => AuditorioEntity, auditorio => auditorio.eventos)
    auditorio: AuditorioEntity;
    
    @OneToMany(() => AsistenteEntity, asistente => asistente.evento)
    asistentes: AsistenteEntity[];

}
