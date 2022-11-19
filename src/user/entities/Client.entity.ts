import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, } from "typeorm";
import { UsersTypeRoles } from "../enums/UserTypeRoles.enum";
import { Attendance } from "src/attendance/entities/Attendance.entity";

@Entity()
export class Client {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: UsersTypeRoles
  })
  role: UsersTypeRoles;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  attendances: Attendance[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}