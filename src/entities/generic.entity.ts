import { PrimaryGeneratedColumn } from "typeorm";

export class GenericEntity<T> {
    @PrimaryGeneratedColumn()
    id: T;
}