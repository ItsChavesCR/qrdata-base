import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Cedula: number;

  @Column()
  NombreCompleto: string;

  @Column()
  Carrera: string;

  @Column()
  Nacimiento: string;
}
