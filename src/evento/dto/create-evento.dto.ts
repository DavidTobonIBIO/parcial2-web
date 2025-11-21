import { IsDate, IsIn, IsNotEmpty, IsPositive, IsString } from "class-validator";

export class CreateEventoDto {
    @IsNotEmpty()
    @IsString()
    titulo: string;

    @IsString()
    descripcion: string;

    @IsNotEmpty()
    @IsDate()
    fecha: Date;

    @IsNotEmpty()
    @IsPositive()
    duracionHoras: number;

    @IsNotEmpty()
    @IsIn(['Propuesto', 'Aprobado', 'Rechazado'])
    estado: string;

}
