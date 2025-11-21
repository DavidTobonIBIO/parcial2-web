import { IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";

export class CreateAuditorioDto {
    @IsNotEmpty()
    @IsString()
    nombre: string;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    capacidad: number;

    @IsNotEmpty()
    @IsString()
    ubicacion: string;
}
