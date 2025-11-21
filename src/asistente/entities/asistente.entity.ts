import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
    
}
