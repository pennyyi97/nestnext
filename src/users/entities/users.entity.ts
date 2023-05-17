import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  uid: number;

  @Column({ type: 'varchar', length: 255})
  userId: string;

  @Column({ type: 'varchar', length: 255 })
  password: string;

  @Column({ type: 'varchar', length: 255 })
  email: string;

  @Column({ default: 'default', type: 'varchar', length: 255})
  nickname: string;
}