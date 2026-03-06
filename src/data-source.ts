import "reflect-metadata"
import { DataSource } from "typeorm"
import { Pessoa } from "./entity/Pessoa"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "apptypescript",
    synchronize: true,
    logging: false,
    entities: [Pessoa],
    migrations: [],
    subscribers: [],
})
