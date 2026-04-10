import { GenericEntity } from "src/entities/generic.entity";
import { Column, Entity } from "typeorm";
@Entity("usuarios")
export class Usuario extends GenericEntity<number> {
    @Column()
    nome: string;
    @Column()
    dataNascimento: Date;
    @Column()
    telefone: number;
    @Column()
    email: string;
    @Column()
    cpf: number;
    @Column()
    cep: number;

}
