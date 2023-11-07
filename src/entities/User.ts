import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm"


console.log(__dirname);
@Entity({ name: "users"})
export class User {
    @PrimaryColumn({ type: "int", length: 11 })
    id: string;

    @Column({ type: "varchar", length: 50 })
    name: string;

    @Column({ type: "varchar", length: 255 })
    username: string;
}

