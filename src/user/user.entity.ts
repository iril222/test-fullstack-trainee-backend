import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column('float')
  height: number;

  @Column('float')
  weight: number;

  @Column()
  gender: string;

  @Column()
  location: string;

  @Column()
  photo: string;
}
