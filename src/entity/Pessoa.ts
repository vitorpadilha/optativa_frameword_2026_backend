import { Column, Entity } from "typeorm";

@Entity("pessoas")
class Pessoa {
    @Column({ primary: true, generated: true })
    id: number;
    @Column({ length: 100 })
    nome: string;
    @Column()
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
    public saudacao(): string {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}

export { Pessoa };

