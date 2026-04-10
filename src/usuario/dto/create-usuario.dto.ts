import { IsDateString, IsEmail, IsNumber, IsString } from "class-validator";
import { GenericDto } from "src/dto/generic.dto";

export class CreateUsuarioDto extends GenericDto<number> {
        @IsString()
        nome: string;
        @IsDateString()
        dataNascimento: string;
        @IsNumber()
        telefone: number;
        @IsEmail()
        email: string;
        @IsNumber()
        cpf: number;
        @IsNumber()
        cep: number;
}
