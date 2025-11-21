import { IsEmail, IsIn, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePonenteDto {
    @IsNotEmpty()
    @IsNumber()
    cedula: number;

    @IsNotEmpty()
    @IsString()
    nombre: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsIn(["Interno", "Privado"])
    tipoPonente: string;

    @IsNotEmpty()
    @IsString()
    especialidad: string;
}
