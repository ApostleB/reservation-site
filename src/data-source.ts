import { DataSource } from "typeorm"
import dotenv from 'dotenv';
import { User } from "./entities/user";
dotenv.config();

export const myDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: ["./entities/*.ts", "src/entities/*.ts", "/src/entities/*.ts"],
    logging: true,
    synchronize: true,
})