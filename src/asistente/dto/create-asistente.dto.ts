import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateAsistenteDto {
    @IsNotEmpty()
    @IsString()
    nombre: string;

    @IsNotEmpty()
    @IsString()
    codigoEstudiante: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;
}
