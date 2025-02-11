import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 255 }) // Explizit den Typ angeben!
  name!: string;

  @Column({ type: "varchar", length: 255 })
  surname!: string;

  @Column({ type: "varchar", length: 255, unique: true })
  email!: string;

  @Column({ type: "varchar", length: 20 })
  telephone!: string;
}